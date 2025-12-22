import React from "react";
import { Heart, Users, MapPin, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Registered Donors",
    description: "Active blood donors ready to help",
  },
  {
    icon: Heart,
    value: "2,500+",
    label: "Lives Saved",
    description: "Through successful donations",
  },
  {
    icon: MapPin,
    value: "64",
    label: "Districts Covered",
    description: "Nationwide coverage",
  },
  {
    icon: Clock,
    value: "< 30 min",
    label: "Average Response",
    description: "Quick connection to donors",
  },
];

export function StatsSection() {
  const statCards = stats.map((stat) =>
    React.createElement(
      "div",
      {
        key: stat.label,
        className:
          "relative group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1",
        style: {
          background: "linear-gradient(to bottom right, #f43f5e, #ef4444, #f97316)",
        },
      },
      React.createElement(
        "div",
        { className: "flex flex-col items-center text-center" },
        React.createElement(
          "div",
          {
            className: "mb-4 p-3 rounded-xl flex items-center justify-center",
            style: {
              width: "60px",
              height: "60px",
              background: "white",
            },
          },
          React.createElement(stat.icon, {
            className: "h-6 w-6 text-red-600",
          })
        ),
        React.createElement(
          "div",
          { className: "font-display text-3xl font-bold text-white mb-1" },
          stat.value
        ),
        React.createElement(
          "div",
          { className: "font-medium text-white/90 mb-1" },
          stat.label
        ),
        React.createElement(
          "div",
          { className: "text-xs text-white/70" },
          stat.description
        )
      )
    )
  );

  return React.createElement(
    "section",
    { className: "py-16 bg-transparent" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6" }, statCards)
    )
  );
}
