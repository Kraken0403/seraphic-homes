import nodemailer from "nodemailer"

export default defineEventHandler(async (event) => {

  try {
    const body = await readBody(event)
    const { name, email, phone, code } = body

    if (!name || !email || !phone) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields"
      })
    }

    // ✅ SMTP CONFIG (example: Gmail / custom SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    // ✅ ADMIN EMAIL
    await transporter.sendMail({
      from: `"Seraphic Homes" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📘 New Catalogue Request",
      html: `
        <h2>New Catalogue Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${code} ${phone}</p>
        <br/>
        <p>Sent from Seraphic Homes website</p>
      `
    })

    return { success: true }
  } catch (err: any) {
    console.error("Catalog mail error:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "Mail send failed"
    })
  }
})
