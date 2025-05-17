export async function POST(request) {
try {
// Parse the request body
const body = await request.json()

// Validate required fields
const requiredFields = ["name", "email", "subject", "message"]
for (const field of requiredFields) {
    if (!body[field]) {
    return Response.json({ error: `Missing required field: ${field}` }, { status: 400 })
    }
}

const { name, email, subject, message } = body

// Log the contact request (for demonstration)
console.log(`Contact form submission from ${name} (${email})`)
console.log(`Subject: ${subject}`)
console.log(`Message: ${message}`)

// In a production environment, you would send an email here
// using a service like Nodemailer, SendGrid, etc.

// For now, we'll just simulate a successful response
return Response.json({ message: "Thank you for your message. I'll get back to you soon!" }, { status: 200 })
} catch (error) {
console.error("Error processing contact form:", error)
return Response.json({ error: "Failed to process your request" }, { status: 500 })
}
}
