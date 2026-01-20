import { NextRequest, NextResponse } from 'next/server';

const PORTAL_API_URL = 'http://portal.digitalssolutions.de/api/contact/submit';
const TENANT_KEY = '93b0c76e36a4b32bf5db96d44aa3c222aff3567138614940c48840e8af70aa3c';

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
