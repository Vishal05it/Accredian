"use client";

import { useState } from "react";

const navItems = [
  {
    title: "Home",
    href: "homeSect",
  },
  {
    title: "Stats",
    href: "statsSect",
  },
  {
    title: "Clients",
    href: "clientsSect",
  },
  {
    title: "Accredian Edge",
    href: "edgeSect",
  },
  {
    title: "CAT",
    href: "catSect",
  },
  {
    title: "How It Works",
    href: "howSect",
  },
  {
    title: "FAQs",
    href: "faqSect",
  },
  {
    title: "Testimonials",
    href: "testimonialSect",
  },
];
export default function Navbar() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            className="h-10"
            alt=""
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.href}`}
              onClick={() => {
                setActive(item.title);
              }}
              className={`relative font-bold transition-colors duration-200 ${
                active === item.title
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.title}

              {active === item.title && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded"></span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
