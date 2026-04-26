import {
  MonitorCheck,
  GraduationCap,
  Briefcase,
  LucideMonitorX,
} from "lucide-react";

export default function WhoShouldJoin() {
  const items = [
    {
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: MonitorCheck,
    },
    {
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: LucideMonitorX,
    },
    {
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
      icon: GraduationCap,
    },
    {
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-2xl px-10 pt-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <p className="text-sm opacity-90">Who Should Join?</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Strategic Skill Enhancement
            </h2>
            <div className="mt-6">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex-col gap-4">
                  <Icon className="w-8 h-8 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm opacity-90 mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
