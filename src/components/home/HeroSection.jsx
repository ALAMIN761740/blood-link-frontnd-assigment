import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button.jsx";
import { Heart, Search, ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden min-h-screen">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-400 opacity-95" />

      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"
      />

      <div className="container relative mx-auto px-4 py-20 md:py-32 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-white/90 text-sm font-medium">
            Every donation saves up to 3 lives
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Donate Blood,
          <br />
          <span className="relative">
            Save Lives
            <Heart className="absolute -right-8 top-0 h-8 w-8 text-white/80 fill-white/80 blood-pulse" />
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Connect with blood donors in your area instantly. Our platform makes it easy to find the right blood type when you need it most.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link to="request-blood">
            <Button
            variant="hero-outline"
            size="xl"
            className="w-full sm:w-auto bg-white text-red-600 font-bold text-lg hover:bg-white/90 shadow-lg"
            >
            <Search className="h-5 w-5" />
            Need Blood?
            </Button>
        </Link>
        <Link to="/register">
            <Button
            size="xl"
            className="w-full sm:w-auto bg-white text-red-600 font-bold text-lg hover:bg-white/90 shadow-lg"
            >
            <Heart className="h-5 w-5" />
            Become a Donor
            <ArrowRight className="h-5 w-5" />
            </Button>
        </Link>
        </div>

          {/* Quick Stats */}
            <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/40 text-center max-w-xl w-full">
                {[
                { value: "5,000+", label: "Active Donors" },
                { value: "2,500+", label: "Lives Saved" },
                { value: "64", label: "Districts" },
                ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center justify-center">
                    <div className="font-display text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                    </div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                </div>
                ))}
            </div>
            </div>
        </div> {/* container close */}

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 80C360 160 1080 0 1440 80V120H0V80Z"
                className="fill-white"
            />
            </svg>
        </div>
    </section>
    );
};

export default HeroSection;