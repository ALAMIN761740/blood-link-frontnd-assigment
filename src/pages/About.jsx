
import { Heart, Users, Target, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Active Donors" },
  { icon: Heart, value: "2,500+", label: "Lives Saved" },
  { icon: Target, value: "64", label: "Districts" },
  { icon: Award, value: "99%", label: "Success Rate" },
];

const team = [
  { name: "Dr. Rahim Khan", role: "Founder & Medical Director", image: "👨‍⚕️" },
  { name: "Fatima Ahmed", role: "Operations Manager", image: "👩‍💼" },
  { name: "Karim Hossain", role: "Technology Lead", image: "👨‍💻" },
  { name: "Nasreen Begum", role: "Community Coordinator", image: "👩‍🤝‍👩" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
     

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-500/5 to-orange-400/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-red-500">BloodLink</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to ensure no one loses their life due to lack of blood.
                BloodLink connects blood donors with those in need, making the donation 
                process seamless, fast, and life-saving.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Our <span className="text-red-500">Mission</span>
                </h2>

                <p className="text-muted-foreground mb-4">
                  Every 2 seconds, someone in Bangladesh needs blood. Yet, only 30% of 
                  requirements are met through voluntary donations.
                </p>

                <p className="text-muted-foreground mb-4">
                  We believe technology can save lives. Our platform uses smart matching
                  algorithms to connect patients with compatible donors fast.
                </p>

                <p className="text-muted-foreground">
                  Our goal is simple: ensure blood is available to everyone who needs it.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card rounded-2xl p-6 shadow-card text-center"
                  >
                    <stat.icon className="h-8 w-8 text-red-500 mx-auto mb-3" />
                    <div className="font-display text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Our <span className="text-red-500">Values</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Humanity First",
                  desc: "Every drop of blood donated is a gift of life.",
                },
                {
                  title: "Speed & Efficiency",
                  desc: "In emergencies, every second counts.",
                },
                {
                  title: "Trust & Safety",
                  desc: "All donors are verified. All data is protected.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Meet Our <span className="text-red-500">Team</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-200 flex items-center justify-center text-4xl">
                    {member.image}
                  </div>

                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default About;
