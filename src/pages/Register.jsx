import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, User, Mail, Lock, Phone } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const districts = [
  "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet",
  "Barisal", "Rangpur", "Mymensingh", "Comilla", "Gazipur"
];

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    bloodGroup: "",
    district: "",
    isDonor: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.bloodGroup || !formData.district) {
      alert("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    setTimeout(async() => {
      setIsLoading(false);

      try {
        await fetch("https://blood-link-backend-assigment.onrender.com/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            bloodgroup: formData.bloodGroup,
            district: formData.district,
            password: formData.password,
          }),
        });

        await fetch("https://blood-link-backend-assigment.onrender.com/api/doner", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            bloodgroup: formData.bloodGroup,
            district: formData.district,
            lastDonation: Date(),
          }),
        });

        alert("Registration successful! You can now log in.");
      } catch (error) {
        console.error("Registration Error:", error);
        alert("An error occurred during registration. Please try again.");
      }

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        bloodGroup: "",
        district: "",
        isDonor: true,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">


      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          {/* Logo & Heading */}
          <div className="text-center mb-8">
            <Heart className="h-10 w-10 mx-auto text-red-600" />
            <h1 className="mt-4 text-2xl font-bold text-gray-800">Create an Account</h1>
            <p className="text-gray-500 mt-2">Join our community of life-savers</p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-black border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-black border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="+880 1XXX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-black border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Blood Group & District */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group *</label>
                  <select
                    value={formData.bloodGroup}
                    onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                    className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select</option>
                    {bloodGroups.map((group) => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">District *</label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select</option>
                    {districts.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Min 6 chars"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full text-black border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Confirm"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full text-black border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Donor Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isDonor"
                  checked={formData.isDonor}
                  onChange={(e) => setFormData({ ...formData, isDonor: e.target.checked })}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="isDonor" className="text-sm text-gray-700 cursor-pointer">
                  I want to register as a blood donor
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-red-700 transition-colors"
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <p className="mt-4 text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-red-600 font-medium hover:underline">Sign in here</Link>
            </p>
          </div>
        </div>
      </main>

    </div>
  );
}
