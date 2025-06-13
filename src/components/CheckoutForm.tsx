"use client";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CheckoutFormProps {
  priceId: string;
  programName: string; // Add program name to props
}

export function CheckoutForm({ priceId, programName }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // User information state
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate user information
    if (!userInfo.name.trim() || !userInfo.email.trim()) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userInfo.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const { clientSecret, error: fetchError } = await res.json();
      if (fetchError) throw new Error(fetchError);

      const result = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements!.getElement(CardElement)!,
          billing_details: {
            name: userInfo.name,
            email: userInfo.email,
          },
        },
      });

      if (result?.error) {
        setError(result.error.message || "Payment failed.");
      } else if (result?.paymentIntent?.status === "succeeded") {
        // Send email notification to coach
        try {
          await fetch("/api/purchase-notification", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              customerName: userInfo.name,
              customerEmail: userInfo.email,
              programName: programName,
              paymentIntentId: result.paymentIntent.id,
            }),
          });
        } catch (emailError) {
          console.error("Failed to send notification email:", emailError);
          // Don't show error to user since payment was successful
        }

        setSuccess(true);
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
        <div className="text-green-800 font-semibold text-lg mb-2">
          Payment successful!
        </div>
        <p className="text-green-700">
          Thank you for your purchase! You&apos;ll receive a confirmation email
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-lg bg-gray-50"
    >
      <div className="space-y-4">
        <div>
          <Input
            id="name"
            name="name"
            type="text"
            value={userInfo.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <Input
            id="email"
            name="email"
            type="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            required
          />
        </div>
      </div>

      <div className="p-3 border rounded bg-white">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm p-2 bg-red-50 rounded border border-red-200">
          {error}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Complete Purchase"}
      </Button>
    </form>
  );
}
