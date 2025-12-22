import { Link } from "react-router-dom";
import { Button } from "../../UI/Button.jsx";
import { Heart, ArrowRight, Droplets } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-orange-400" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] " />

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Droplets className="h-10 w-10 text-white blood-pulse" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of donors who are saving lives every day. Your single donation can save up to 3 lives. Register now and become a hero.
          </p>

         <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Register Button */}
            <Link to="/register">
                <Button
                variant="hero-outline"
                size="2xl"
                className="w-full text-white bg-gradient-to-br from-red-500 via-red-600 to-orange-400 hover:from-red-600 hover:via-red-700 hover:to-orange-500 transition-all duration-300 gap-3 px-8 py-5 text-lg"
                >
                <Heart className="h-10 w-10" />
                Register as Donor
                <ArrowRight className="h-10 w-10" />
                </Button>
            </Link>

            {/* Urgent Blood Request Button */}
            <Link to="request-blood">
                <Button
                variant="hero-outline"
                size="2xl"
                className="w-full text-white bg-gradient-to-br from-red-500 via-red-600 to-orange-400 hover:from-red-600 hover:via-red-700 hover:to-orange-500 transition-all duration-300 gap-3 px-8 py-5 text-lg"
                >
                Need Blood Urgently?
                </Button>
            </Link>
            </div>


          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              Verified Donors
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              24/7 Support
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              Nationwide Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
