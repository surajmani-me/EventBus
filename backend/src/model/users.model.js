const mongoose = require('mongoose')
const crypto = require('node:crypto')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            first: {
                type: String,
                required: true,
            },
            last: {
                type: String,
                required: true,
            },
        },
        salt: {
            type: String,
        },
        hash: {
            type: String,
        },
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'organisation', 'administrator'],
        },
        attributes: {
            isEmailVerified: {
                type: Boolean,
                default: false,
            },
            emailConfToken: {
                type: String,
                default: crypto.randomBytes(16).toString('hex'),
            },
            passwordResetToken: {
                type: String,
            },
        },
        signupMethod: {
            type: String,
            default: 'basic',
            enum: ['basic', 'google', 'github', 'linkedin'],
        },
        avatar: {
            type: String,
        },
        bio: {
            type: String,
        },
        location: {
            type: String,
        },
        social: [
            {
                name: {
                    type: String,
                },
                link: {
                    type: String,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
)

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex')
}

userSchema.methods.validatePassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex')
    return this.hash === hash
}

userSchema.methods.validateEmail = function (token) {
    if (this.attributes.emailConfToken === token) {
        this.attributes.isEmailVerified = true
        this.attributes.emailConfToken = undefined
        return true
    }
    return false
}

userSchema.methods.validatePasswordResetToken = function (token) {
    if (this.attributes.passwordResetToken === token) {
        this.attributes.passwordResetToken = undefined
        return true
    }
    return false
}

userSchema.index({ username: 'text', email: 'text' }, { unique: true })

const User = mongoose.model('User', userSchema)

module.exports = User
