# Email Setup Instructions for Product Inquiry Form

The product inquiry form is now set up to send emails to `hello@stratgenai.in`. You have two options:

## Option 1: Resend API (Recommended - Server-side)

1. Go to [Resend.com](https://resend.com) and create a free account
2. Verify your domain `stratgenai.in` (or use their test domain for now)
3. Get your API key from the dashboard
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
5. The emails will be sent automatically when someone submits the form

## Option 2: EmailJS (Client-side - Easier Setup)

1. Go to [EmailJS.com](https://www.emailjs.com) and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key and Service ID
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Current Setup

Right now, the form:
- ✅ Stores submissions in Supabase (you can check there)
- ✅ Shows success/error messages to users
- ⚠️ Email sending requires one of the above services to be configured

## Testing

1. Fill out the form from the "Explore More" button on any product
2. Check Supabase dashboard to see the submission
3. Once email service is configured, emails will be sent to `hello@stratgenai.in`


