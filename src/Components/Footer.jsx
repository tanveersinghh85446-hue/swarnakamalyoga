import React from "react";
import { Link } from "react-router-dom";
import { IoMdMailUnread } from "react-icons/io";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* LOGO + ABOUT */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start text-left">
              <img
                src="/Start.AVIF"
                alt="logo"
                className="w-32 sm:w-36 md:w-40 object-contain mb-3"
              />

              <h3 className="text-xs sm:text-sm mb-3 text-stone-300">
                Regd. No. 18/DOD/CE/0010/2017
              </h3>

              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-3">
                Swarna Kamal Yoga
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-stone-300 max-w-xs">
                Transform your mind body & soul since 2012.
                <br />
                Associate with Mokshamyoga Yoga Alliance.
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold uppercase text-xs mb-5 tracking-wider text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Apply", "/apply"],
                ["Gallery", "/gallery"],
                ["Testimonials", "/testimonials"],
              ].map(([l, t], i) => (
                <li key={i}>
                  <Link
                    to={t}
                    className="hover:text-yellow-400 transition-colors text-stone-300 hover:translate-x-1 inline-block"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <h4 className="font-semibold uppercase text-xs mb-5 text-yellow-400 tracking-wider">
              Top Courses
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Pranayama & Meditation", "/courses/pranayama"],
                ["Weight Loss Coach", "/courses/weight-loss"],
                ["Women's Wellness", "/courses/womens-wellness"],
                ["Kundalini Yoga TTC", "/courses/Kundalini-yoga"],
                ["Yin Yoga TTC", "/courses/yin-yoga"],
                ["MAT Pilates", "/courses/mat-pilates"],
              ].map(([l, t], i) => (
                <li key={i}>
                  <Link
                    to={t}
                    className="transition-colors text-stone-300 hover:text-yellow-400 hover:translate-x-1 inline-block"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h4 className="font-semibold uppercase text-xs mb-5 tracking-wider text-yellow-400">
              Connect With Us
            </h4>

            <div className="flex gap-3 flex-wrap md:flex-col md:w-fit">
              <a
                href="https://www.facebook.com/swarna.kamal.241971"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="p-2.5 rounded-full bg-linear-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white w-4 h-4" />
              </a>

              <a
                href="#"
                className="p-2.5 rounded-full bg-red-600 hover:bg-red-700 transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="p-2.5 rounded-full bg-blue-500 hover:bg-blue-600 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>

              <a
                href="mailto:smita.swarnakamal@gmail.com"
                className="p-2.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all hover:scale-110"
                aria-label="Email"
              >
                <IoMdMailUnread className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/9663894499"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-green-500 hover:bg-green-600 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-stone-700 mt-10 pt-6 text-center text-xs sm:text-sm text-stone-400">
          © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;