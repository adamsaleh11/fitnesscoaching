"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Target,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const transformationImages = [
    {
      src: "/coachBefore.jpg?height=180&width=240",
      alt: "Before transformation",
      label: "Before",
    },
    {
      src: "/coachAfter.jpg?height=180&width=240",
      alt: "After transformation",
      label: "After",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % transformationImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + transformationImages.length) % transformationImages.length
    );
  };

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Force side-by-side layout on all screen sizes */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-start">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-8 sm:mb-12 lg:mb-16">
              <Badge
                variant="outline"
                className="text-blue-900 border-blue-900 text-xs sm:text-sm"
              >
                Certified Professional
              </Badge>
              <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Meet Miguel Fernandez
              </h2>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                As a CanFitPro certified personal trainer with over 5 years of
                experience, I&apos;ve dedicated my career to helping people
                transform their bodies and minds through strategic fitness and
                nutrition programming. I believe true transformation is about
                building confidence, discipline, and mental resilience to live
                your life to its fullest potential.
              </p>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                My approach combines evidence-based training methods that is
                tailored to your unique goals, equipment, and lifestyle,
                ensuring you build sustainable habits, improve your relationship
                with food and exercise, and develop a mindset that empowers you
                long after our sessions are done.
              </p>
            </div>

            <div className="sm:mt-20 lg:mt-24 xl:mt-28 grid grid-cols-2 gap-1.5 sm:gap-3 lg:gap-6 h-[80px] sm:h-[180px] lg:h-[400px] xl:h-[450px]">
              <div className="flex flex-col gap-1.5 sm:gap-3 lg:gap-6">
                <Card className="flex-1">
                  <CardContent className="p-1.5 sm:p-3 lg:p-6 text-center h-full flex flex-col justify-center">
                    <Users className="h-3 w-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-900 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                    <div className="text-xs sm:text-lg lg:text-2xl font-bold text-gray-900">
                      50+
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                      Clients Coached
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-1">
                  <CardContent className="p-2 sm:p-3 lg:p-6 text-center h-full flex flex-col justify-center">
                    <Target className="h-3 w-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-900 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                    <div className="text-xs sm:text-lg lg:text-2xl font-bold text-gray-900">
                      98%
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                      Success Rate
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-3 lg:gap-6">
                <Card className="flex-1">
                  <CardContent className="p-2 sm:p-3 lg:p-6 text-center h-full flex flex-col justify-center">
                    <Award className="h-3 w-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-900 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                    <div className="text-[10px] sm:text-sm lg:text-2xl font-bold text-gray-900">
                      CanFitPro
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                      Certified Trainer
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-1">
                  <CardContent className="p-2 sm:p-3 lg:p-6 text-center h-full flex flex-col justify-center">
                    <Zap className="h-3 w-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-900 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                    <div className="text-xs sm:text-lg lg:text-2xl font-bold text-gray-900">
                      5+
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                      Years Experience
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="relative h-[400px] sm:h-[300px] lg:h-[500px] xl:h-[550px] w-full rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/coach4.jpg?height=500&width=600"
                alt="Miguel Fernandez training"
                fill
                className="object-cover"
              />
            </div>

            {/* Transformation slider - made longer on mobile */}
            <div className="relative h-[400px] sm:h-[300px] lg:h-[500px] xl:h-[550px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={transformationImages[currentImageIndex].src}
                alt={transformationImages[currentImageIndex].alt}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  currentImageIndex === 1
                    ? "object-[35%_center] sm:object-center"
                    : "object-center-[10%_center] sm:object-center"
                }`}
              />

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous transformation image"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next transformation image"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
              </button>

              {/* Before/After bubble */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border">
                <div className="text-xs sm:text-sm font-semibold text-gray-900">
                  {transformationImages[currentImageIndex].label}
                </div>
              </div>

              {/* Image indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                {transformationImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-white w-4"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to ${transformationImages[index].label} image`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
