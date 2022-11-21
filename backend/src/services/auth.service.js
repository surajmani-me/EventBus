const User = require('../model/users.model')
const crypto = require('crypto')
const { sendMail } = require('../helpers/mail.helper')
const AuthMiddleware = require('../middleware/auth.middleware')
const qs = require('qs')
const axios = require('axios')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})

class AuthService extends AuthMiddleware {
    registerSv = async (userReq) => {
        const { email, password, name } = userReq
        const user = new User({
            email,
            name,
            username: name.toLowerCase().replace(/ /g, ''),
        })
        user.setPassword(password)
        // await sendMail(
        //     user.email,
        //     'Email Verification',
        //     `Please click on the following link to verify your email: ${process.env.BASE_URL}/auth/verify/${user.attributes.emailConfToken}`
        // )
        await user.save()
        return 'User registered successfully'
    }

    loginSv = async (userReq) => {
        const { email, password } = userReq
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('User not found')
        }
        if (!user.validatePassword(password)) {
            throw new Error('Incorrect password')
        }
        const userCreds = await this.provideAuth(user)
        return {
            ...userCreds,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        }
    }

    verifyEmailSv = async (token) => {
        const user = await User.findOne({ 'attributes.emailConfToken': token })
        if (!user) {
            throw new Error('User not found')
        }
        if (user.validateEmail(token)) {
            await user.save()
            return 'Email verified successfully'
        }
        throw new Error('Invalid token')
    }

    forgotPasswordSv = async (email) => {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('User not found')
        }
        user.attributes.passwordResetToken = crypto
            .randomBytes(16)
            .toString('hex')
        await sendMail(
            user.email,
            'Password Reset',
            `Please click on the following link to reset your password: ${process.env.BASE_URL}/auth/reset/${user.attributes.passwordResetToken}`
        )
        await user.save()
        return 'Password reset link sent successfully'
    }

    resetPasswordCheckSv = async (token) => {
        const user = await User.findOne({
            'attributes.passwordResetToken': token,
        })
        if (!user) {
            throw new Error('User not found')
        }
        return {
            username: user.username,
            email: user.email,
        }
    }

    resetPasswordSv = async (token, password) => {
        const user = await User.findOne({
            'attributes.passwordResetToken': token,
        })
        if (!user) {
            throw new Error('User not found')
        }
        if (user.validatePasswordResetToken(token)) {
            user.setPassword(password)
            await user.save()
            return 'Password reset successfully'
        }
        throw new Error('Invalid token')
    }

    linkedinLoginSv = async (code, state) => {
        let data = qs.stringify({
            grant_type: 'authorization_code',
            code: code,
            client_id: process.env.LINKEDIN_CLIENT_ID,
            client_secret: process.env.LINKEDIN_CLIENT_SECRET,
            redirect_uri: process.env.LINKEDIN_CALLBACK_URL,
        })

        let config = {
            method: 'post',
            url: 'https://www.linkedin.com/oauth/v2/accessToken',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data,
        }

        axios(config)
            .then(function (response) {
                let config = {
                    method: 'get',
                    url: 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
                    headers: {
                        Authorization: 'Bearer ' + response.data.access_token,
                    },
                }

                axios(config)
                    .then(async function (response) {
                        let userObject = {
                            Email: response.data.elements[0]['handle~']
                                .emailAddress,
                        }

                        const user = await Users.findOne({
                            email: userObject.Email,
                        })
                        if (user) {
                            const token = await this.provideAuth(user)
                            return res.send({
                                success: true,
                                message: 'User Sign In Successfully',
                                token,
                            })
                        } else {
                            throw new Error('User not found')
                        }
                    })
                    .catch(function (error) {
                        return res.send({
                            success: false,
                            message: 'Something went wrong',
                        })
                    })
            })
            .catch(function (error) {
                return res.send({
                    success: false,
                    message: 'Invalid Error',
                })
            })
    }

    githubLoginSv = async (code, stae) => {
        let data = qs.stringify({
            grant_type: 'authorization_code',
            code: code,
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            redirect_uri: process.env.GITHUB_CALLBACK_URL,
        })

        let config = {
            method: 'post',
            url: 'https://github.com/login/oauth/access_token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            },
            data: data,
        }

        axios(config)
            .then(function (response) {
                let config = {
                    method: 'get',
                    url: 'https://api.github.com/user',
                    headers: {
                        Authorization: 'token ' + response.data.access_token,
                    },
                }

                axios(config)
                    .then(async function (response) {
                        const user = await User.findOne({
                            email: response.data.email,
                        })
                        if (user) {
                            const token = await this.provideAuth(user)
                            return res.send({
                                success: true,
                                message: 'User Sign In Successfully',
                                token,
                            })
                        } else {
                            throw new Error('User not found')
                        }
                    })
                    .catch(function (error) {
                        return {
                            success: false,
                            message: 'User not exist',
                        }
                    })
            })
            .catch(function (error) {
                return res.send({
                    success: false,
                    message: 'Invalid Error',
                })
            })
    }

    googleLoginSv = async (code, state) => {}
}

module.exports = AuthService
