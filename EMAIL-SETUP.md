# Email Configuration Guide

## Current Setup

Your contact form uses Gmail SMTP with nodemailer to send emails.

## Gmail App Password Setup

If you're getting 500 errors, you need to set up a Gmail App Password:

### Steps:

1. **Enable 2-Factor Authentication** on your Gmail account
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Copy the 16-character password

3. **Update .env.local**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_TO=your-email@gmail.com
   ```

4. **Restart your development server**
   ```bash
   npm run dev
   ```

## Testing

1. Go to your contact page
2. Fill out the form
3. Submit
4. Check your email inbox

## Troubleshooting

### Error: "Invalid login"
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2FA is enabled on your Google account

### Error: "Connection timeout"
- Check your internet connection
- Verify firewall isn't blocking port 465 or 587

### Error: "Email service not configured"
- Make sure all environment variables are set in .env.local
- Restart your dev server after changing .env.local

## Alternative: Use Resend (Recommended)

For better deliverability and easier setup, consider using Resend:

1. **Sign up at** https://resend.com
2. **Get your API key**
3. **Update .env.local**
   ```env
   RESEND_API_KEY=re_your_api_key
   ```
4. **Update the contact route** to use Resend SDK

### Resend Benefits:
- No need for App Passwords
- Better deliverability
- Easier to set up
- Free tier: 100 emails/day
- Better for production

## Current Configuration

- **Service**: Gmail SMTP
- **Port**: 465 (secure)
- **Authentication**: App Password required
- **From**: EMAIL_USER
- **To**: EMAIL_TO (or EMAIL_USER if not set)

## Security Notes

- Never commit .env.local to git (it's in .gitignore)
- Use App Passwords, never your actual Gmail password
- Rotate App Passwords periodically
- Use different App Passwords for different applications
