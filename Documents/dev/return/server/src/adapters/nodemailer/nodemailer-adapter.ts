import nodemailer from 'nodemailer';
import { SendMailData, MailAdapter } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c8301f883799fd",
      pass: "b716d0d824ea9f"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gabriel <gabriel100j@hotmail.com>',
            subject,
            html: body,
        });
    }
}

/*`<div style="font-family:sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}<p/>`,
                `<p>Comentário: ${comment}<p/>`,
                `<div/>`

                */