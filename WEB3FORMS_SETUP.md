# Web3Forms Integration Setup

This guide will help you set up Web3Forms for the contact form in your React application.

## Step 1: Get Web3Forms Access Key

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up for a free account (no credit card required)
3. Create a new form and set the recipient email to: `info@mictechnologies.co.uk`
4. Copy your access key

## Step 2: Configure the Access Key

1. Open `src/config/web3forms.js`
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key

```javascript
export const WEB3FORMS_CONFIG = {
  ACCESS_KEY: 'your-actual-access-key-here', // Replace this
  RECIPIENT_EMAIL: 'info@mictechnologies.co.uk', // Form submissions go here
  // ... rest of config
}
```

## Important: Email Configuration

- **Recipient Email**: `info@mictechnologies.co.uk` (where form submissions will be sent)
- **Form emails will include**: Sender's name, email, phone, and message
- **Email subject**: "New Contact Form Submission from MIC Technologies Website"

## Step 3: Test the Form

1. Start your React development server
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for form submissions

## Features Included

✅ **Form Validation**: Required fields marked with asterisk (*)
✅ **Loading State**: Shows spinner while submitting
✅ **Success Message**: Confirms successful submission
✅ **Error Handling**: Shows error message if submission fails
✅ **Form Reset**: Clears form after successful submission
✅ **Responsive Design**: Works on all device sizes

## Web3Forms Benefits

- ✅ Free tier with generous limits
- ✅ No backend required
- ✅ Spam protection
- ✅ Email notifications
- ✅ CSV exports
- ✅ Webhook support
- ✅ Custom redirects

## Form Fields

The contact form includes:
- **Name** (required)
- **Email** (required) 
- **Phone** (optional)
- **Message** (required)

## Customization

You can customize the form by editing:
- `src/config/web3forms.js` - Configuration settings
- `src/components/Contact/ContactHeroSection.jsx` - Form UI and behavior

## Troubleshooting

**Form not submitting?**
- Check that you've added your actual access key
- Verify the access key is valid in Web3Forms dashboard
- Check browser console for error messages

**Not receiving emails?**
- Check your spam folder
- Verify email address in Web3Forms dashboard
- Test with different email addresses

## Support

- Web3Forms Documentation: https://docs.web3forms.com/
- Web3Forms Support: https://web3forms.com/contact