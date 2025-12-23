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
  const ADMIN_EMAIL = "contact@seraphichomes.in"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, phone, code, product } = body

    if (!name || !email || !phone || !product) {
      throw createError({ statusCode: 400 })
    }

    const transporter = nodemailer.createTransport(SMTP_CONFIG)
    await transporter.verify()

    await transporter.sendMail({
      from: `"Seraphic Homes" <${SMTP_CONFIG.auth.user}>`,
      to: ADMIN_EMAIL,
      subject: "📅 New Demo Booking Request",
      html: `
        <h2>New Demo Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${code} ${phone}</p>
        <p><b>Product:</b> ${product}</p>
      `
    })

    return { success: true }
  } catch (err) {
    console.error("Demo mail error:", err)
    throw createError({ statusCode: 500 })
  }
})

