import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    // Form data extract
    const formData = await req.formData()
    const name = formData.get("name")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const resumeText = formData.get("resume")?.toString() || ""
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    // Upload folder
    const uploadsDir = path.join(process.cwd(), "uploads")
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir)

    // Save file
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    let filePath = path.join(uploadsDir, file.name)

    // Handle same filename
    if (fs.existsSync(filePath)) {
      const ext = path.extname(file.name)
      const base = path.basename(file.name, ext)
      filePath = path.join(uploadsDir, `${base}-${Date.now()}${ext}`)
    }

    fs.writeFileSync(filePath, buffer)

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // true if port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate errors
      },
    })

    // Send email
    await transporter.sendMail({
      from: `"MrBitX Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Job Application: ${name}`,
      html: `<h3>New Application</h3>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b></p>
             <p>${resumeText}</p>`,
      attachments: [
        {
          filename: path.basename(filePath),
          path: filePath,
        },
      ],
    })

    console.log("✅ Application email sent")
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("🔥 Server error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
