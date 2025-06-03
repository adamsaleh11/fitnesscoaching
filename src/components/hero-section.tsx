import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span>Certified Personal Trainer • CanFitPro</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block text-blue-600">
                  Physique & Performance
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Custom fitness programs and nutrition plans designed to help you
                achieve your goals faster than ever before.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="#services">
                  View Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-6"
              >
                <Link href="/apply">Apply for Coaching</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Clients Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Miguel Fernandez - Personal Trainer"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-sm font-medium text-gray-900">
                Custom Programs
              </div>
              <div className="text-xs text-gray-600">
                Tailored to your goals
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-sm font-medium text-gray-900">
                Nutrition Plans
              </div>
              <div className="text-xs text-gray-600">Macro-optimized meals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
