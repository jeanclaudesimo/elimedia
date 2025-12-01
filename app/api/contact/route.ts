import { NextRequest, NextResponse } from 'next/server';

const PORTAL_API_URL = 'http://portal.digitalssolutions.de/api/contact/submit';
const TENANT_KEY = 'c7b76b7d31ecd6c209c42c6176a76f30ac63ac344d78fdd14de05ae6b81f2760';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, subject, message } = body;

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      );
    }

    // Sende an Portal API
    const response = await fetch(PORTAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenant_key: TENANT_KEY,
        name,
        email,
        phone: phone || '',
        subject: subject || 'Kontaktanfrage von IMIDIA Website',
        message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Portal API error:', errorText);
      return NextResponse.json(
        { error: 'Fehler beim Senden der Nachricht' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}
