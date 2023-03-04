const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SEND_GRID_KEY);

async function sendEmail(req, res) {
    try {
        const mail = {
            to: req.body.to,
            subject: req.body.subject,
            from: process.env.FROM_ADDRESS, // Fill it with your validated email on SendGrid account
            text: 'Email Server',
            html: req.body.content,
        }
        await sendGridMail.send(mail);
        console.log('Test email sent successfully');
    } catch (error) {
        console.error('Error sending test email');
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
}

module.exports = { sendEmail }