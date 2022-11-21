const nodemailer = require('nodemailer')

let mailClient = nodemailer.createTransport({
    host: process.env.SMTP_hostname,
    port: process.env.MAIL_Port,
    secure: false,
    auth: {
        user: process.env.MAIL_Username,
        pass: process.env.MAIL_password,
    },
    tls: {
        rejectUnauthorized: false,
    },
})

const sendMail = async (to, subject, text) => {
    const info = await mailClient.sendMail({
        from: `"GDSC LPU Event Bus" < ${process.env.MAIL_Username} >`,
        to,
        subject,
        text,
    })
    return info
}

const sendMailwithHTML = async (to, subject, text) => {
    const info = await mailClient.sendMail({
        from: `"GDSC LPU Event Bus" <${process.env.MAIL_Username}>`,
        to,
        subject,
        text,
    })
    return info
}

module.exports = {
    sendMail,
    sendMailwithHTML,
}
