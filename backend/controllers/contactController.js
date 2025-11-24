import { sendEmail, createEmailTemplate } from '../config/email.js';

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Handle contact form submission
export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'plz fill all the required feilds'
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Validate name length
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 100 characters'
      });
    }

    // Validate message length
    if (message.length < 10 || message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 10 and 2000 characters'
      });
    }

    // Prepare form data
    const formData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : 'Not provided',
      service: service.trim(),
      message: message.trim()
    };

    // Email options
    const mailOptions = {
      from: `"${formData.name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: createEmailTemplate(formData),
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service: ${formData.service}
        
        Message:
        ${formData.message}
        
        Submitted: ${new Date().toLocaleString()}
      `
    };

    // Send email
    const result = await sendEmail(mailOptions);

    if (result.success) {
      // Log successful submission
      console.log(`✅ Contact form submitted by ${formData.name} (${formData.email})`);
      
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
        messageId: result.messageId
      });
    } else {
      throw new Error(result.error);
    }

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again later or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Test endpoint
export const testEmail = async (req, res) => {
  try {
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Test Email - MIC Technologies API',
      html: '<h1>Test Email</h1><p>If you receive this, your email configuration is working correctly!</p>',
      text: 'Test Email - If you receive this, your email configuration is working correctly!'
    };

    const result = await sendEmail(testMailOptions);

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Test email sent successfully',
        messageId: result.messageId
      });
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('❌ Error sending test email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send test email',
      error: error.message
    });
  }
};
