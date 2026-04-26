import {
  BarChart3,
  ChartNoAxesCombined,
  Monitor,
  MonitorPlay,
  Presentation,
  Video,
} from "lucide-react";

export default function HowWeDeliver() {
  const steps = [
    {
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: Presentation,
    },
    {
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: MonitorPlay,
    },
  ];

  return (
    <section id="howSect" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How We <span className="text-blue-600">Deliver Results</span> That
          Matter?
        </h2>
        <p className="mt-3 text-gray-600">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600">Skill Development</span>
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-[#EFF6FF] w-75 rounded-xl shadow-md p-8 text-center transition "
              >
                <div className="absolute left-[-1.5%] top-10 w-2 h-20 bg-blue-600 rounded-r"></div>
                <div className="absolute right-[-1.5%] top-10 w-2 h-20 bg-blue-600 rounded-r"></div>
                <div className="absolute top-4 left-4  w-8 h-8 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 text-sm font-semibold bg-white">
                  {index + 1}
                </div>
                <div className="flex justify-center">
                  <div className="bg-[#1A73E8] text-white p-4 rounded-full shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="mt-6 font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
