import Link from "next/link";
import { Instagram, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Miguel Fernandez</h3>
            <p className="text-gray-400 text-sm">
              Certified Personal Trainer helping you achieve your fitness goals
              through custom programs and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:miguel@example.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  One-Time Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Custom Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Nutrition Plans
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Ongoing Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="hover:text-white transition-colors"
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Miguel Fernandez Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
