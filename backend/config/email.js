import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create reusable transporter
const createTransporter = () => {
  return createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Verify email configuration
export const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    return false;
  }
};

// Send email function
export const sendEmail = async (mailOptions) => {
  try {
    const transporter = createTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return { success: false, error: error.message };
  }
};

// Create HTML email template
export const createEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .container {
          background-color: #f9f9f9;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #FF006E 0%, #8B0046 100%);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .content {
          background: white;
          padding: 30px;
          border-radius: 0 0 8px 8px;
        }
        .field {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        .label {
          font-weight: bold;
          color: #FF006E;
          display: block;
          margin-bottom: 5px;
        }
        .value {
          color: #555;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid #FF006E;
          color: #888;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">🎉 New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0;">MIC Technologies Website</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">👤 Name:</span>
            <span class="value">${formData.name}</span>
          </div>
          
          <div class="field">
            <span class="label">📧 Email:</span>
            <span class="value"><a href="mailto:${formData.email}">${formData.email}</a></span>
          </div>
          
          ${formData.phone ? `
          <div class="field">
            <span class="label">📞 Phone:</span>
            <span class="value">${formData.phone}</span>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">🛠️ Service of Interest:</span>
            <span class="value">${formData.service}</span>
          </div>
          
          <div class="field">
            <span class="label">💬 Message:</span>
            <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${formData.message}</div>
          </div>
          
          <div class="field" style="border-bottom: none;">
            <span class="label">🕒 Submitted:</span>
            <span class="value">${new Date().toLocaleString('en-GB', { 
              dateStyle: 'full', 
              timeStyle: 'long' 
            })}</span>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the MIC Technologies contact form.</p>
          <p>© ${new Date().getFullYear()} MIC Technologies. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export default createTransporter;
