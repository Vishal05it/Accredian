"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useAllContexts } from "../contexts/allcontexts";
import { useState } from "react";

export default function EnquiryModal() {
  const { open, setOpen } = useAllContexts();
  let [form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: 0,
    companyName: "",
    domain: "",
    candidates: 0,
    modeOfDelivery: "",
    example: "",
  });
  let onChangeFunc = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  let sendData = async () => {
    try {
      let response = await fetch(`/api/userinfo`, {
        method: "POST",
        body: JSON.stringify(form),
      });
      let storedData = await response.json();
      console.log(storedData);
      if (storedData.success) {
        setForm({
          name: "",
          email: "",
          phoneNo: 0,
          companyName: "",
          domain: "",
          candidates: 0,
          modeOfDelivery: "",
          example: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black">
      {/* OVERLAY (BACKGROUND) */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
      />

      {/* MODAL */}
      <div className="relative bg-white rounded-xl w-[90%] max-w-4xl flex overflow-hidden z-10">
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4"
        >
          <X />
        </button>

        {/* LEFT IMAGE */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
            alt="office"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await sendData();
            }}
            className="space-y-4"
          >
            <input
              required
              name="name"
              onChange={onChangeFunc}
              placeholder="Enter Name"
              className="w-full border-b py-2 outline-none"
            />
            <input
              required
              type="email"
              name="email"
              onChange={onChangeFunc}
              placeholder="Enter Email"
              className="w-full border-b py-2 outline-none"
            />
            <input
              required
              name="phoneNo"
              onChange={onChangeFunc}
              placeholder="+91 Phone Number"
              className="w-full border-b py-2 outline-none"
            />
            <input
              required
              name="companyName"
              onChange={onChangeFunc}
              placeholder="Enter company name"
              className="w-full border-b py-2 outline-none"
            />
            <select
              required
              defaultValue=""
              name="domain"
              onChange={onChangeFunc}
              className="w-full border-b py-2 outline-none bg-transparent text-gray-600"
            >
              <option value="" disabled hidden>
                Select Domain
              </option>

              <option>Product Management</option>
              <option>CFO</option>
              <option>Data Science</option>
              <option>Artificial Intelligence</option>
              <option>Human Resource</option>
              <option>Strategy & Leadership</option>
              <option>General Management</option>
              <option>Digital Transformation</option>
              <option>Business Management</option>
              <option>Finance</option>
              <option>Project Management</option>
              <option>Senior Management</option>
            </select>
            <input
              required
              name="candidates"
              onChange={onChangeFunc}
              placeholder="Enter No. of candidates"
              className="w-full border-b py-2 outline-none"
            />
            <input
              required
              name="modeOfDelivery"
              onChange={onChangeFunc}
              placeholder="Select Mode of Delivery"
              className="w-full border-b py-2 outline-none"
            />
            <input
              required
              name="example"
              onChange={onChangeFunc}
              placeholder="Eg: Gurgaon, Delhi, India"
              className="w-full border-b py-2 outline-none"
            />

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
