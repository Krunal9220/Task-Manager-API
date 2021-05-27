const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'krunal9220mathukiya@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome ${name}!`
    });
};

const sendEmailOnCancel = (email, name) => {
    sgMail.send({
        to: email,
        from: 'krunal9220mathukiya@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. What can we improve?`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendEmailOnCancel
}