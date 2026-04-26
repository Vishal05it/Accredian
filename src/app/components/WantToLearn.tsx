"use client";
import { Headphones } from "lucide-react";
import { useAllContexts } from "../contexts/allcontexts";

export default function WantToLearn() {
  let { setOpen } = useAllContexts();
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-16 bg-blue-600">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/cta-circle.svg"
            alt="background pattern"
            className="object-cover z-10 absolute h-150 right-[15%] top-[1%]  opacity-100"
          />
          <div className="relative z-10 flex items-center gap-4 text-white">
            <div className="bg-white/20 p-4 rounded-xl shadow">
              <Headphones className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-sm opacity-90 mt-1">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="relative z-10 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition"
          >
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
}
