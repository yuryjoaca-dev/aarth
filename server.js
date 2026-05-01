import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();

app.use(cors({
  origin: [
    "https://www.aarthconstruction.com",
    "https://aarthconstruction.com",
    "http://localhost:5173",
  ],
}));

app.use(express.json());

function escape(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, projectType, budget, message } = req.body ?? {};

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Aarth Construction <yury@aarthconstruction.com>",
      to: [process.env.TO_EMAIL, "vladimir@aarthconstruction.com"],
      replyTo: email,
      subject: `New Quote Request – ${escape(projectType)} from ${escape(name)}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Inter,Arial,sans-serif">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
    <div style="background:#0f0f0f;padding:28px 32px">
      <p style="margin:0;color:#C9963B;font-size:18px;font-weight:700;letter-spacing:0.05em">AARTH CONSTRUCTION</p>
      <p style="margin:4px 0 0;color:#888;font-size:11px;letter-spacing:0.15em;text-transform:uppercase">New Quote Request</p>
    </div>
    <div style="height:3px;background:linear-gradient(90deg,#C9963B,#e8b96a)"></div>
    <div style="padding:32px">
      <p style="margin:0 0 24px;font-size:15px;color:#444">You have a new quote request from <strong style="color:#111">${escape(name)}</strong>.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr style="border-bottom:1px solid #f0f0f0"><td style="padding:12px 0;color:#888;width:130px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Name</td><td style="padding:12px 0;color:#111;font-weight:600">${escape(name)}</td></tr>
        <tr style="border-bottom:1px solid #f0f0f0"><td style="padding:12px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Email</td><td style="padding:12px 0"><a href="mailto:${escape(email)}" style="color:#C9963B;text-decoration:none;font-weight:600">${escape(email)}</a></td></tr>
        <tr style="border-bottom:1px solid #f0f0f0"><td style="padding:12px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Phone</td><td style="padding:12px 0;color:#111;font-weight:600">${escape(phone) || "—"}</td></tr>
        <tr style="border-bottom:1px solid #f0f0f0"><td style="padding:12px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Project Type</td><td style="padding:12px 0"><span style="background:#C9963B;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;text-transform:uppercase">${escape(projectType)}</span></td></tr>
        <tr><td style="padding:12px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Budget</td><td style="padding:12px 0;color:#111;font-weight:600">${escape(budget) || "—"}</td></tr>
      </table>
      <div style="margin-top:28px">
        <p style="margin:0 0 10px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Message</p>
        <div style="background:#fafafa;border-left:3px solid #C9963B;padding:16px 20px;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap">${escape(message)}</div>
      </div>
      <div style="margin-top:32px;text-align:center">
        <a href="mailto:${escape(email)}" style="display:inline-block;background:#C9963B;color:#fff;text-decoration:none;font-weight:700;font-size:13px;padding:12px 28px;text-transform:uppercase">Reply to ${escape(name)}</a>
      </div>
    </div>
    <div style="background:#f9f9f9;border-top:1px solid #eee;padding:20px 32px;text-align:center">
      <p style="margin:0;font-size:11px;color:#aaa">Aarth Construction Inc · Edmonton, AB · <a href="tel:5875962793" style="color:#C9963B;text-decoration:none">587-596-2793</a></p>
    </div>
  </div>
</body>
</html>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
