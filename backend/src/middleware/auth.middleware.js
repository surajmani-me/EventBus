const jwt = require('jsonwebtoken')

const JWTSec = process.env.JWT_SECRET

class AuthMiddleware {
    async provideAuth(user) {
        if (user.role == 'administrator') {
            user['super'] = true
            user['admin'] = true
        } else if (user.role == 'organisation') {
            user['user'] = false
            user['admin'] = true
        } else {
            user['user'] = true
            user['admin'] = false
        }
        user = { tokenType: 'access_token', ...user }
        const access_token = jwt.sign(user, JWTSec, {
            algorithm: 'HS512',
            expiresIn: '7d',
        })
        const setReferesh = {
            tokenType: 'refresh_token',
            user: user._id,
        }
        const refresh_token = jwt.sign(setReferesh, JWTSec, {
            algorithm: 'HS512',
            expiresIn: '30d',
        })
        const token = {
            access_token: access_token,
            refresh_token: refresh_token,
        }
        return token
    }

    provideReAuth(reAuthUser) {
        reAuthUser = { tokenType: 'access_token', ...reAuthUser }
        const reAuth = jwt.sign(reAuthUser, JWTSec, {
            algorithm: 'HS512',
            expiresIn: '7d',
        })
        return reAuth
    }

    verifyRefreshToken(i) {
        const ifVerified = jwt.verify(i, JWTSec)
        return ifVerified
    }
    verifyAuth(i) {
        // verify auth from the provided identity
        const ifVerified = jwt.verify(i, JWTSec)
        return !!ifVerified
    }

    verifyAdminAuth(i) {
        // verify admin auth from the provided identity
        const ifVerified = jwt.verify(i, JWTSec)
        return !!ifVerified.admin
    }

    verifySuperAdminAuth(i) {
        // verify super admin auth from the provided identity
        const ifVerified = jwt.verify(i, JWTSec)
        return !!ifVerified.super
    }

    getMiddleware(isAdminRoute = false, isSuperAdminRoute = false) {
        return (_req, _res, next) => {
            try {
                const token = _req.headers.authorization?.split(' ')[1] || ' '
                const checkAuth = isAdminRoute
                    ? this.verifyAdminAuth(token)
                    : this.verifyAuth(token)
                if (checkAuth) {
                    const decoded = jwt.verify(token, publicKey)
                    if (decoded.tokenType === 'refresh_token') {
                        _req.userData = decoded.user
                    } else if (decoded.tokenType === 'access_token') {
                        _req.userData = decoded
                        _req.token = token
                    } else {
                        throw new Error({
                            message: 'Invalid token type',
                            statusCode: 401,
                        })
                    }
                } else {
                    if (isAdminRoute) {
                        throw new Error({
                            message: 'Restricted Access route',
                            statusCode: 403,
                        })
                    }
                    throw new Error({
                        message: 'Unauthorized Access Declined',
                        statusCode: 403,
                    })
                }
                next()
            } catch (err) {
                res.status(err.statusCode).json({
                    message: err.message,
                })
            }
        }
    }
}

module.exports = AuthMiddleware
