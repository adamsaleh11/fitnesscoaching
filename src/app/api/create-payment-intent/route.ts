import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil", // Updated to the correct API version
});

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json();

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID is required" },
        { status: 400 }
      );
    }

    // First, get the price to determine the amount
    const price = await stripe.prices.retrieve(priceId);
    
    if (!price.unit_amount) {
      return NextResponse.json(
        { error: "Price does not have a unit amount" },
        { status: 400 }
      );
    }

    // Create a Payment Intent instead of a Checkout Session
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price.unit_amount,
      currency: price.currency || 'usd',
      payment_method_types: ['card'],
      metadata: {
        priceId: priceId,
      },
    });

    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret 
    });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}