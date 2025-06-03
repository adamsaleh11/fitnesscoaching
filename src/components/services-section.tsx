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
import { Check, Clock, Users, Zap } from "lucide-react";
import Link from "next/link";

const oneTimeServices = [
  {
    title: "Blueprint Program",
    description: "The exact program I use to power MY workouts",
    price: "$24.99",
    features: [
      "Proven workout blueprint",
      "Instant digital delivery",
      "Exercise demonstrations",
      "Progress tracking guide",
    ],
    icon: Zap,
    popular: false,
  },
  {
    title: "Custom 3-Month Program",
    description: "Tailored to your goals, equipment, and schedule",
    price: "$65.99",
    features: [
      "Custom 3-month plan",
      "Equipment-specific workouts",
      "Goal-oriented programming",
      "48-hour delivery",
    ],
    icon: Clock,
    popular: false,
  },
  {
    title: "Custom 6-Month Program",
    description: "Extended custom programming for long-term results",
    price: "$99.99",
    features: [
      "Custom 6-month plan",
      "Progressive overload built-in",
      "Equipment-specific workouts",
      "48-hour delivery",
    ],
    icon: Clock,
    popular: true,
  },
];

const nutritionServices = [
  {
    title: "3-Month Program + Nutrition",
    description: "Complete training and nutrition package",
    price: "$149.99",
    features: [
      "Full 3-month training plan",
      "Custom meal plan recommendations",
      "Grocery list & template",
      "Macro breakdown (protein/carb/fat)",
    ],
    duration: "3 months",
  },
  {
    title: "6-Month Program + Nutrition",
    description: "Extended training and nutrition support",
    price: "$224.99",
    features: [
      "Full 6-month training plan",
      "Custom meal plan recommendations",
      "Grocery list & template",
      "Macro breakdown (protein/carb/fat)",
    ],
    duration: "6 months",
  },
];

const coachingPlans = [
  {
    title: "Ongoing Coaching",
    description: "Full-access coaching for serious transformation",
    monthlyPrices: {
      "6": "$311.99",
      "9": "$287.99",
      "12": "$249.99",
    },
    totalPrices: {
      "6": "$1,871.94",
      "9": "$2,591.91",
      "12": "$2,999.88",
    },
    features: [
      "Weekly check-ins",
      "Monthly program updates",
      "Goal-setting sessions",
      "Form check reviews",
      "Direct contact during support hours",
      "Nutrition tracking reviews",
    ],
    requiresApplication: true,
  },
  {
    title: "Coaching + Full Nutrition",
    description: "Maximum results with complete lifestyle alignment",
    monthlyPrices: {
      "6": "$359.99",
      "9": "$339.99",
      "12": "$299.99",
    },
    totalPrices: {
      "6": "$2,159.94",
      "9": "$3,059.91",
      "12": "$3,599.88",
    },
    features: [
      "Everything in Ongoing Coaching",
      "Personalized meal plan ideas",
      "Custom grocery lists",
      "Macro guidance & weekly nutrition review",
      "Lifestyle support around eating habits",
    ],
    requiresApplication: true,
    popular: true,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Transformation Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From one-time programs to comprehensive coaching, find the perfect
            fit for your fitness journey.
          </p>
        </div>

        {/* One-Time Programs */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            One-Time Programs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {oneTimeServices.map((service, index) => (
              <Card
                key={index}
                className={`relative ${
                  service.popular ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <service.icon className="h-8 w-8 text-blue-600" />
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
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link
                      href={`/checkout?service=${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}&price=${service.price.replace(
                        "$",
                        ""
                      )}`}
                    >
                      Get Started
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Nutrition Programs */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Training + Nutrition Packages
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {nutritionServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Users className="h-8 w-8 text-blue-600" />
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.duration}
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
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link
                      href={`/checkout?service=${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}&price=${service.price.replace(
                        "$",
                        ""
                      )}`}
                    >
                      Get Started
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Ongoing Coaching */}
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
                className={`${
                  plan.popular ? "ring-2 ring-blue-500" : ""
                } relative`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
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

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              What Happens After You Apply
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <div className="font-medium text-gray-900">1. Review</div>
                <div>Application reviewed within 48 hours</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">2. Invoice</div>
                <div>If accepted, you'll receive an invoice</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">3. Delivery</div>
                <div>Custom program delivered in 3-5 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
