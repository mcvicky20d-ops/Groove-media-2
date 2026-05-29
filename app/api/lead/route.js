import { NextResponse } from "next/server";

/**
 * Receives a contact-form lead and forwards it to the n8n webhook.
 * Set N8N_WEBHOOK_URL in .env.local (see .env.local.example). If it's not set,
 * we still return ok:true so the front-end success + WhatsApp flow works in
 * development — the lead just isn't forwarded.
 */
export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, projectType, message } = data || {};
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 422 }
    );
  }

  const webhook = process.env.N8N_WEBHOOK_URL;
  if (!webhook) {
    console.warn("N8N_WEBHOOK_URL not set — lead not forwarded:", { name, email });
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        projectType,
        message,
        source: "thegroovemedia.in",
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("Failed to forward lead to n8n:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to forward lead" },
      { status: 502 }
    );
  }
}
