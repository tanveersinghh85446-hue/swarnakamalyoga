// import { Link } from "react-router-dom";

// export default function PranayamaCourse() {
//   return (
//     <div className="max-w-3xl mx-auto px-5 py-10 bg-white text-gray-900 font-sans text-[15px] leading-relaxed">
//       {/* Header */}
//       <p className="text-sm text-gray-500 mb-1 tracking-wide">
//         Swarna Kamal Yoga
//       </p>
//       <h1 className="text-2xl font-bold underline mb-1">
//         Pranayama, Mudra & Meditation Teaching Training Course
//       </h1>
//       <p className="italic text-gray-600 mb-6">
//         YACEP Certified • Live on Zoom
//       </p>

//       <hr className="border-gray-200 my-7" />

//       {/* 1. Pranayama & Breathing */}
//       <h2 className="text-lg font-bold underline mb-3">
//         Pranayama & Breathing
//       </h2>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>What is Prana</li>
//         <li>Sub Pranas and Their Functions</li>
//         <li>Purification of Nadis</li>
//         <li>The Science of Breath</li>
//         <li>Pranayama & The Nervous System</li>
//         <li>Conscious Breathing</li>
//         <li>Mechanics of Breathing</li>
//         <li>Respiratory System Awareness</li>
//         <li>Sensitizing the Lungs</li>
//         <li>35 Pranayama Techniques</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* 2. Meditation */}
//       <h2 className="text-lg font-bold underline mb-3">Meditation</h2>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>What is Meditation</li>
//         <li>Meditation Postures</li>
//         <li>Meditation, Mind & Mantra</li>
//         <li>Increasing Energy Flow through the Chakras</li>
//         <li>Yoga Practices for Balancing each Chakra</li>
//         <li>20 Meditation Techniques</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* 3. Mudra Therapy */}
//       <h2 className="text-lg font-bold underline mb-3">Mudra Therapy</h2>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>60 Mudra Techniques</li>
//         <li>Mudra for Health & Healing</li>
//         <li>Mudra & Prana Flow</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* 4. Mantra Chanting */}
//       <h2 className="text-lg font-bold underline mb-3">Mantra Chanting</h2>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>25 Mantra Chanting Practices</li>
//         <li>Importance of Mantras in Your Life</li>
//         <li>Effects of Mantra on the Brain</li>
//         <li>Can Mantra Heal Our Body?</li>
//         <li>Mala for which Mantra</li>
//         <li>Understanding Mantras</li>
//         <li>Healing Prayer to Deal with Disease</li>
//         <li>Chanting / Sound / Vibration to Change Life</li>
//         <li>Vedic Chanting</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* 5. Theory & Philosophy */}
//       <h2 className="text-lg font-bold underline mb-3">Theory & Philosophy</h2>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>Yogic Philosophy</li>
//         <li>Teaching Methodology</li>
//         <li>Alignment & Adjustment</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Course Inclusions */}
//       <h2 className="text-lg font-bold underline mb-3">Course Inclusions</h2>
//       <ul className="list-none pl-0 mb-6 text-gray-800 space-y-1">
//         <li>✓ Live & Recorded Sessions</li>
//         <li>✓ Study Materials in PDFs</li>
//         <li>✓ Soft Copy of Certificate</li>
//         <li>✓ YACEP Certification Course</li>
//         <li>✓ Notes Access Free During Course</li>
//       </ul>
//       <Link
//         to="/courses"
//         className="text-amber-600 border-yellow-500 rounded hover:underline flex items-center justify-center mt-10 mb-4 text-sm font-medium"
//       >
//         Back To Courses
//       </Link>
//       <div className="border-t border-stone-800 mt-10 pt-4 mb- text-center text-xs text-stone-500">
//         © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
//         rights reserved.
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

function Divider() {
  return <hr className="border-amber-100 my-8" />;
}

function SectionCard({ num, title, items }) {
  return (
    <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-[11px] font-bold tracking-widest text-amber-600 font-sans">
          {num}
        </span>
        <h2 className="font-bold text-[15px] text-gray-900 underline underline-offset-4">
          {title}
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PranayamaCourse() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      {/* Header */}
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Pranayama, Mudra & Meditation Teaching Training Course
        </h1>
        <p className="italic text-gray-500">YACEP Certified • Live on Zoom</p>
      </div>

      <SectionCard
        num="01"
        title="Pranayama & Breathing"
        items={[
          "What is Prana",
          "Sub Pranas and Their Functions",
          "Purification of Nadis",
          "The Science of Breath",
          "Pranayama & The Nervous System",
          "Conscious Breathing",
          "Mechanics of Breathing",
          "Respiratory System Awareness",
          "Sensitizing the Lungs",
          "35 Pranayama Techniques",
        ]}
      />

      <SectionCard
        num="02"
        title="Meditation"
        items={[
          "What is Meditation",
          "Meditation Postures",
          "Meditation, Mind & Mantra",
          "Increasing Energy Flow through the Chakras",
          "Yoga Practices for Balancing each Chakra",
          "20 Meditation Techniques",
        ]}
      />

      <SectionCard
        num="03"
        title="Mudra Therapy"
        items={[
          "60 Mudra Techniques",
          "Mudra for Health & Healing",
          "Mudra & Prana Flow",
        ]}
      />

      <SectionCard
        num="04"
        title="Mantra Chanting"
        items={[
          "25 Mantra Chanting Practices",
          "Importance of Mantras in Your Life",
          "Effects of Mantra on the Brain",
          "Can Mantra Heal Our Body?",
          "Mala for which Mantra",
          "Understanding Mantras",
          "Healing Prayer to Deal with Disease",
          "Chanting / Sound / Vibration to Change Life",
          "Vedic Chanting",
        ]}
      />

      <SectionCard
        num="05"
        title="Theory & Philosophy"
        items={[
          "Yogic Philosophy",
          "Teaching Methodology",
          "Alignment & Adjustment",
        ]}
      />

      <Divider />

      <h2 className="text-lg font-bold underline underline-offset-4 mb-4 text-gray-900">
        Course Inclusions
      </h2>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        {[
          "Live & Recorded Sessions",
          "Study Materials in PDFs",
          "Soft Copy of Certificate",
          "YACEP Certification Course",
          "Notes Access Free During Course",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 py-2 border-b border-stone-100 last:border-0"
          >
            <span className="text-green-600 font-bold text-sm">✓</span>
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
