const nodemailer = require("nodemailer");

function escape(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, projectType, budget, message } = req.body ?? {};

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.TITAN_EMAIL,
      pass: process.env.TITAN_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Aarth Construction Website" <${process.env.TITAN_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Quote Request – ${escape(projectType)} from ${escape(name)}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;color:#111">
          <h2 style="border-bottom:2px solid #C9963B;padding-bottom:8px">New Quote Request</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px 0;font-weight:600;width:140px">Name</td><td>${escape(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Phone</td><td>${escape(phone) || "N/A"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Project Type</td><td>${escape(projectType)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Budget</td><td>${escape(budget) || "N/A"}</td></tr>
          </table>
          <h3 style="margin-top:24px">Message</h3>
          <p style="background:#f5f5f5;padding:16px;border-left:3px solid #C9963B;white-space:pre-wrap">${escape(message)}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err.message);
    res.status(500).json({ error: err.message });
  }
}
