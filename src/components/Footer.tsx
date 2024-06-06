import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 mr-2" />
              <span>123 Winter Clothes St, Chittagong, Bangladesh</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 mr-2" />
              <span>+8801799577623</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>info@winterclothes.com</span>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/winter-clothes" className="hover:underline">
                  All Winter Clothes
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Social Media Links */}
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Follow Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Button variant="ghost" className="p-2" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Button>
              <Button variant="ghost" className="p-2" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </Button>
              <Button variant="ghost" className="p-2" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Winter Clothes Distribution Platform.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
