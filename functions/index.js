const functions = require('firebase-functions');
const modemailer = require('nodemailer');
const emailAccount = require('./email.json');

const mailTransport = modemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailAccount.email,
        pass: emailAccount.password
    }
});

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! hahah");
});

exports.moltinPayment = functions.https.onRequest((request, response) => {
    const email = 'boatclubonline@gmail.com';
    const orderId = 'abcdf';
    const mailOptions = {
        to: email,
        bcc: 'chonlakorn.pun@gmail.com',
        from: emailAccount.email,
        subject: `Recieve Order No. ${orderId}`,
        // html: ejs.render(orderCustomerConfirm, {value}),
        text: `Dekhippozaa store recieve your order ${orderId} now.\n Thank for shop`
    }
    mailTransport.sendMail(mailOptions);
    response.send({ success: true });
});

