import React from "react";
import { Link } from "react-router-dom";

function Divider() {
  return <hr className="border-amber-100 my-8" />;
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-lg font-bold underline underline-offset-4 mb-4 text-gray-900">
      {children}
    </h2>
  );
}

export default function FaceYoga() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      {/* Header */}
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Face Yoga Course
        </h1>
        <p className="italic text-gray-500">
          Natural Way to Rejuvenate Your Face
        </p>
      </div>

      <p className="text-gray-700 mb-8">
        This Face Yoga course is designed to help you naturally tone, lift, and
        rejuvenate your facial muscles. Learn effective exercises, techniques,
        and holistic practices to enhance your beauty and inner well-being.
      </p>

      <Divider />

      <SectionTitle>What You Will Learn</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <div className="grid grid-cols-2 gap-x-6">
          {[
            "Introduction to Face Yoga",
            "Benefits of Face Yoga",
            "60 different facial exercises",
            "Exercises for Anti-Aging",
            "Exercises for Wrinkles & Smoother Skin",
            "Exercises to get rid of Dark Circles under the eyes",
            "Acupressure Points",
            "Breathing Techniques",
            "De-stressing Kriyas & Detoxification Kriyas",
            "Short Meditation",
            "Anatomy & Physiology of Face",
            "Facial Tools",
            "Yoga Therapy",
            "Mudra Healing",
            "Nutrition Tips",
          ].map((item) => (
            <div
              key={item}
              className="py-2 border-b border-stone-100 last:border-0 text-sm text-gray-700 flex items-center gap-2"
            >
              <span className="text-amber-500 text-xs">◆</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <Divider />

      <SectionTitle>Course Benefits</SectionTitle>
      <div className="flex flex-col gap-2">
        {[
          "Improve skin glow and texture naturally",
          "Reduce wrinkles and fine lines",
          "Relieve facial tension and stress",
          "Boost blood circulation",
          "Enhance overall confidence and appearance",
        ].map((item) => (
          <div
            key={item}
            className="bg-white border border-amber-100 rounded-lg px-5 py-3 shadow-sm flex items-center gap-3"
          >
            <span className="text-green-600 font-bold">✓</span>
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      <Divider />

      <SectionTitle>Why Choose Swarna Kamal Yoga?</SectionTitle>
      <div className="flex flex-col gap-2">
        {[
          "Holistic and natural approach",
          "Experienced yoga instructors",
          "Easy-to-follow techniques",
          "Focus on overall well-being",
        ].map((item) => (
          <div
            key={item}
            className="bg-white border border-amber-100 rounded-lg px-5 py-3 shadow-sm flex items-center gap-3"
          >
            <span className="text-amber-500 font-bold text-sm">◆</span>
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-6">
        <Link
          to="/courses"
          className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold font-sans tracking-wide px-8 py-3 rounded-md transition-colors"
        >
          ← Back To Courses
        </Link>
      </div>
      <div className="border-t border-stone-200 mt-8 pt-4 text-center text-xs text-stone-400 font-sans">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
}
