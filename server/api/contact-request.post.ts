import nodemailer from "nodemailer"
const SMTP_CONFIG = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "trivedibhavya1997@gmail.com",
      pass: "lhgplrtseeebdovm"
    }
  }

  
export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event)
      const { name, email, phone, message } = body
  
      if (!name || !email || !message) {
        throw createError({ statusCode: 400 })
      }
  
      const transporter = nodemailer.createTransport(SMTP_CONFIG)
      await transporter.verify()
  
      await transporter.sendMail({
        from: `"Seraphic Homes" <${SMTP_CONFIG.auth.user}>`,
        to: ADMIN_EMAIL,
        subject: "📩 New Contact Form Submission",
        html: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "-"}</p>
          <p><b>Message:</b><br/>${message}</p>
        `
      })
  
      return { success: true }
    } catch (err) {
      console.error("Contact mail error:", err)
      throw createError({ statusCode: 500 })
    }
  })
