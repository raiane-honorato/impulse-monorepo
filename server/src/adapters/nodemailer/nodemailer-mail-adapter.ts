import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4485dc1eee634f",
    pass: "104f677db69321"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {

    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Raiane Honorato <raianehonorato16@gmail.com>',
    subject,
    html: body

  });
  }
}