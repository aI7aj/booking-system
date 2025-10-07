import { AppError } from "./../AppError.js";
import { sendEmail } from "./nodemailer.js"
import * as emailTemplates from "./emailTemplates.js";

export async function sendSysEmail(type, to, data) {
    let subject, html;
    console.log("sendSysEmail called with:", { type, to, data });
    if (!to) {
        throw new AppError("Recipient email address is required", 400);
    }
    switch (type) {
        case "CONFIRMATION":
            subject = "Verify your email";
            html = emailTemplates.VERIFICATION_EMAIL_TEMPLATE
                .replace("%%VERIFICATION_CODE%%", data);
            break;
        case "RESET":
            subject = "Your password reset instructions";
            html = emailTemplates.PASSWORD_RESET_REQUEST_TEMPLATE
                .replace("%%RESET_CODE%%", data);
            break;
        case "PASS_RESET_SUCCESS":
            subject = "Your password has been reset";
            html = emailTemplates.PASSWORD_RESET_SUCCESS_TEMPLATE;
            break;
        case 'NEW_BOOKING':
            subject = "New Booking Created";
            html = emailTemplates.NEW_BOOKING_TEMPLATE
                .replace("%%DATE%%", data.date)
                .replace("%%TIME%%", data.time);
            break;
        case "BOOKING_UPDATED":
            subject = "update on your booking";
            html = emailTemplates.UPDATE_BOOKING_TEMPLATE
                .replace("%%BOOKING_ID%%", data.id)
                .replace("%%DATE%%", data.date)
                .replace("%%TIME%%", data.time)
                .replace("%%STATUS%%", data.status);
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