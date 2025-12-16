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
    const { name, email, phone, code } = body

    if (!name || !email || !phone) {
      throw createError({ statusCode: 400, statusMessage: "Missing fields" })
    }

    const transporter = nodemailer.createTransport(SMTP_CONFIG)
    await transporter.verify()

    await transporter.sendMail({
      from: `"Seraphic Homes" <${SMTP_CONFIG.auth.user}>`,
      to: ADMIN_EMAIL,
      subject: "📘 New Catalogue Request",
      html: `
        <h2>New Catalogue Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${code} ${phone}</p>
      `
    })

    return { success: true }
  } catch (err) {
    console.error("Catalog mail error:", err)
    throw createError({ statusCode: 500, statusMessage: "Mail send failed" })
  }
})