"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
  ];

  // show 2 cards at a time
  const visible = testimonials.slice(index, index + 2);

  return (
    <section id="testimonialSect" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>

        <p className="mt-3 text-gray-600">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {visible.map((item, i) => (
            <div key={i} className="border rounded-xl p-6 text-left shadow-sm">
              <div className="w-16 h-16 relative mb-4">
                <img src={item.logo} alt="logo" className="object-contain" />
              </div>

              <p className="text-gray-700 leading-relaxed">"{item.text}"</p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              onClick={() => setIndex(dot)}
              className={`w-3 h-3 rounded-full ${
                index === dot ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
