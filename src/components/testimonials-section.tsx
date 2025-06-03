import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    result: "Lost 25 lbs in 4 months",
    quote:
      "Miguel's program completely changed my relationship with fitness. The custom nutrition plan made all the difference.",
    beforeImage: "/placeholder.svg?height=200&width=150",
    afterImage: "/placeholder.svg?height=200&width=150",
    rating: 5,
  },
  {
    name: "Mike Chen",
    result: "Gained 15 lbs muscle",
    quote:
      "The ongoing coaching kept me accountable and motivated. Best investment I've made in my health.",
    beforeImage: "/placeholder.svg?height=200&width=150",
    afterImage: "/placeholder.svg?height=200&width=150",
    rating: 5,
  },
  {
    name: "Jessica Rodriguez",
    result: "Transformed in 6 months",
    quote:
      "Miguel's approach is sustainable and realistic. I finally found a program that fits my busy lifestyle.",
    beforeImage: "/placeholder.svg?height=200&width=150",
    afterImage: "/placeholder.svg?height=200&width=150",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
                    "{testimonial.quote}"
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

        {/* Meal Examples */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nutrition That Actually Tastes Good
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-64 rounded-xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={`/placeholder.svg?height=256&width=200`}
                  alt={`Healthy meal ${i}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Meal Plan Example</div>
                  <div className="text-xs opacity-90">
                    Macro-optimized & delicious
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
