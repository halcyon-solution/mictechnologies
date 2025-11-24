import express from 'express';
import { sendContactEmail, testEmail } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact/send - Send contact form
router.post('/send', sendContactEmail);

// GET /api/contact/test - Test email configuration (only in development)
if (process.env.NODE_ENV === 'development') {
  router.get('/test', testEmail);
}

export default router;
