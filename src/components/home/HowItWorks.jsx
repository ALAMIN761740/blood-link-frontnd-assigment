import React from "react";
import { UserPlus, Search, Bell, Heart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description:
      "Create your account and complete your donor profile with blood group and location.",
  },
  {
    icon: Search,
    title: "Search Donors",
    description:
      "Find available donors by blood group and district. Filter results to find the perfect match.",
  },
  {
    icon: Bell,
    title: "Send Request",
    description:
      "Send a blood request to matched donors. They'll receive instant notifications.",
  },
  {
    icon: Heart,
    title: "Save Lives",
    description:
      "Connect with donors, coordinate donation, and save precious lives together.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-red-500">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Finding blood donors has never been easier. Our simple 4-step process connects you
            with the right donors quickly and efficiently.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="flex flex-col items-center text-center group">
                    {/* Step Icon */}
                    <div className="relative z-10 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 via-red-600 to-orange-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-red-600 text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Red-Orange Divider Line */}
          <div className="hidden md:block absolute bottom-0 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-orange-400" />
        </div>
      </div>
    </section>
  );
}
