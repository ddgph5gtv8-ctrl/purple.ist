import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const company = typeof body?.company === 'string' ? body.company.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const phone = typeof body?.phone === 'string' ? body.phone.trim() : '';
    const meetingType = typeof body?.meetingType === 'string' ? body.meetingType.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Ad soyad, e-posta ve mesaj alanları zorunludur.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
    if (!recipient) {
      return NextResponse.json(
        { error: 'CONTACT_RECIPIENT_EMAIL tanımlı değil.' },
        { status: 500 }
      );
    }

    if (!resend) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY tanımlı değil.' },
        { status: 500 }
      );
    }

    const fromAddress = process.env.EMAIL_FROM || 'Purple <hello@purple.ist>';

    const result = await resend.emails.send({
      from: fromAddress,
      to: [recipient],
      replyTo: email,
      subject: 'Purple Web Form — Yeni İletişim Talebi',
      html: `
        <h3>Yeni bir iletişim talebi alındı.</h3>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Şirket:</strong> ${company || '-'}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || '-'}</p>
        <p><strong>Görüşme Türü:</strong> ${meetingType || '-'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
      text: [
        'Yeni bir iletişim talebi alındı.',
        '',
        `Ad Soyad: ${name}`,
        `Şirket: ${company || '-'}`,
        `E-posta: ${email}`,
        `Telefon: ${phone || '-'}`,
        `Görüşme Türü: ${meetingType || '-'}`,
        '',
        'Mesaj:',
        message,
      ].join('\n'),
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message || 'E-posta gönderilemedi.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: result.data?.id ?? null }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Beklenmeyen bir hata oluştu.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
