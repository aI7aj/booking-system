import nodemailer from "nodemailer";

export const sendEmail = async ({to, subject, html}) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `Al7aj's Booking <${process.env.SMTP_USER}>`,
        to,
        subject,
        html,
    };
    await transporter.sendMail(mailOptions);
};