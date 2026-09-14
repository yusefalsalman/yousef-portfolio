/**
 * EmailJS Configuration
 * 
 * To receive emails directly to yusefsalman13@gmail.com via EmailJS:
 * 1. Sign up / Log in to https://www.emailjs.com/
 * 2. Add an Email Service (e.g., Gmail connecting to yusefsalman13@gmail.com) -> get SERVICE_ID
 * 3. Create an Email Template -> get TEMPLATE_ID
 * 4. Get your Public Key from Account Settings -> PUBLIC_KEY
 * 
 * You can set these in a .env file:
 * VITE_EMAILJS_SERVICE_ID=your_service_id
 * VITE_EMAILJS_TEMPLATE_ID=your_template_id
 * VITE_EMAILJS_PUBLIC_KEY=your_public_key
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_yousef',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_yousef',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  RECIPIENT_EMAIL: 'yusefsalman13@gmail.com',
};

