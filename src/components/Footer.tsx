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
import { motion } from "framer-motion";
const Footer: React.FC = () => {
  const footerVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <motion.div
        variants={footerVariants}
        initial="initial"
        whileInView="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Contact Information */}
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}

        >
          <Card className="bg-gray-800 text-white h-[230px]">
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
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-800 text-white h-[230px]">
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
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-800 text-white h-[230px]">
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
        </motion.div>
      </motion.div>
      <div className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Winter Clothes Distribution Platform.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
