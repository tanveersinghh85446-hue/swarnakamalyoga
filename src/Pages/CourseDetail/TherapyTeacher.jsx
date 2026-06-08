// import { Link } from "react-router-dom";

// export default function TherapyTeacher() {
//   return (
//     <div className="max-w-3xl mx-auto px-5 py-10 bg-white text-gray-900 font-sans text-[15px] leading-relaxed pt-15 border-t border-white/2">
//       {/* Header */}
//       <p className="text-sm text-gray-500 mb-1 tracking-wide">
//         Swarna Kamal Yoga
//       </p>
//       <h1 className="text-2xl font-bold underline mb-1">
//         Yoga Therapy Teacher Course
//       </h1>
//       <p className="italic text-gray-600 mb-4">
//         Heal with Knowledge. Teach with Purpose.
//       </p>
//       <p className="text-gray-800 mb-6">
//         The Yoga Therapy Teacher Course at Swarna Kamal Yoga is a comprehensive
//         program designed to help you understand the therapeutic applications of
//         yoga for various health conditions. This course bridges the gap between
//         traditional yoga practice and modern medical understanding, empowering
//         you to teach yoga therapy with confidence and compassion.
//       </p>

//       <hr className="border-gray-200 my-7" />

//       {/* Why This Course */}
//       <h2 className="text-lg font-bold underline mb-3">Why This Course?</h2>
//       <p className="mb-2 text-gray-800">
//         Many yoga teachers lack the knowledge to:
//       </p>
//       <ul className="list-disc pl-6 mb-3 text-gray-800 space-y-1">
//         <li>Address specific health conditions through yoga</li>
//         <li>Understand how body systems are affected by disease</li>
//         <li>Safely adapt practice for therapeutic purposes</li>
//         <li>Guide students with chronic or complex conditions</li>
//       </ul>
//       <p className="text-gray-800">
//         This course gives you{" "}
//         <strong>
//           the clinical understanding and therapeutic tools to make a real
//           difference.
//         </strong>
//       </p>

//       <hr className="border-gray-200 my-7" />

//       {/* Curriculum Highlights */}
//       <h2 className="text-lg font-bold underline mb-4">
//         Curriculum Highlights
//       </h2>

//       {/* Module 1 */}
//       <h3 className="font-bold mb-2">1. Introduction to Yoga Therapy</h3>
//       <ul className="list-disc pl-6 mb-5 text-gray-800 space-y-1">
//         <li>What is Yoga Therapy and how it differs from general yoga</li>
//         <li>History and philosophy of therapeutic yoga</li>
//         <li>The role of a Yoga Therapy Teacher</li>
//         <li>Understanding various conditions & diseases</li>
//       </ul>

//       {/* Module 2 */}
//       <h3 className="font-bold mb-2">
//         2. Musculoskeletal System & Case Studies
//       </h3>
//       <p className="mb-2 text-gray-800">
//         In-depth study of the musculoskeletal system with practical case
//         studies:
//       </p>
//       <ul className="list-none pl-0 mb-5 text-gray-800 space-y-1">
//         <li>✓ Back Pain</li>
//         <li>✓ Knee Pain</li>
//         <li>✓ Shoulder Pain</li>
//         <li>✓ Therapeutic yoga protocols for each condition</li>
//       </ul>

//       {/* Module 3 */}
//       <h3 className="font-bold mb-2">3. Circulatory System & Case Studies</h3>
//       <p className="mb-2 text-gray-800">
//         Understanding the heart and circulatory health through yoga therapy:
//       </p>
//       <ul className="list-none pl-0 mb-5 text-gray-800 space-y-1">
//         <li>✓ Heart Problems</li>
//         <li>✓ High & Low Blood Pressure</li>
//         <li>✓ Yoga practices for cardiovascular wellness</li>
//       </ul>

//       {/* Module 4 */}
//       <h3 className="font-bold mb-2">4. Digestive System & Case Studies</h3>
//       <p className="mb-2 text-gray-800">
//         Therapeutic yoga for digestive health conditions:
//       </p>
//       <ul className="list-none pl-0 mb-5 text-gray-800 space-y-1">
//         <li>✓ Indigestion</li>
//         <li>✓ Constipation</li>
//         <li>✓ Irritable Bowel Syndrome (IBS)</li>
//         <li>✓ Targeted asana and pranayama protocols</li>
//       </ul>

//       {/* Module 5 */}
//       <h3 className="font-bold mb-2">5. Endocrine System & Case Studies</h3>
//       <p className="mb-2 text-gray-800">
//         Understanding hormonal health and yoga's role in balancing it:
//       </p>
//       <ul className="list-none pl-0 mb-5 text-gray-800 space-y-1">
//         <li>✓ Stress & Anxiety</li>
//         <li>✓ PCOD / PCOS</li>
//         <li>✓ Thyroid Disorders</li>
//         <li>✓ Yoga and lifestyle interventions for endocrine health</li>
//       </ul>

//       {/* Module 6 */}
//       <h3 className="font-bold mb-2">6. Yoga for Specific Health Conditions</h3>
//       <p className="mb-2 text-gray-800">
//         Comprehensive yoga therapy protocols for a wide range of conditions:
//       </p>
//       <ul className="list-disc pl-6 mb-5 text-gray-800 space-y-1">
//         <li>Back Problems & Sciatica Pain</li>
//         <li>Cervical Pain & Joint Pain</li>
//         <li>Arthritis & Diabetes</li>
//         <li>Thyroid Disorders & Obesity</li>
//         <li>Asthma & Acidity</li>
//         <li>High Cholesterol & High / Low BP</li>
//         <li>Mental Disorders & Hypertension</li>
//         <li>Insomnia & Allergy</li>
//         <li>Skin Diseases & Heart Diseases</li>
//         <li>PCOD & PCOS</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Course Inclusion */}
//       <h2 className="text-lg font-bold underline mb-3">Course Inclusion</h2>
//       <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
//         <li>Live & Recorded Sessions</li>
//         <li>Study Materials in PDFs</li>
//         <li>Soft Copy of Certificate</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Course Benefits */}
//       <h2 className="text-lg font-bold underline mb-3">Course Benefits</h2>
//       <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
//         <li>Teach yoga therapy with clinical understanding and confidence</li>
//         <li>Help students manage chronic and complex health conditions</li>
//         <li>Expand your expertise beyond general yoga teaching</li>
//         <li>
//           Work with diverse populations including those with special needs
//         </li>
//         <li>Stand out as a certified Yoga Therapy Teacher</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Why Choose */}
//       <h2 className="text-lg font-bold underline mb-3">
//         Why Choose Swarna Kamal Yoga?
//       </h2>
//       <p className="mb-2 text-gray-800">At Swarna Kamal Yoga, we combine:</p>
//       <ul className="list-disc pl-6 mb-3 text-gray-800 space-y-1">
//         <li>Traditional Yogic Knowledge</li>
//         <li>Modern Medical & Anatomical Understanding</li>
//         <li>Practical Therapeutic Teaching Experience</li>
//       </ul>
//       <p className="text-gray-800">
//         Our focus is not just learning — but{" "}
//         <strong>real transformation and mastery.</strong>
//       </p>
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

const modules = [
  {
    num: "01",
    title: "Introduction to Yoga Therapy",
    items: [
      "What is Yoga Therapy and how it differs from general yoga",
      "History and philosophy of therapeutic yoga",
      "The role of a Yoga Therapy Teacher",
      "Understanding various conditions & diseases",
    ],
  },
  {
    num: "02",
    title: "Musculoskeletal System & Case Studies",
    sub: "In-depth study of the musculoskeletal system with practical case studies:",
    checks: [
      "Back Pain",
      "Knee Pain",
      "Shoulder Pain",
      "Therapeutic yoga protocols for each condition",
    ],
  },
  {
    num: "03",
    title: "Circulatory System & Case Studies",
    sub: "Understanding the heart and circulatory health through yoga therapy:",
    checks: [
      "Heart Problems",
      "High & Low Blood Pressure",
      "Yoga practices for cardiovascular wellness",
    ],
  },
  {
    num: "04",
    title: "Digestive System & Case Studies",
    sub: "Therapeutic yoga for digestive health conditions:",
    checks: [
      "Indigestion",
      "Constipation",
      "Irritable Bowel Syndrome (IBS)",
      "Targeted asana and pranayama protocols",
    ],
  },
  {
    num: "05",
    title: "Endocrine System & Case Studies",
    sub: "Understanding hormonal health and yoga's role in balancing it:",
    checks: [
      "Stress & Anxiety",
      "PCOD / PCOS",
      "Thyroid Disorders",
      "Yoga and lifestyle interventions for endocrine health",
    ],
  },
  {
    num: "06",
    title: "Yoga for Specific Health Conditions",
    sub: "Comprehensive yoga therapy protocols for a wide range of conditions:",
    items: [
      "Back Problems & Sciatica Pain",
      "Cervical Pain & Joint Pain",
      "Arthritis & Diabetes",
      "Thyroid Disorders & Obesity",
      "Asthma & Acidity",
      "High Cholesterol & High / Low BP",
      "Mental Disorders & Hypertension",
      "Insomnia & Allergy",
      "Skin Diseases & Heart Diseases",
      "PCOD & PCOS",
    ],
  },
];

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

export default function TherapyTeacher() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Yoga Therapy Teacher Course
        </h1>
        <p className="italic text-gray-500">
          Heal with Knowledge. Teach with Purpose.
        </p>
      </div>

      <p className="text-gray-700 mb-8">
        The Yoga Therapy Teacher Course at Swarna Kamal Yoga is a comprehensive
        program designed to help you understand the therapeutic applications of
        yoga for various health conditions. This course bridges the gap between
        traditional yoga practice and modern medical understanding, empowering
        you to teach yoga therapy with confidence and compassion.
      </p>

      <Divider />

      <SectionTitle>Why This Course?</SectionTitle>
      <p className="mb-2 text-gray-700">
        Many yoga teachers lack the knowledge to:
      </p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Address specific health conditions through yoga</li>
        <li>Understand how body systems are affected by disease</li>
        <li>Safely adapt practice for therapeutic purposes</li>
        <li>Guide students with chronic or complex conditions</li>
      </ul>
      <p className="text-gray-700">
        This course gives you{" "}
        <strong className="text-gray-900">
          the clinical understanding and therapeutic tools to make a real
          difference.
        </strong>
      </p>

      <Divider />

      <SectionTitle>Curriculum Highlights</SectionTitle>
      <div className="flex flex-col gap-3 mb-2">
        {modules.map((mod) => (
          <div
            key={mod.num}
            className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[11px] font-bold tracking-widest text-amber-600 font-sans">
                {mod.num}
              </span>
              <h3 className="font-bold text-[15px] text-gray-900">
                {mod.title}
              </h3>
            </div>
            {mod.sub && <p className="text-sm text-gray-500 mb-2">{mod.sub}</p>}
            {mod.items && (
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {mod.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
            {mod.checks && (
              <div className="flex flex-col gap-1">
                {mod.checks.map((c) => (
                  <span key={c} className="text-sm text-green-700">
                    ✓ {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Divider />

      <SectionTitle>Course Inclusion</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-2">
        {[
          "Live & Recorded Sessions",
          "Study Materials in PDFs",
          "Soft Copy of Certificate",
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

      <Divider />

      <SectionTitle>Course Benefits</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        {[
          "Teach yoga therapy with clinical understanding and confidence",
          "Help students manage chronic and complex health conditions",
          "Expand your expertise beyond general yoga teaching",
          "Work with diverse populations including those with special needs",
          "Stand out as a certified Yoga Therapy Teacher",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Divider />

      <SectionTitle>Why Choose Swarna Kamal Yoga?</SectionTitle>
      <p className="mb-2 text-gray-700">At Swarna Kamal Yoga, we combine:</p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Traditional Yogic Knowledge</li>
        <li>Modern Medical & Anatomical Understanding</li>
        <li>Practical Therapeutic Teaching Experience</li>
      </ul>
      <p className="text-gray-700">
        Our focus is not just learning — but{" "}
        <strong className="text-gray-900">
          real transformation and mastery.
        </strong>
      </p>

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
