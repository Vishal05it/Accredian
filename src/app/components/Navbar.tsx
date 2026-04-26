"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", href: "homeSect" },
  { title: "Stats", href: "statsSect" },
  { title: "Clients", href: "clientsSect" },
  { title: "Accredian Edge", href: "edgeSect" },
  { title: "CAT", href: "catSect" },
  { title: "How It Works", href: "howSect" },
  { title: "FAQs", href: "faqSect" },
  { title: "Testimonials", href: "testimonialSect" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* LOGO */}
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            className="h-10"
            alt="logo"
          />

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.href}`}
                onClick={() => setActive(item.title)}
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

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white z-50 p-6 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end mb-6">
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* NAV ITEMS */}
        <div className="flex flex-col gap-5 text-lg font-medium">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.href}`}
              onClick={() => {
                setActive(item.title);
                setOpen(false);
              }}
              className={`${
                active === item.title ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
