import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Heart, Mail, Lock, LogIn } from "lucide-react";
// import { set } from "mongoose";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Simulate login
    setTimeout(async() => {
      setIsLoading(false);

      try {
        await fetch("https://blood-link-backend-assigment.onrender.com/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }); 
      } catch (error) {
        console.log(error);
      }

      console.log("Login Successful");
      toast("login success", {
        description: "Welcome back!",
      });

      setFormData({ email: "", password: "" });

    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F0] flex flex-col items-center justify-center px-4 py-12">

      {/* Logo / Header */}
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-4">
          <Heart className="h-10 w-10 text-red-600 fill-red-600" />
          <span className="text-2xl font-bold text-gray-900">
            Blood<span className="text-red-600">Link</span>
          </span>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-500 mt-2">Sign in to your account to continue</p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-md border border-red-100">

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="password" className="text-sm font-medium text-gray-900">Password</label>
              <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold transition
              ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-red-500 to-orange-400 hover:shadow-lg"}
            `}
          >
            {isLoading ? (
              <span className="animate-pulse">Signing in...</span>
            ) : (
              <>
                <LogIn className="h-5 w-5" />
                Sign In
              </>
            )}
          </button>

        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-600 font-medium hover:underline">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
}
