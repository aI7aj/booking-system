export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="font-family: Arial, sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0;">
  <div style="padding: 20px; text-align: center;">
    <h1 style="color: #fff;">Al7aj Booking System</h1>
  </div>
  <div style="padding: 20px; background-color: #111; border-radius: 10px; max-width: 600px; margin: auto;">
    <p>Hi,</p>
    <p>We’re excited to have you on board at Al7aj Booking System!</p>
    <p>Before you can start exploring our courses, please verify your email, Below is your verification code:</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #fff;
                color: #000; 
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;">%%VERIFICATION_CODE%%</div>
             </div>
  </div>
   <div style="padding: 0 0 20px 0; text-align: center;">
  <p style="text-align: center; color: #ccc; font-size: 14px;">
      Still have questions? Please contact 
      <a href="mailto:support@al7aj.com" style="color: #4da6ff; text-decoration: none;">support@al7aj.com</a>
    </p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="font-family: Arial, sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0;">
  <div style="padding: 20px; text-align: center;">
    <h1 style="color: #fff;">Al7aj Booking System</h1>
  </div>
  <div style="padding: 20px; background-color: #111; border-radius: 10px; max-width: 600px; margin: auto;">
    <p>Hello,</p>
    <p>We have received a request to reset the password of your account.</p>
    <p>If you did not ask to change your password, you can ignore this email and your password will not be changed. The code below will remain active for 24 hours.</p>
   <div style="text-align: center; margin: 30px 0 0 0;">
      <div style="background-color: #fff;
                color: #000; 
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;">%%RESET_CODE%%</div>
             </div>
  </div>
  <div style="padding: 0 0 20px 0; text-align: center;">
  <p style="text-align: center; color: #ccc; font-size: 14px;">
      Still have questions? Please contact 
      <a href="mailto:support@al7aj.com" style="color: #4da6ff; text-decoration: none;">support@al7aj.com</a>
    </p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="font-family: Arial, sans-serif; background-color: #000; color: #fff; margin: 0; padding: 0;">
  <div style="padding: 20px; text-align: center;">
    <h1 style="color: #fff;">Al7aj Booking System</h1>
  </div>
  <div style="padding: 20px; background-color: #111; border-radius: 10px; max-width: 600px; margin: auto;">
    <p>Hello,</p>
    <p>Your password has been successfully updated.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #fff; color: #000; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    
  </div>
  <div style="padding: 0 0 20px 0; text-align: center;">
  <p style="text-align: center; color: #ccc; font-size: 14px;">
      Still have questions? Please contact 
      <a href="mailto:support@al7aj.com" style="color: #4da6ff; text-decoration: none;">support@al7aj.com</a>
    </p>
  </div>
</body>
</html>
`;