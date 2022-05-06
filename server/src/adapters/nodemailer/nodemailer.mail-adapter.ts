import { MailAdapter } from "../mail-adapter";
import  {  SendMailData  } from '../mail-adapter'
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "74f8e1f2a64565",
    pass: "e0673469e0e171"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
     await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
     to:'Felipe Silva <felype.dev@gmail.com>',
     subject: subject,
     html: body
   })
  }
}