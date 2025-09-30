export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Please Verify Your Email Address</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0;">
  <div style="padding: 20px; text-align: center;">
    <h1 style="color: #fff;"> al7aj booking system</h1>
    <h2 style="color: #fff;">Verify Your Email</h2>
  </div>
  <div style="padding: 20px; background-color: #111; border-radius: 10px; max-width: 600px; margin: auto;">
    <p>Hi,</p>
    <p>We’re excited to have you on board at al7aj booking system!</p>
    <p>Before you can start exploring our courses, please verify your email, Below is your verification code:</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #fff;
                color: #000; 
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;">%%VERIFICATION_CODE%%</div>
             </div>
    <p>If you didn’t request this, just ignore this email.</p>
    <p>—  al7aj booking system</p>
  </div>
</body>
</html>
`;

