const AuthService = require('../services/auth.service')
const { makeResponse } = require('../helpers')
const qs = require('qs')
const pkceChallenge = require('pkce-challenge').default
const axios = require('axios')

class AuthController extends AuthService {
    constructor() {
        super()
    }

    register = async (req, res) => {
        try {
            const msg = await this.registerSv(req.body)
            res.status(200).send(makeResponse(msg))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    login = async (req, res) => {
        try {
            const token = await this.loginSv(req.body)
            res.status(200).send(makeResponse(token))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    verifyEmail = async (req, res) => {
        try {
            const msg = await this.verifyEmailSv(req.params.token)
            res.status(200).send(makeResponse(msg))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    forgotPassword = async (req, res) => {
        try {
            const msg = await this.forgotPasswordSv(req.body.email)
            res.status(200).send(makeResponse(msg))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    resetPasswordCheck = async (req, res) => {
        try {
            const user = await this.resetPasswordCheckSv(req.params.token)
            res.status(200).send(makeResponse(user))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    resetPassword = async (req, res) => {
        try {
            const msg = await this.resetPasswordSv(
                req.params.token,
                req.body.password
            )
            res.status(200).send(makeResponse(msg))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    callbackLoginSuccess = async (req, res) => {
        res.send(`Welcome to EC ${req.user.name}`)
    }

    linkedLoginInit = async (req, res) => {
        const challenge = pkceChallenge()
        res.redirect(
            `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.LINKEDIN_CALLBACK_URL}&state=${challenge.code_challenge}&scope=r_liteprofile%20r_emailaddress`
        )
    }

    linkedLoginCallback = async (req, res) => {
        try {
            const { code, state, error, error_description } = req.query

            if (error) {
                return res.send({
                    success: false,
                    message: error,
                    error_description,
                })
            }

            const msg = await this.linkedinLoginSv(code, state)
            res.status(200).send(makeResponse(msg))
        } catch (e) {
            return res.send({ success: false, message: e.message })
        }
    }

    githubLoginInit = async (req, res) => {
        const challenge = pkceChallenge()
        res.redirect(
            `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_CALLBACK_URL}&state=${challenge.code_challenge}&scope=user:email&allow_signup=false`
        )
    }

    githubLoginCallback = async (req, res) => {
        try {
            const { code, state, error, error_description } = req.query

            if (error) {
                return res.send({
                    success: false,
                    message: error,
                    error_description,
                })
            }

            const msg = await this.githubLoginSv(code, state)
            res.status(200).send(makeResponse(msg))
        } catch (e) {
            return res.send({ success: false, message: e.message })
        }
    }
}

module.exports = AuthController
