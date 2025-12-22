import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+880 1234-567890", href: "tel:+8801234567890" },
  { icon: Mail, label: "Email", value: "info@bloodlink.com", href: "mailto:info@bloodlink.com" },
  { icon: MapPin, label: "Address", value: "Dhaka, Bangladesh", href: "#" },
  { icon: Clock, label: "Hours", value: "24/7 Emergency Support", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="text-center py-14">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-400 shadow-lg mb-4 animate-pulse">
          <MessageSquare className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Get in <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Touch</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions or need assistance? We're here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 pb-20">

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Your Name *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email Address *</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Message *</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-red-500" />
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-medium text-gray-900">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Emergency Box */}
          <div className="bg-gradient-to-br from-red-600 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Emergency Blood Need?</h3>
            <p className="text-white/80 text-sm mb-3">
              For urgent blood requirements, please call our emergency hotline directly.
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Phone className="h-5 w-5" />
              +880 1234-567890
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
