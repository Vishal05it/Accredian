"use client";
import { useAllContexts } from "../contexts/allcontexts";

export default function Footer() {
  let { setOpen } = useAllContexts();
  return (
    <footer className="w-full bg-white pt-16 pb-6 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h2 className="text-2xl font-bold text-blue-600">accredian</h2>
            <p className="text-xs text-gray-500">credentials that matter</p>
            <div className="flex font-bold text-2xl gap-4 mt-4 text-gray-600">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="text-left md:text-right">
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Enquire Now
            </button>
            <p className="text-sm text-gray-600 mt-2">Speak with our Advisor</p>
          </div>
        </div>
        <div className="my-8 border-t"></div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Accredian</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Why Accredian
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>

            <p className="text-gray-600">
              Email us:{" "}
              <span className="text-blue-600">enterprise@accredian.com</span>
            </p>
            <p className="text-gray-600 mt-2">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>
        </div>
        <div className="mt-10 font-bold border-t pt-4 text-center text-gray-600 text-sm">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
}
