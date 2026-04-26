export default function Stats() {
  const stats = [
    {
      value: "10K+",
      text: "Professionals Trained For Exceptional Career Success",
    },
    {
      value: "200+",
      text: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      value: "5K+",
      text: "Active Learners Engaged In Dynamic Courses",
    },
  ];
  return (
    <section id="statsSect" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-blue-600">Track Record</span>
        </h2>

        <p className="mt-3 text-gray-600">
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((item, index) => (
            <div key={index} className="px-6 py-8 flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-xl font-semibold">
                {item.value}
              </div>
              <p className="mt-4 text-gray-800 max-w-xs leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
