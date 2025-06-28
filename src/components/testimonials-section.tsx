"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Josh Fanous",
    result: "",
    quote:
      "I wanted to put on some muscle and Miguel helped me while I was balancing university and a full time job.",
    beforeImage: "/testimonial1before.JPG?height=200&width=150",
    afterImage: "/testimonial1after.jpg?height=200&width=150",
    rating: 5,
  },
  {
    name: "Kyle Fillion",
    result: "",
    quote:
      "I grew up skinny and wanted to put on size and get stronger for Hockey. Miguel helped me achieve both those goals with his approach. Fitness is now part of my every day life.",
    beforeImage: "/testimonial2before.PNG?height=200&width=150",
    afterImage: "/testimonial2after.PNG?height=200&width=150",
    rating: 5,
  },
  {
    name: "Tia Skri",
    result: "",
    quote:
      "I had bad drinking and eating habits and was gaining weight but Miguel showed me ways to overcome it while still being able to enjoy myself on a healthy weight loss and muscle building journey.",
    beforeImage: "/testimonial3before.JPG?height=200&width=150",
    afterImage: "/testimonial3after.JPG?height=200&width=150",
    rating: 5,
  },
];

const mealImages = [
  {
    src: "/mealPrep1.JPG?height=400&width=400",
    alt: "Healthy meal prep 1",
    description: "Macro-optimized & delicious",
  },
  {
    src: "/mealPrep2.JPG?height=400&width=400",
    alt: "Healthy meal prep 2",
    description: "Macro-optimized & delicious",
  },
  {
    src: "/mealPrep3.JPG?height=400&width=400",
    alt: "Healthy meal prep 3",
    description: "Macro-optimized & delicious",
  },
  {
    src: "/mealPrep4.JPG?height=400&width=400",
    alt: "Healthy meal prep 4",
    description: "Macro-optimized & delicious",
  },
];

export function TestimonialsSection() {
  const [currentMealIndex, setCurrentMealIndex] = useState(0);

  const nextMeal = () => {
    setCurrentMealIndex((prev) => (prev + 1) % mealImages.length);
  };

  const prevMeal = () => {
    setCurrentMealIndex(
      (prev) => (prev - 1 + mealImages.length) % mealImages.length
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformations achieved through our custom programs and
            ongoing coaching.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Before/After Images */}
                <div className="grid grid-cols-2 h-48">
                  <div className="relative bg-gray-100">
                    <Image
                      src={testimonial.beforeImage || "/placeholder.svg"}
                      alt={`${testimonial.name} before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Before
                    </div>
                  </div>
                  <div className="relative bg-gray-100">
                    <Image
                      src={testimonial.afterImage || "/placeholder.svg"}
                      alt={`${testimonial.name} after`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      After
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-600 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nutrition Section */}
        <div className="mt-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            Nutrition That Actually Tastes Good
          </h3>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Description - Left Side */}
            <div className="lg:w-1/2 space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Nutrition plays a big role in reaching your fitness goals—but it
                doesn&apos;t have to mean strict diets or cutting out the foods
                you love. I&apos;ve learned how to eat in a way that supports my
                goals while still enjoying my meals, and I want to help you do
                the same.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;ve bulked and cut over 35 pounds more than once, using
                both aggressive and slower approaches depending on the goal. No
                matter your starting point, it&apos;s not about <em>if</em>{" "}
                you&apos;ll get results—it&apos;s about <em>when</em>, if
                you&apos;re ready to commit.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;ll share the exact meal prep ideas and recipes I use
                myself—whether you&apos;re trying to lose weight, gain muscle,
                or just feel better day to day. Together, we&apos;ll build a way
                of eating that&apos;s effective, realistic, and actually
                enjoyable.
              </p>
            </div>

            {/* Image Slider - Right Side */}
            <div className="lg:w-1/2">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={mealImages[currentMealIndex].src}
                  alt={mealImages[currentMealIndex].alt}
                  fill
                  className="object-cover transition-opacity duration-300"
                />

                {/* Navigation buttons */}
                <button
                  onClick={prevMeal}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Previous meal image"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>

                <button
                  onClick={nextMeal}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Next meal image"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {mealImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMealIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentMealIndex
                          ? "bg-white w-6"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                      aria-label={`Go to meal image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-12 left-4 text-white">
                  <div className="text-sm opacity-90">
                    {mealImages[currentMealIndex].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
