import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  legalMatter: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json()
    const { name, email, phone, subject, message, legalMatter } = body

    // Validate required fields
    if (!name || !email || !subject || !message || !legalMatter) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password or app-specific password
      },
    })

    // Email to advocate (notification)
    const advocateEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: #fbbf24; margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Client Information</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #334155;">Name:</strong> ${name}<br/>
            <strong style="color: #334155;">Email:</strong> ${email}<br/>
            <strong style="color: #334155;">Phone:</strong> ${phone || 'Not provided'}<br/>
            <strong style="color: #334155;">Legal Matter:</strong> ${legalMatter}
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #334155;">Subject:</strong> ${subject}
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #fbbf24;">
            <strong style="color: #334155;">Message:</strong><br/>
            <div style="margin-top: 10px; line-height: 1.6; color: #475569;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; margin: 0; font-size: 14px;">
              <strong>📅 Received:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br/>
              <strong>🌐 From:</strong> Contact Form on Website
            </p>
          </div>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 10px; margin-top: 20px; border: 1px solid #fbbf24;">
          <p style="color: #92400e; margin: 0; font-weight: bold;">
            ⚡ Action Required: Please respond to this client inquiry within 24 hours
          </p>
        </div>
      </div>
    `

    // Auto-reply email to client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: #fbbf24; margin: 0; font-size: 24px;">⚖️ Thank you for contacting Adv. Kishor Kagathara</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1e293b;">Dear ${name},</h2>
          
          <p style="color: #475569; line-height: 1.6;">
            Thank you for reaching out to me regarding your ${legalMatter.toLowerCase()} matter. 
            I have received your message and will review it carefully.
          </p>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #fbbf24;">
            <h3 style="color: #334155; margin: 0 0 10px 0;">📋 Your Inquiry Summary:</h3>
            <p style="color: #475569; margin: 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="color: #475569; margin: 0;"><strong>Legal Matter:</strong> ${legalMatter}</p>
          </div>
          
          <h3 style="color: #1e293b; margin-bottom: 15px;">⏰ What happens next?</h3>
          <ul style="color: #475569; line-height: 1.6;">
            <li><strong>Initial Review:</strong> I will review your case details within 2-4 hours</li>
            <li><strong>Response:</strong> You can expect a detailed response within 24 hours</li>
            <li><strong>Consultation:</strong> If needed, I'll arrange a free consultation to discuss your matter</li>
            <li><strong>Emergency:</strong> For urgent matters, please call +91 96383 12551 immediately</li>
          </ul>
          
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #16a34a;">
            <h3 style="color: #166534; margin: 0 0 10px 0;">📞 Need Immediate Help?</h3>
            <p style="color: #166534; margin: 0;">
              For emergency legal matters requiring immediate attention, please call my 24/7 hotline:
              <strong>+91 96383 12551</strong>
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #475569; line-height: 1.6;">
              <strong>Best regards,</strong><br/>
              <strong style="color: #1e293b;">Adv. Kishor Kagathara</strong><br/>
              Senior Advocate<br/>
              Laxminarayan Complex, Near Government Hospital, Dhrol<br/>
              📧 kbk.advocatedhrol@gmail.com<br/>
              📞 +91 96383 12551
            </p>
          </div>
        </div>
        
        <div style="text-center; padding: 20px; color: #64748b; font-size: 12px;">
          <p>This is an automated response. Please do not reply to this email directly.</p>
          <p>© 2024 Adv. Kishor Kagathara. All rights reserved.</p>
        </div>
      </div>
    `

    // Send email to advocate
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADVOCATE_EMAIL || process.env.SMTP_USER,
      subject: `🔔 New Legal Inquiry: ${legalMatter} - ${subject}`,
      html: advocateEmailHtml,
      replyTo: email,
    })

    // Send auto-reply to client
    await transporter.sendMail({
      from: `"Adv. Kishor Kagathara" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `✅ Received: Your legal inquiry regarding ${legalMatter}`,
      html: clientEmailHtml,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! You will receive a confirmation email shortly.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact directly at kbk.advocatedhrol@gmail.com' 
      },
      { status: 500 }
    )
  }
}