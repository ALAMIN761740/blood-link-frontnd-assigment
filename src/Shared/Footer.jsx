import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../../public/BLOODLINK.png";

export function Footer() {
  // Explicit routes for quick links
  const quickLinks = [
    { name: "Find Donors", path: "/donors" },
    { name: "Request Blood", path: "/request-blood" },
    { name: "Register as Donor", path: "/register" },
    { name: "About Us", path: "/about" }
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="BloodLink Logo" 
                className="h-10 w-10 object-contain transition-transform duration-300 hover:scale-110"
              />
              <span className="text-xl font-bold">
                Blood<span className="text-red-500">Link</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Connecting donors with those in need. Every drop counts, every donation saves lives.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-red-500 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blood Groups */}
          <div>
            <h4 className="font-semibold mb-4">Blood Groups</h4>
            <div className="grid grid-cols-4 gap-2">
              {bloodGroups.map((group) => (
                <span
                  key={group}
                  className="text-xs bg-gray-800 rounded px-2 py-1 text-center hover:bg-red-500 hover:text-white cursor-pointer transition-colors"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-red-500" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-red-500" />
                <span>info@bloodlink.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BloodLink. All rights reserved. Made with{" "}
            <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> for humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
