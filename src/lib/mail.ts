import nm from 'nodemailer';
import { compileMusicTempelate } from './utils';

export async function sendMail ({ to, subject, body, name }: { to: string, subject: string, body: string, name: string }) {
    const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

    const htmlBody = await compileMusicTempelate("Italy , Bhiwandi", "https://github.com/kiritocode1");

    const transport = nm.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        }
    });

    try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (err) {
        console.log("Error verifying transport ");
        console.log(err);
        return;
    }

    try {
        const sendResult = await transport.sendMail({
            from : SMTP_EMAIL,
            to , subject , html: htmlBody

        })

        console.log(sendResult);
    } catch (err) {
        console.log("Error sending mail");
        console.log(err);
        return;
    }
}