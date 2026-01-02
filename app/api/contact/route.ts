import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'memomar168@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email to Steve
    await resend.emails.send({
      from: 'Super Steve Massage <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C4704A; border-bottom: 2px solid #C4704A; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #FDFBF9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin: 0;"><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <h3 style="margin: 0 0 10px 0; color: #2D2D2D;">Message:</h3>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from the contact form at superstevemassage.com
          </p>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Super Steve Massage <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting Super Steve Massage',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C4704A; border-bottom: 2px solid #C4704A; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p style="color: #2D2D2D; line-height: 1.6;">
            Hi ${name},
          </p>
          
          <p style="color: #2D2D2D; line-height: 1.6;">
            Thank you for contacting Super Steve Massage. I've received your message and will get back to you within 24 hours.
          </p>
          
          <div style="background: #FDFBF9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #C4704A;">
            <p style="margin: 0 0 10px 0; color: #2D2D2D;"><strong>Your Message:</strong></p>
            <p style="margin: 0; color: #6B6B6B; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #2D2D2D; line-height: 1.6;">
            In the meantime, feel free to learn more about our services or book an appointment:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://superstevemassage.com" style="display: inline-block; background: #C4704A; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 500;">
              Visit Our Website
            </a>
          </div>
          
          <p style="color: #6B6B6B; font-size: 14px; line-height: 1.6;">
            <strong>Super Steve Massage Therapy</strong><br>
            Steve Thompson LMT, MA60714361<br>
            7406 27Th St W #23, University Place, WA 98466<br>
            (253) 970-9615
          </p>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 15px;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
