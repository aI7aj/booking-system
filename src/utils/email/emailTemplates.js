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


export const NEW_BOOKING_TEMPLATE = `
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
  <p>Your booking has been created successfully.</p>

  <div style="text-align: center; margin: 30px 0;">
    <div style="background-color: #28a745; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: auto;">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
    <path d="M13.485 1.929a.75.75 0 0 1 .053 1.06l-7.25 8a.75.75 0 0 1-1.08.03L2.47 8.53a.75.75 0 0 1 1.06-1.06l2.122 2.122 6.72-7.41a.75.75 0 0 1 1.06-.053z"/>
  </svg>
</div>

  </div>

  <div style="background-color: #fff;color: #000; padding: 15px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <h3 style="margin:0;">Booking Details:</h3>
    <p><strong>Date:</strong> %%DATE%%</p>
    <p><strong>Time:</strong> %%TIME%%</p>
  </div>

  <p>Thank you for choosing our service!</p>
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

export const UPDATE_BOOKING_TEMPLATE = `
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
  <p>your booking has been updated.</p>

  <div style="text-align: center; margin: 30px 0;">


  </div>

  <div style="background-color: #fff;color: #000; padding: 15px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <h3 style="margin:0;">Booking Details:</h3>
    <p><strong>Booking ID:</strong> %%BOOKING_ID%%</p>
    <p><strong>Date:</strong> %%DATE%%</p>
    <p><strong>Time:</strong> %%TIME%%</p>
    <p><strong>Status:</strong> %%STATUS%%</p>
  </div>

  <p>Thanks for your time!</p>
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