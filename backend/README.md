# Backend API Setup Guide

## Overview
This is a custom Node.js/Express backend API for the MIC Technologies contact form. It replaces the third-party web3forms service with a self-hosted solution.

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Gmail account (or other SMTP service)

## Installation

### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

Edit `.env` file with your configuration:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail Example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Recipient Email
RECIPIENT_EMAIL=info@mictechnologies.co.uk

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

## Gmail Setup (App-Specific Password)

### Steps to Generate App Password:
1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Go back to Security page
5. Click on "App passwords" (under 2-Step Verification)
6. Select "Mail" and "Other (Custom name)"
7. Enter "MIC Technologies API" as the name
8. Click "Generate"
9. Copy the 16-character password
10. Use this password in your `.env` file as `EMAIL_PASS`

**Important:** Never share this password or commit it to version control!

## Alternative Email Services

### Using Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Using Custom SMTP
```env
EMAIL_HOST=your-smtp-host.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

## Running the Server

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## Testing the API

### 1. Check Server Health
```bash
curl http://localhost:5000/api/health
```

### 2. Test Email Configuration (Development Only)
```bash
curl http://localhost:5000/api/contact/test
```

### 3. Test Contact Form Submission
```bash
curl -X POST http://localhost:5000/api/contact/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+44 7566 777617",
    "service": "Web Development",
    "message": "This is a test message"
  }'
```

## API Endpoints

### GET /api/health
Health check endpoint
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2025-11-12T10:00:00.000Z"
}
```

### POST /api/contact/send
Send contact form submission
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+44 7566 777617",
  "service": "Web Development",
  "message": "I need a website"
}
```

Response:
```json
{
  "success": true,
  "message": "Your message has been sent successfully! We will get back to you soon.",
  "messageId": "..."
}
```

## Security Features

1. **Helmet.js** - Security headers
2. **CORS** - Cross-origin resource sharing protection
3. **Rate Limiting** - Prevents spam (5 requests per 15 minutes)
4. **Input Validation** - Validates all form inputs
5. **Email Validation** - Ensures valid email format
6. **Content Length Limits** - Prevents oversized payloads

## Folder Structure
```
backend/
├── config/
│   └── email.js          # Email configuration and templates
├── controllers/
│   └── contactController.js  # Request handlers
├── routes/
│   └── contact.js        # API routes
├── .env                  # Environment variables (not in git)
├── .env.example          # Example environment variables
├── package.json          # Dependencies
└── server.js             # Main server file
```

## Troubleshooting

### Email Not Sending
1. Check your email credentials in `.env`
2. Verify Gmail App Password is correct
3. Check if 2-Step Verification is enabled
4. Try the test endpoint: `/api/contact/test`
5. Check server logs for error messages

### CORS Errors
1. Verify `FRONTEND_URL` in `.env` matches your React app URL
2. Check if React app is running on the correct port

### Rate Limiting Issues
1. Increase `RATE_LIMIT_MAX_REQUESTS` in `.env`
2. Adjust `RATE_LIMIT_WINDOW_MS` for longer time window

## Production Deployment

### Environment Variables for Production
```env
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
PORT=5000
```

### Recommended Hosting Platforms
- **Render** - https://render.com
- **Railway** - https://railway.app
- **Heroku** - https://heroku.com
- **DigitalOcean** - https://digitalocean.com
- **AWS EC2** - https://aws.amazon.com

### Deployment Steps
1. Push code to GitHub
2. Connect to hosting platform
3. Set environment variables in platform dashboard
4. Deploy the backend
5. Update `VITE_API_URL` in frontend `.env` with production URL

## Support
For issues or questions, contact: info@mictechnologies.co.uk
