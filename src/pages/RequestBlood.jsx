import { useState } from "react";
import { Droplets, AlertCircle, Send } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const districts = [
  "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet", 
  "Barisal", "Rangpur", "Mymensingh", "Comilla", "Gazipur"
];
const urgencyLevels = [
  { value: "normal", label: "Normal (Within 7 days)" },
  { value: "urgent", label: "Urgent (Within 24 hours)" },
  { value: "emergency", label: "Emergency (Immediately)" },
];

export default function RequestBlood() {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    district: "",
    hospital: "",
    contactPhone: "",
    urgency: "",
    reason: "",
    unitsNeeded: "1",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.bloodGroup || !formData.district || !formData.contactPhone || !formData.urgency) {
      alert("Please fill in all required fields");
      return;
    }

    alert("Blood request submitted successfully!\nMatching donors will be notified shortly.");

    setFormData({
      patientName: "",
      bloodGroup: "",
      district: "",
      hospital: "",
      contactPhone: "",
      urgency: "",
      reason: "",
      unitsNeeded: "1",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <Droplets className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Request <span className="text-red-600">Blood</span>
            </h1>
            <p className="text-gray-500">
              Fill out the form below to request blood. We'll notify matching donors in your area.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-md space-y-6">
            {/* Patient Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name *</label>
              <input
                type="text"
                placeholder="Enter patient name"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Blood Group & Units */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group Required *</label>
                <select
                  value={formData.bloodGroup}
                  onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Units Needed</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.unitsNeeded}
                  onChange={(e) => setFormData({ ...formData, unitsNeeded: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* District & Hospital */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">District *</label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Name</label>
                <input
                  type="text"
                  placeholder="Enter hospital name"
                  value={formData.hospital}
                  onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Contact & Urgency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone *</label>
                <input
                  type="text"
                  placeholder="+880 1XXX-XXXXXX"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Urgency Level *</label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  {urgencyLevels.map((level) => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Blood (Optional)</label>
              <textarea
                placeholder="e.g., Surgery, Accident, Medical condition..."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={3}
              />
            </div>

            {/* Alert */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-100 border border-red-200">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <p className="text-sm text-gray-700">
                For emergency cases, please also contact your nearest blood bank or hospital directly. 
                Our notification system works alongside traditional channels.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-red-700 transition-colors"
            >
              <Send className="h-5 w-5" />
              Submit Blood Request
            </button>
          </form>
        </div>
      </main>

      
    </div>
  );
}
