import nodemailer from "nodemailer"

export default defineEventHandler(async (event) => {
  try {
    console.log("📅 Demo request API HIT")

    const body = await readBody(event)
    const { name, email, phone, code, product } = body

    if (!name || !email || !phone || !product) {
      throw createError({ statusCode: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: `"Seraphic Homes" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📅 New Demo Booking Request",
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${code} ${phone}</p>
        <p><strong>Product:</strong> ${product}</p>
      `
    })

    return { success: true }
  } catch (err) {
    console.error("Demo mail error:", err)
    throw createError({ statusCode: 500 })
  }
})
