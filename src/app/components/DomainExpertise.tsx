import {
  Lightbulb,
  Brain,
  Users,
  BarChart,
  Settings,
  Globe,
  Wallet,
  Camera,
  Banknote,
} from "lucide-react";

export default function DomainExpertise() {
  const domains = [
    { title: "Product & Innovation Hub", icon: Lightbulb },
    { title: "Gen-AI Mastery", icon: Brain },
    { title: "Leadership Elevation", icon: Users },
    { title: "Tech & Data Insights", icon: BarChart },
    { title: "Operations Excellence", icon: Settings },
    { title: "Digital Enterprise", icon: Globe },

    { title: "Fintech Innovation Lab", icon: Banknote },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-blue-600">Domain Expertise</span>
        </h2>
        <p className="mt-3 text-gray-600">
          <span className="text-blue-600">Specialized Programs</span> Designed
          to Fuel Innovation
        </p>
        <div className="mt-12 justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {domains.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  boxShadow: "0 0 10px grey",
                }}
                className="bg-white rounded-xl shadow p-3 flex flex-col items-center justify-center transition "
              >
                <Icon className="w-10 h-10 font-bold text-blue-600" />
                <p className="mt-4 font-bold text-gray-900">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
