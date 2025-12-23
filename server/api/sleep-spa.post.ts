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

export default defineEventHandler(async (event: any) => {
  try {
    const body = await readBody(event)
    const { name, email, phone, code, date, time } = body

    if (!name || !email || !phone || !date || !time) {
      throw createError({ statusCode: 400 })
    }

    const transporter = nodemailer.createTransport(SMTP_CONFIG)
    await transporter.verify()

    await transporter.sendMail({
      from: `"Seraphic Homes" <${SMTP_CONFIG.auth.user}>`,
      to: ADMIN_EMAIL,
      subject: "🛏️ New Sleep Spa Booking Request",
      html: `
        <h2>New Sleep Spa Booking</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${code} ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
      `
    })

    return { success: true }
  } catch (err) {
    console.error("Sleep Spa mail error:", err)
    throw createError({ statusCode: 500 })
  }
})
