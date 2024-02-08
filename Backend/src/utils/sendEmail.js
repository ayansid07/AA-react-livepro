const nodemailer = require('nodemailer')
exports.sendEmail = async (options) =>{
    const emailOptions = {
        from:process.env.EMAIL,
        to:options.email,
        subject:options.subject,
        html:options.html
    }
    const transport = nodemailer.createTransport({
        host:'smpt.gmail.com',
        port:465,
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS
        }
    })
    await transport.sendMail(emailOptions);
    }