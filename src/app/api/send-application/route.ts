import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { CoachingApplicationTemplate } from '@/components/CoachingApplicationTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      age,
      experience,
      goals,
      timeline,
      program,
      challenges,
      motivation,
    } = body;

    if (!name || !email || !age || !experience || !goals || !timeline || !program) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Coach App <onboarding@resend.dev>',
      to: ['adamsaleh0824@gmail.com'], // Replace with your actual email
      subject: `New Coaching Application from ${name}`,
      react: await CoachingApplicationTemplate({
        name,
        email,
        phone,
        age,
        experience,
        goals,
        timeline,
        program,
        challenges,
        motivation,
      }),
    });

    if (error) {
      console.error('Resend Error:', error);
      return Response.json({ error: 'Email failed to send' }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error('API Handler Error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}