import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    console.log("📩 Contact API hit")

    const body = await req.json()
    console.log("📦 Received body:", body)

    const { name, email, subject, message } = body

    if (!email || !message) {
      console.log("❌ Validation failed")
      return NextResponse.json({ error: "Invalid data" }, { status: 400 })
    }

    console.log("✅ Validation passed")

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        // self-signed certificate ignore করা হবে
        rejectUnauthorized: false,
      },
    })

    console.log("📡 Transporter created")

    await transporter.sendMail({
      from: `"MrBitX Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    })

    console.log("✅ Email sent successfully")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("🔥 Email error:", error)
    return NextResponse.json({ error: "Email failed" }, { status: 500 })
  }
}
