import { mailtrapClient, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verifty your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category: "Email Verification"
        });

        console.log(`Email sent successfully ${response}`);
    } catch (err) {
        console.error(`Error sending verification: ${err}`);
        throw new Error(`Error sending verification email: ${err}`);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "2f7e89f9-c614-4860-9767-4d5f497fda58",
            template_variables: {
                "company_info_name": "Auth Company",
                "name": name
            }
        });
        console.log(`Welcome email sent successfully ${response}`);
    } catch (err) {
        console.error(`Error sending welcome email ${error}`);
        throw new Error(`Error sending welcome email: ${error}`);
    }
}