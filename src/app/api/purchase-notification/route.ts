import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { PurchaseNotificationTemplate } from '@/components/PurchaseNotificationTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      customerName,
      customerEmail,
      programName,
    } = body;

    if (!customerName || !customerEmail || !programName) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Coach App <onboarding@resend.dev>',
      to: ['adamsaleh0824@gmail.com'], // Your coach email
      subject: `New Program Purchase: ${programName}`,
      react: PurchaseNotificationTemplate({
        customerName,
        customerEmail,
        programName,
        purchaseDate: new Date().toLocaleDateString(),
      }),
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: 'Email failed to send' }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API Handler Error:', err);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}