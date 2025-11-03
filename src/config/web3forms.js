// Web3Forms Configuration
// Get your access key from: https://web3forms.com/

export const WEB3FORMS_CONFIG = {
  // Replace this with your actual Web3Forms access key
  ACCESS_KEY: 'e4d8e372-be10-4df0-b648-ba53b7591539',
  
  // Web3Forms API endpoint
  API_URL: 'https://api.web3forms.com/submit',
  
  // Email configuration
  RECIPIENT_EMAIL: 'info@mictechnologies.co.uk', // Where form submissions will be sent
  
  // Default form settings
  SETTINGS: {
    subject: 'New Contact Form Submission from MIC Technologies Website',
    redirect: false, // Set to true if you want to redirect after submission
    captcha: false, // Set to true if you want to enable captcha
  }
}

// Instructions for setup:
// 1. Go to https://web3forms.com/
// 2. Sign up for a free account
// 3. Get your access key
// 4. Replace 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' with your actual access key
// 5. Optionally, configure other settings above