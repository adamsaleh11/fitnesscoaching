"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, Zap, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "@/components/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const oneTimeServices = [
  {
    title: "Strength Focus",
    description: "Build maximum strength with proven powerlifting techniques",
    price: "$24.99",
    stripePriceId: "price_1RZGQ9ENX0FrNg9rxaub5xY3",
    features: [
      "Custom 3-month plan",
      "Instant Digital Delivery",
      "Proven Results for strength gain from many clients",
      "Built in Progress tracker",
      "Adaptable to any fitness level",
    ],
    icon: Zap,
    popular: false,
  },
  {
    title: "Physique Focus",
    description: "Sculpt your ideal physique with targeted muscle building",
    price: "$24.99",
    stripePriceId: "price_1RZGR3ENX0FrNg9rKSwpSZFk",
    features: [
      "Custom 3-month plan",
      "Instant Digital Delivery",
      "Proven Results for muscle build from many clients",
      "Built in Progress tracker",
      "Adaptable to any fitness level",
    ],
    icon: Target,
    popular: true,
  },
  {
    title: "Fat Loss Focus",
    description: "Achieve sustainable fat loss while maintaining muscle",
    price: "$24.99",
    stripePriceId: "price_1RZGRRENX0FrNg9rMEOkImi3",
    features: [
      "Custom 3-month plan",
      "Instant Digital Delivery",
      "Proven Results for fat loss from many clients",
      "Built in Progress tracker",
      "Adaptable to any fitness level",
    ],
    icon: TrendingUp,
    popular: false,
  },
];

const coachingPlans = [
  {
    title: "Ongoing Coaching",
    description: "Full-access coaching for serious transformation",
    monthlyPrices: {
      "6": "$411.99",
      "9": "$387.99",
      "12": "$349.99",
    },
    features: [
      "Bi-weekly 1-1 sessions (goal setting + lifestyle support with eating habits)",
      "Monthly program updates",
      "Form check reviews",
      "Direct contact during support hours",
    ],
    requiresApplication: true,
  },
  {
    title: "On-going Coaching + Full Nutrition",
    description: "Maximum results with complete lifestyle alignment",
    monthlyPrices: {
      "6": "$459.99",
      "9": "$439.99",
      "12": "$399.99",
    },
    features: [
      "All perks of Ongoing Coaching Program",
      "Bi-weekly 1-on-1 meetings",
      "Weekly Client Group meetings",
      "Access to whatsapp chat with other clients",
      "Personalized Meal plans",
      "Custom Grocery List",
      "1-1 Weekly Touchbases",
    ],
    requiresApplication: true,
    popular: true,
  },
];

export function ServicesSection() {
  const [selectedPriceId, setSelectedPriceId] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Transformation Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From one-time programs to comprehensive coaching, find the perfect
            fit for your fitness journey.
          </p>
        </div>

        {/* One-Time Blueprint Programs */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            One-time Blueprint Programs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {oneTimeServices.map((service, index) => (
              <Card
                key={index}
                className={`relative ${service.popular ? "ring-2 ring-blue-900" : ""}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-900">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <service.icon className="h-8 w-8 text-blue-900" />
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {selectedPriceId === service.stripePriceId && (
                    <div className="mt-6">
                      <Elements stripe={stripePromise}>
                        <CheckoutForm
                          priceId={service.stripePriceId}
                          programName={service.title}
                        />
                      </Elements>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() =>
                      setSelectedPriceId(
                        selectedPriceId === service.stripePriceId
                          ? null
                          : service.stripePriceId
                      )
                    }
                  >
                    {selectedPriceId === service.stripePriceId
                      ? "Close Checkout"
                      : "Buy Now"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Coaching Plans */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ongoing Coaching Programs
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Application required • Premium transformation support
          </p>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coachingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-blue-900" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-900">
                    Most Comprehensive
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(plan.monthlyPrices).map(
                      ([months, price]) => (
                        <div key={months} className="border rounded-lg p-3">
                          <div className="text-sm text-gray-500">
                            {months} months
                          </div>
                          <div className="font-bold text-lg">{price}</div>
                          <div className="text-xs text-gray-400">per month</div>
                        </div>
                      )
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/apply">Apply Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
