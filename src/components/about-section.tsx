import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Force side-by-side layout on all screen sizes */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-start">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
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
                nutrition programming.
              </p>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                My approach combines evidence-based training methods with
                personalized nutrition strategies to deliver results that last.
                Every program I create is tailored to your unique goals,
                equipment, and lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-6">
              <Card>
                <CardContent className="p-2 sm:p-3 lg:p-6 text-center">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-900 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900">
                    50+
                  </div>
                  <div className="text-xs sm:text-xs lg:text-sm text-gray-600">
                    Clients Coached
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-2 sm:p-3 lg:p-6 text-center">
                  <Award className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-900 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                  <div className="text-xs sm:text-sm lg:text-2xl font-bold text-gray-900">
                    CanFitPro
                  </div>
                  <div className="text-xs sm:text-xs lg:text-sm text-gray-600">
                    Certified Trainer
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-2 sm:p-3 lg:p-6 text-center">
                  <Target className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-900 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900">
                    98%
                  </div>
                  <div className="text-xs sm:text-xs lg:text-sm text-gray-600">
                    Success Rate
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-2 sm:p-3 lg:p-6 text-center">
                  <Zap className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-900 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900">
                    5+
                  </div>
                  <div className="text-xs sm:text-xs lg:text-sm text-gray-600">
                    Years Experience
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="relative h-[295px] sm:h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/coach4.jpg?height=400&width=500"
                alt="Miguel Fernandez training"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-2 lg:gap-4">
              <div className="relative h-[220px] sm:h-[140px] lg:h-[290px] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/coachBefore.jpg?height=180&width=240"
                  alt="Healthy meal prep"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[220px] sm:h-[140px] lg:h-[290px] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/coachAfter.jpg?height=180&width=240"
                  alt="Workout demonstration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
