import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Join hundreds of clients who have achieved their fitness goals with
            personalized programs and expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-6"
            >
              <Link href="#services">
                Browse Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/apply">Apply for Coaching</Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-blue-500">
            <p className="text-blue-100 text-sm">
              Questions? Email me directly at{" "}
              <a
                href="mailto:miguel@example.com"
                className="text-white underline hover:no-underline"
              >
                miguel@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
