"use client";

import { useAllContexts } from "../contexts/allcontexts";

export default function Hero() {
  let { setOpen } = useAllContexts();
  return (
    <section id="homeSect" className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{
            boxShadow: "0 0px 10px black",
          }}
          className="bg-[#eef2f7] rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1">
            <h1
              style={{
                fontWeight: "600",
              }}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
            >
              Next-Gen <span className="text-blue-600">Expertise</span>
              <br />
              For Your <span className="text-blue-600">Enterprise</span>
            </h1>
            <p className="mt-6 text-gray-700 text-lg max-w-md">
              Cultivate high-performance teams through expert learning.
            </p>
            <div
              style={{
                fontWeight: "600",
              }}
              className="flex flex-wrap gap-6 mt-6 text-sm text-gray-700"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xs">
                  ✓
                </span>
                Tailored Solutions
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xs">
                  ✓
                </span>
                Industry Insights
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xs">
                  ✓
                </span>
                Expert Guidance
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Enquire Now
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
              alt="professionals"
              width={450}
              loading="lazy"
              height={450}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
