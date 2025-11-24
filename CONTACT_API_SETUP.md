# Contact Form API Integration Guide

## Overview
Your contact form now uses a **custom Node.js backend API** instead of web3forms. This gives you complete control over email handling with no third-party dependencies.

## Quick Setup

### Frontend Setup
1. Create `.env` file in the root directory:
```bash
VITE_API_URL=http://localhost:5000
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Run the frontend:
```bash
npm run dev
```

### Backend Setup
1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure `.env` file (copy from `.env.example`):
```env
PORT=5000
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RECIPIENT_EMAIL=info@mictechnologies.co.uk
FRONTEND_URL=http://localhost:5173
```

4. Run the backend:
```bash
npm run dev
```

## Gmail App Password Setup
1. Go to Google Account: https://myaccount.google.com/
2. Security → 2-Step Verification (enable if not enabled)
3. Security → App passwords
4. Generate password for "Mail"
5. Copy the 16-character password
6. Use it as `EMAIL_PASS` in backend `.env`

## Testing
1. Open your browser: http://localhost:5173
2. Navigate to Contact page
3. Fill out the form and submit
4. Check the recipient email for the message

## Architecture
```
Frontend (React)          Backend (Node.js/Express)          Email Service
─────────────────         ───────────────────────────        ─────────────
Contact Form    ----→     POST /api/contact/send    ----→    Gmail/SMTP
                          (validates, formats)                (sends email)
```

## Features
✅ No third-party service dependencies  
✅ Complete control over email templates  
✅ Rate limiting (5 requests per 15 minutes)  
✅ Input validation and sanitization  
✅ Custom HTML email templates  
✅ Error handling and logging  
✅ CORS protection  
✅ Security headers (Helmet.js)  

## Important Files
- **Frontend**: `src/components/Contact/ContactHeroSection.jsx`
- **Backend**: `backend/server.js`
- **Email Config**: `backend/config/email.js`
- **Controller**: `backend/controllers/contactController.js`
- **Routes**: `backend/routes/contact.js`

## Production Deployment
See `backend/README.md` for detailed production deployment instructions.

## Support
For detailed setup instructions, see:
- Backend: `backend/README.md`
- Frontend: `.env.example`
