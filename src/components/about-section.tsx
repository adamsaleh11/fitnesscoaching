import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-blue-600 border-blue-600"
              >
                Certified Professional
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Meet Miguel Fernandez
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a CanFitPro certified personal trainer with over 5 years of
                experience, I've dedicated my career to helping people transform
                their bodies and minds through strategic fitness and nutrition
                programming.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines evidence-based training methods with
                personalized nutrition strategies to deliver results that last.
                Every program I create is tailored to your unique goals,
                equipment, and lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Clients Coached</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">
                    CanFitPro
                  </div>
                  <div className="text-sm text-gray-600">Certified Trainer</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Miguel Fernandez training"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/placeholder.svg?height=180&width=240"
                  alt="Healthy meal prep"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/placeholder.svg?height=180&width=240"
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
