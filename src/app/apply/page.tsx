"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    goals: "",
    timeline: "",
    equipment: [],
    commitment: "",
    program: "",
    budget: "",
    challenges: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Apply for Coaching
          </h1>
          <p className="text-xl text-gray-600">
            Tell me about your goals so I can create the perfect program for
            you.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Coaching Application</CardTitle>
            <CardDescription>
              Please fill out this form completely. I'll review your application
              within 48 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Fitness Background */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Fitness Background
                </h3>
                <div>
                  <Label htmlFor="experience">Fitness Experience Level *</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, experience: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">
                        Beginner (0-1 years)
                      </SelectItem>
                      <SelectItem value="intermediate">
                        Intermediate (1-3 years)
                      </SelectItem>
                      <SelectItem value="advanced">
                        Advanced (3+ years)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Goals */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Goals & Timeline
                </h3>
                <div>
                  <Label htmlFor="goals">Primary Fitness Goals *</Label>
                  <Textarea
                    id="goals"
                    placeholder="Describe your main fitness goals (weight loss, muscle gain, strength, etc.)"
                    value={formData.goals}
                    onChange={(e) =>
                      setFormData({ ...formData, goals: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label>Desired Timeline *</Label>
                  <RadioGroup
                    onValueChange={(value) =>
                      setFormData({ ...formData, timeline: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3-months" id="3-months" />
                      <Label htmlFor="3-months">3 months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6-months" id="6-months" />
                      <Label htmlFor="6-months">6 months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="12-months" id="12-months" />
                      <Label htmlFor="12-months">12 months</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Program Interest */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Program Interest
                </h3>
                <div>
                  <Label>Which program interests you most? *</Label>
                  <RadioGroup
                    onValueChange={(value) =>
                      setFormData({ ...formData, program: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="coaching" id="coaching" />
                      <Label htmlFor="coaching">Ongoing Coaching Program</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="coaching-nutrition"
                        id="coaching-nutrition"
                      />
                      <Label htmlFor="coaching-nutrition">
                        Coaching + Full Nutrition Package
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Additional Information
                </h3>
                <div>
                  <Label htmlFor="challenges">Current Challenges</Label>
                  <Textarea
                    id="challenges"
                    placeholder="What challenges are you facing with your current fitness routine?"
                    value={formData.challenges}
                    onChange={(e) =>
                      setFormData({ ...formData, challenges: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="motivation">Motivation</Label>
                  <Textarea
                    id="motivation"
                    placeholder="What motivates you to achieve your fitness goals?"
                    value={formData.motivation}
                    onChange={(e) =>
                      setFormData({ ...formData, motivation: e.target.value })
                    }
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            By submitting this application, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
