"use client";

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
import { Check } from "lucide-react";
import Link from "next/link";

const coachingPlans = [
  {
    title: "3-Month Coaching",
    description:
      "Complete transformation with personalized support and accountability",
    duration: "3 months",
    price: "$414.99",
    features: [
      "Custom training program (updated as you progress)",
      "Personalized nutrition strategy",
      "Grocery & meal structure guide",
      "Weekly accountability check ins",
      "Lifestyle & habit optimization",
      "Form review & technique corrections",
    ],
    popular: false,
  },
  {
    title: "6-Month Coaching",
    description:
      "Complete transformation with personalized support and accountability",
    duration: "6 months",
    price: "$389.99",
    features: [
      "Custom training program (updated as you progress)",
      "Personalized nutrition strategy",
      "Grocery & meal structure guide",
      "Weekly accountability check ins",
      "Lifestyle & habit optimization",
      "Form review & technique corrections",
    ],
    popular: true,
  },
  {
    title: "12-Month Coaching",
    description:
      "Complete transformation with personalized support and accountability",
    duration: "12 months",
    price: "$359.99",
    features: [
      "Custom training program (updated as you progress)",
      "Personalized nutrition strategy",
      "Grocery & meal structure guide",
      "Weekly accountability check ins",
      "Lifestyle & habit optimization",
      "Form review & technique corrections",
    ],
    popular: false,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Online Coaching
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized coaching built around your goals, lifestyle, and
            progress.
          </p>
        </div>

        {/* Coaching Plans */}
        <div>
          <p className="text-center text-gray-600 mb-8">
            Application required • Complete transformation support
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {coachingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-blue-900" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-900">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{plan.duration}</div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">
                        {plan.price}
                      </div>
                      <div className="text-xs text-gray-400">per month</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
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
