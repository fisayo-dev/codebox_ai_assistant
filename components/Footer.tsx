"use client";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  TerminalSquare,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 px-4 md:px-10 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TerminalSquare className="text-yellow w-6 h-6" />
            <span className="text-xl font-bold text-white">CodeBox</span>
          </div>
          <p className="text-sm text-gray-400 max-w-sm">
            CodeBox is your AI-powered coding companion designed to boost your
            productivity with smart features and intuitive tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="hover:text-yellow transition">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-yellow transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-yellow transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm mb-4">
            Follow us on social media and stay updated with the latest from
            CodeBox.
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" className="hover:text-yellow transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-yellow transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-yellow transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:support@codebox.ai" className="hover:text-yellow transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodeBox. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
