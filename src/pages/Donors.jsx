import { useState, useMemo, useEffect } from "react";
import { Users, Phone, MapPin, Calendar, User, Search, RotateCcw } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const districts = [
  "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet",
  "Barisal", "Rangpur", "Mymensingh", "Comilla", "Gazipur"
];

// ---------------------------
// Donor Card Component Inside
// ---------------------------
const bloodGroupVariant = (bloodGroup) => {
  // console.log("group",bloodGroup);
  if (bloodGroup.startsWith("A")) return "bg-red-100 text-red-600";
  if (bloodGroup.startsWith("B")) return "bg-orange-100 text-orange-600";
  if (bloodGroup.startsWith("AB")) return "bg-rose-100 text-rose-600";
  return "bg-red-200 text-red-700";
};


const DonorCard = ({ donor, onContact }) => {
//  console.log("donor",donor.bloodgroup);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-red-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <User className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{donor.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-3 w-3" />
              {donor.district}
            </div>
          </div>
        </div>

        <span className={`px-3 py-1 rounded-lg text-sm font-bold ${bloodGroupVariant(donor.bloodgroup)}`}>
          {donor.bloodgroup}
        </span>
       
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-gray-500">Last donation:</span>
          <span className="text-gray-900 font-medium">{donor.lastDonation}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Status:</span>
          <span
            className={`px-2 py-1 rounded-md text-xs font-semibold ${
              donor.isAvailable ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
            }`}
          >
            {donor.isAvailable ? "Available" : "Not Available"}
          </span>
        </div>
      </div>

      <button
        disabled={!donor.isAvailable}
        onClick={() => onContact?.(donor)}
        className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-white font-semibold transition
          ${donor.isAvailable 
            ? "bg-gradient-to-r from-red-500 to-orange-400 hover:shadow-lg"
            : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        <Phone className="h-4 w-4" />
        Contact Donor
      </button>
    </div>
  );
};

// -------------------------------
// Donor Filters Component Inside
// -------------------------------
const DonorFilters = ({
  bloodGroup,
  district,
  searchQuery,
  onBloodGroupChange,
  onDistrictChange,
  onSearchChange,
  onReset,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8 border border-red-100">
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Search Box */}
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block text-gray-900">
            Search Donor
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>

        {/* Blood Group */}
        <div className="w-full md:w-48">
          <label className="text-sm font-medium mb-2 block text-gray-900">
            Blood Group
          </label>
          <select
            value={bloodGroup}
            onChange={(e) => onBloodGroupChange(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-orange-400"
          >
            <option value="all">All Groups</option>
            {bloodGroups.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="w-full md:w-48">
          <label className="text-sm font-medium mb-2 block text-gray-900">
            District
          </label>
          <select
            value={district}
            onChange={(e) => onDistrictChange(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-orange-400"
          >
            <option value="all">All Districts</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

// ---------------------------
// Main Donors Page
// ---------------------------
export default function Donors () {
  const [doner, setDoner] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("all");
  const [district, setDistrict] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");


  const data = async()=>{
    const response = await fetch("https://blood-link-backend-assigment.onrender.com/api/alldonors");
    const data = await response.json();
    setDoner(data);
  }

  useEffect(()=>{
    data();
  },[]);

  const mockDonors = doner;
  // console.log(mockDonors);


  const filteredDonors = useMemo(() => {
    const list = Array.isArray(mockDonors) ? mockDonors : [];
    return list.filter((donor) => {
      const matchBlood = bloodGroup === "all" || donor.bloodgroup === bloodGroup;
      const matchDistrict = district === "all" || donor.district === district;
      const name = (donor.name || "").toString().toLowerCase();
      const matchSearch = name.includes(searchQuery.toLowerCase());
      return matchBlood && matchDistrict && matchSearch;
    });
  }, [bloodGroup, district, mockDonors, searchQuery]);


  // console.log("filteredDonors",filteredDonors);
 

  return (
    <div className="min-h-screen bg-[#FFF5F0] py-10 px-4">

      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        Find Blood Donors
      </h1>

      <DonorFilters
        bloodGroup={bloodGroup}
        district={district}
        searchQuery={searchQuery}
        onBloodGroupChange={setBloodGroup}
        onDistrictChange={setDistrict}
        onSearchChange={setSearchQuery}
        onReset={() => {
          setBloodGroup("all");
          setDistrict("all");
          setSearchQuery("");
        }}
      />

      {/* Count */}
      <div className="flex items-center gap-2 text-red-600 font-medium mb-6">
        <Users className="h-5 w-5" />
        Found {filteredDonors.length} donors
      </div>

      {/* Donor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDonors.map((doner) => (
          <DonorCard key={doner.id} donor={doner} onContact={() => alert(`Call: ${doner.phone}`)} />
        ))}
      </div>
    </div>
  );
}
