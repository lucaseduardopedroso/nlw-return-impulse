import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b19a3cee83dc59",
      pass: "0706da53ea8e12"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail ({subject, body}: SendMailData){
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Lucas Pedroso <lucas@pedroso.com>",
            subject,
            html: body
        });
    };
}