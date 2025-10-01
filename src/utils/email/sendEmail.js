import { AppError } from "./../AppError.js";
import { sendEmail } from "./nodemailer.js"
import * as emailTemplates from "./emailTemplates.js";

export async function sendSysEmail(type, to, code) {
    let subject, html;

    switch (type) {
        case "CONFIRMATION":
            subject = "Verify your email";
            html = emailTemplates.VERIFICATION_EMAIL_TEMPLATE
                .replace("%%VERIFICATION_CODE%%", code);
            break;
        case "RESET":
            subject = "Your password reset instructions";
            html = emailTemplates.PASSWORD_RESET_REQUEST_TEMPLATE
                .replace("%%RESET_CODE%%", code);
            break;
            case "PASS_RESET_SUCCESS":
            subject = "Your password has been reset";
            html = emailTemplates.PASSWORD_RESET_SUCCESS_TEMPLATE;
            break;
        default:
            throw new AppError("Invalid email type", 400);
    }

    await sendEmail({
        to,
        subject,
        html
    });
}