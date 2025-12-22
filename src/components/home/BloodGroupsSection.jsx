import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button.jsx";
import { ArrowRight } from "lucide-react";

const bloodGroups = [
  { group: "A+", donors: 1250, color: "from-red-500 to-red-600" },
  { group: "A-", donors: 320, color: "from-red-600 to-red-700" },
  { group: "B+", donors: 980, color: "from-blue-500 to-blue-600" },
  { group: "B-", donors: 280, color: "from-blue-600 to-blue-700" },
  { group: "AB+", donors: 450, color: "from-purple-500 to-purple-600" },
  { group: "AB-", donors: 120, color: "from-purple-600 to-purple-700" },
  { group: "O+", donors: 1100, color: "from-green-500 to-green-600" },
  { group: "O-", donors: 380, color: "from-green-600 to-green-700" },
];

export function BloodGroupsSection() {
  const groupCards = bloodGroups.map((item) =>
    React.createElement(
      Link,
      {
        key: item.group,
        to: `/donors?blood_group=${encodeURIComponent(item.group)}`,
        className: "group",
      },
      React.createElement(
        "div",
        {
          className:
            "relative overflow-hidden rounded-2xl bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1",
        },
        React.createElement("div", {
          className: `absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`,
        }),
        React.createElement(
          "div",
          { className: "relative z-10" },
          React.createElement(
            "div",
            {
              className:
                "font-display text-4xl font-bold text-foreground group-hover:text-primary-foreground transition-colors mb-2",
            },
            item.group
          ),
          React.createElement(
            "div",
            {
              className:
                "text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors",
            },
            item.donors.toLocaleString() + " donors"
          )
        )
      )
    )
  );

  return React.createElement(
    "section",
    { className: "py-20 bg-muted/30" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      // Heading
      React.createElement(
        "div",
        { className: "text-center mb-12" },
        React.createElement(
          "h2",
          { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4" },
          "Available ",
          React.createElement("span", { className:"bg-gradient-to-br from-red-500 via-red-600 to-orange-400 bg-clip-text text-transparent font-bold" }, "Blood Groups")
        ),
        React.createElement(
          "p",
          { className: "text-muted-foreground max-w-2xl mx-auto" },
          "Browse donors by blood group. Click on any group to find available donors in your area."
        )
      ),
      // Cards Grid
      React.createElement(
        "div",
        { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto" },
        groupCards
      ),
      // View All Button
      React.createElement(
        "div",
        { className: "text-center mt-10" },
        React.createElement(
            Link,
            { to: "/donors" },
            React.createElement(
            Button,
            {
                size: "lg",
                className:
                "gap-2 bg-gradient-to-br from-red-500 via-red-600 to-orange-400 text-white font-bold hover:from-red-600 hover:via-red-700 hover:to-orange-500 shadow-lg transition-all duration-300",
            },
            "View All Donors",
            React.createElement(ArrowRight, { className: "h-4 w-4" })
            )
        )
      )
    )
  );
}
