# Custom Contact Form API - Complete Setup ✅

## ✅ What's Done

### Backend Created
- ✅ Express.js server with security features (Helmet, CORS, Rate Limiting)
- ✅ Contact form API endpoint: `/api/contact/send`
- ✅ Email service with Nodemailer
- ✅ Custom HTML email templates
- ✅ Input validation and sanitization
- ✅ Error handling and logging
- ✅ Dependencies installed

### Frontend Updated
- ✅ Removed web3forms integration
- ✅ Connected to custom API
- ✅ Form now sends to: `http://localhost:5000/api/contact/send`
- ✅ Environment configuration added

### Files Removed
- ✅ `src/config/web3forms.js` - Deleted
- ✅ `WEB3FORMS_SETUP.md` - Deleted

### Documentation Created
- ✅ `backend/README.md` - Complete backend setup guide
- ✅ `CONTACT_API_SETUP.md` - Quick setup instructions
- ✅ `.env.example` files for both frontend and backend

## 🚀 Next Steps - Email Configuration Required

### Step 1: Configure Backend Email
Edit `backend/.env` file:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com          # ⚠️ CHANGE THIS
EMAIL_PASS=your-gmail-app-password        # ⚠️ CHANGE THIS
RECIPIENT_EMAIL=info@mictechnologies.co.uk
```

### Step 2: Generate Gmail App Password
1. Go to: https://myaccount.google.com/
2. Click "Security"
3. Enable "2-Step Verification"
4. Go back to Security → "App passwords"
5. Select "Mail" → "Other" → Enter "MIC Tech API"
6. Copy the 16-character password
7. Paste in `EMAIL_PASS` in backend `.env`

### Step 3: Start Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## 📝 Testing the Setup

1. Open browser: `http://localhost:5173`
2. Go to Contact page
3. Fill the form:
   - Name: Test User
   - Email: test@example.com
   - Service: Web Development
   - Message: Testing contact form
4. Click "Send Message"
5. Check `info@mictechnologies.co.uk` for the email

## 🔧 API Endpoints

- `GET /api/health` - Server health check
- `POST /api/contact/send` - Submit contact form
- `GET /api/contact/test` - Test email (development only)

## 🔐 Security Features

- ✅ Rate limiting: 5 requests per 15 minutes
- ✅ CORS protection
- ✅ Input validation
- ✅ Email format validation
- ✅ Helmet.js security headers
- ✅ Environment variables for sensitive data

## 📁 Project Structure

```
mictechnologies/
├── backend/
│   ├── config/
│   │   └── email.js              # Email configuration
│   ├── controllers/
│   │   └── contactController.js  # Form handling logic
│   ├── routes/
│   │   └── contact.js           # API routes
│   ├── .env                     # Environment variables ⚠️
│   ├── .env.example             # Example config
│   ├── server.js                # Main server
│   ├── package.json
│   └── README.md
├── src/
│   └── components/
│       └── Contact/
│           └── ContactHeroSection.jsx  # Updated form
├── .env                         # Frontend config
├── CONTACT_API_SETUP.md        # This file
└── package.json

```

## 🌐 Production Deployment

### Backend Hosting Options:
- Render.com (Recommended - Free tier available)
- Railway.app
- Heroku
- DigitalOcean
- AWS EC2

### Steps:
1. Deploy backend to hosting platform
2. Set environment variables in platform
3. Get production API URL
4. Update frontend `.env`: `VITE_API_URL=https://your-api.com`
5. Deploy frontend (Vercel/Netlify)

## 📞 Support

If you need help:
- Check `backend/README.md` for detailed documentation
- Email: info@mictechnologies.co.uk

## 🎉 Summary

You now have a **fully custom contact form API** with:
- No third-party dependencies
- Complete control over emails
- Better security
- Professional email templates
- Rate limiting to prevent spam

**Cost: FREE** (no subscription needed!)
