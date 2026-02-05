import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'feminatapclone@gmail.com',
        pass: 'cwwr zxvc fvxg oraa' // App password
    }
});

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    try {
        // Send notification email to admin
        await transporter.sendMail({
            from: '"Sarv Sustain Newsletter" <feminatapclone@gmail.com>',
            to: 'feminatapclone@gmail.com',
            subject: '🌱 New Newsletter Subscription - Sarv Sustain',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8faf8;">
                    <div style="background: linear-gradient(135deg, #1a472a 0%, #257C88 100%); padding: 30px; border-radius: 10px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">🌿 New Newsletter Subscriber!</h1>
                    </div>
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; margin-top: -5px;">
                        <p style="color: #1a472a; font-size: 16px; margin-bottom: 20px;">
                            A new user has subscribed to the Sarv Sustain newsletter:
                        </p>
                        <div style="background-color: #e8f5e9; padding: 15px 20px; border-radius: 8px; border-left: 4px solid #1a472a;">
                            <p style="margin: 0; color: #1a472a; font-size: 18px;">
                                <strong>Email:</strong> ${email}
                            </p>
                        </div>
                        <p style="color: #666; font-size: 14px; margin-top: 20px;">
                            Subscribed on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                        </p>
                    </div>
                    <p style="color: #888; font-size: 12px; text-align: center; margin-top: 20px;">
                        This is an automated notification from Sarv Sustain website.
                    </p>
                </div>
            `
        });

        // Send welcome email to subscriber
        await transporter.sendMail({
            from: '"Sarv Sustain" <feminatapclone@gmail.com>',
            to: email,
            subject: '🌱 Welcome to Sarv Sustain Newsletter!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8faf8;">
                    <div style="background: linear-gradient(135deg, #1a472a 0%, #257C88 100%); padding: 40px 30px; border-radius: 10px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Sarv Sustain! 🌿</h1>
                        <p style="color: rgba(255,255,255,0.9); margin-top: 10px; font-size: 16px;">
                            Driven by Purpose. Growing with Care.
                        </p>
                    </div>
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; margin-top: -5px;">
                        <p style="color: #1a472a; font-size: 16px; line-height: 1.6;">
                            Thank you for subscribing to our newsletter! 🎉
                        </p>
                        <p style="color: #333; font-size: 15px; line-height: 1.6;">
                            You'll now receive updates about:
                        </p>
                        <ul style="color: #205B23; font-size: 14px; line-height: 1.8;">
                            <li>Latest sustainability insights and trends</li>
                            <li>ESG reporting best practices</li>
                            <li>Environmental consulting tips</li>
                            <li>Industry news and updates</li>
                        </ul>
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="https://sarvsustain.com" style="background: linear-gradient(135deg, #205B23 0%, #257C88 100%); color: white; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: bold; display: inline-block;">
                                Visit Our Website
                            </a>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 20px;">
                        <p style="color: #888; font-size: 12px;">
                            © 2026 Sarv Sustain. All rights reserved.
                        </p>
                        <p style="color: #888; font-size: 11px;">
                            You received this email because you subscribed to our newsletter.
                        </p>
                    </div>
                </div>
            `
        });

        res.json({ success: true, message: 'Successfully subscribed to newsletter!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ success: false, message: 'Failed to subscribe. Please try again later.' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
