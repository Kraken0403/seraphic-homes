import nodemailer from "nodemailer"

export default defineEventHandler(async (event) => {
  try {
    console.log("🛏️ Sleep Spa booking API HIT")

    const body = await readBody(event)
    const { name, email, phone, code, date, time } = body

    if (!name || !email || !phone || !date || !time) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields"
      })
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

    // optional but recommended
    await transporter.verify()

    const info = await transporter.sendMail({
      from: `"Seraphic Homes" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🛏️ New Sleep Spa Booking Request",
      html: `
        <h2>New Sleep Spa Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${code} ${phone}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <br/>
        <p>Submitted from Seraphic Homes website</p>
      `
    })

    console.log("📨 Sleep Spa mail sent:", info.accepted)

    return { success: true }
  } catch (err) {
    console.error("❌ Sleep Spa mail error:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send booking request"
    })
  }
})
