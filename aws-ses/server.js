/**
 * Author: Aravinth Panchadcharam
 * Email: me@aravinth.info
 * Date: 24/10/14.
 * Contributors:
 * Description: For aws-ses service must be be registered and accessKeyId and secretAccessKey
 * must be obtained
 */


var nodemailer = require('nodemailer'),
    ses = require('nodemailer-ses-transport'),
    transporter;

function sendEmail(){
    transporter = nodemailer.createTransport(ses({
        accessKeyId: '###',
        secretAccessKey: '##'
    }));

    transporter.sendMail({
        from: 'sender@aravinth.info',
        to: 'receiver@aravinth.info',
        subject: 'SES Testing',
        text: 'hello world!'
    });

    console.log('Email sent')
}

sendEmail();