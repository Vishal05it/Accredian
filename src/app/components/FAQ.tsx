"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useAllContexts } from "../contexts/allcontexts";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  let { setOpen } = useAllContexts();
  const data = [
    {
      title: "course",
      idx: 1,
      faqs: [
        {
          q: "What types of corporate training programs does Accredian offer?",
          a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
        },
        {
          q: "What domain specializations are available?",
          a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
        },
      ],
    },
    {
      title: "delivery",
      idx: 2,
      faqs: [
        {
          q: "Can the courses be customized for specific industries or teams?",
          a: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
        },
        {
          q: "Who are the instructors for these programs?",
          a: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
        },
        {
          q: "What formats are the programs delivered in?",
          a: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
        },
      ],
    },
    {
      title: "misc",
      idx: 3,
      faqs: [
        {
          q: "What is the ideal team size for corporate training?",
          a: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
        },
        {
          q: "How do we get started with Accredian?",
          a: "Get started with Accredian by contacting us or requesting a quote on our website .Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
        },
      ],
    },
  ];

  const categories = [
    { key: 0, label: "About the Course" },
    { key: 1, label: "About the Delivery" },
    { key: 2, label: "Miscellaneous" },
  ];

  return (
    <section id="faqSect" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setOpenIndex(null);
                }}
                className={`px-6 py-4 rounded-lg border text-left transition font-bold ${
                  activeCategory === cat.key
                    ? "bg-blue-100 text-blue-600 border-blue-300"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="md:col-span-2 space-y-4">
            {data[activeCategory].faqs.map((item, idx) => (
              <div
                key={idx}
                className="border-b font-bold pb-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`font-bold ${
                      openIndex === idx ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {item.q}
                  </h3>
                  <ChevronDown
                    className={`transition ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === idx && (
                  <p className="mt-2 text-gray-600 text-sm">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
