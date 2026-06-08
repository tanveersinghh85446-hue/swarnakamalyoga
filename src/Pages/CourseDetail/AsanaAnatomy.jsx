// import { Link } from "react-router-dom";

// export default function YogaCourse() {
//   return (
//     <div className="max-w-3xl mx-auto px-5 py-10 bg-white text-gray-900 font-sans text-[15px] leading-relaxed pt-15 border-t border-white/2">
//       {/* Header */}
//       <p className="text-sm text-gray-500 mb-1 tracking-wide">
//         Swarna Kamal Yoga
//       </p>
//       <h1 className="text-2xl font-bold underline mb-1">
//         Online Asana Anatomy & Alignment Course
//       </h1>
//       <p className="italic text-gray-600 mb-4">
//         Master the Science Behind Every Pose
//       </p>
//       <p className="text-gray-800 mb-6">
//         The Online Asana Anatomy & Adjustment Alignment Course at Swarna Kamal
//         Yoga is a deep-dive program designed to help you understand the body,
//         refine your practice, and teach with confidence. This course bridges the
//         gap between traditional yoga wisdom and modern anatomical science,
//         empowering you to practice safely and guide others with precision.
//       </p>

//       <hr className="border-gray-200 my-7" />

//       {/* Why This Course */}
//       <h2 className="text-lg font-bold underline mb-3">Why This Course?</h2>
//       <p className="mb-2 text-gray-800">
//         Many practitioners perform asanas without understanding:
//       </p>
//       <ul className="list-disc pl-6 mb-3 text-gray-800 space-y-1">
//         <li>Which muscles are activated</li>
//         <li>How joints should align</li>
//         <li>Why injuries happen</li>
//         <li>How to adjust safely</li>
//       </ul>
//       <p className="text-gray-800">
//         This course gives you{" "}
//         <strong>
//           clarity, confidence, and professional-level understanding.
//         </strong>
//       </p>

//       <hr className="border-gray-200 my-7" />

//       {/* What You Will Learn */}
//       <h2 className="text-lg font-bold underline mb-4">What You Will Learn</h2>

//       {/* Module 1 */}
//       <h3 className="font-bold mb-2">1. Fundamentals of Human Anatomy</h3>
//       <ul className="list-disc pl-6 mb-5 text-gray-800 space-y-1">
//         <li>Skeletal System (Bones & Joints)</li>
//         <li>Muscular System (Major Muscle Groups)</li>
//         <li>Types of Movements (Flexion, Extension, Rotation)</li>
//         <li>Planes of Movement in Yoga</li>
//       </ul>

//       {/* Module 2 */}
//       <h3 className="font-bold mb-2">
//         2. Asana Breakdown (Pose-by-Pose Analysis)
//       </h3>
//       <p className="mb-2 text-gray-800">
//         Detailed anatomical understanding of key yoga postures:
//       </p>
//       <ul className="list-disc pl-6 mb-3 text-gray-800 space-y-1">
//         <li>Standing Poses</li>
//         <li>Forward Bends</li>
//         <li>Backbends</li>
//         <li>Twists</li>
//         <li>Balancing Poses</li>
//         <li>Inversions</li>
//       </ul>
//       <p className="mb-2 text-gray-800">Each asana will include:</p>
//       <ul className="list-none pl-0 mb-5 text-gray-800 space-y-1">
//         <li>✓ Muscle engagement</li>
//         <li>✓ Joint alignment</li>
//         <li>✓ Common mistakes</li>
//         <li>✓ Safe modifications</li>
//       </ul>

//       {/* Module 3 */}
//       <h3 className="font-bold mb-2">3. Alignment Principles</h3>
//       <p className="mb-2 text-gray-800">
//         Learn the correct alignment cues for safe and effective practice:
//       </p>
//       <ul className="list-disc pl-6 mb-5 text-gray-800 space-y-1">
//         <li>Spine alignment</li>
//         <li>Knee & ankle safety</li>
//         <li>Shoulder stability</li>
//         <li>Hip positioning</li>
//         <li>Core engagement</li>
//       </ul>

//       {/* Module 4 */}
//       <h3 className="font-bold mb-2">
//         4. Adjustment Techniques (Hands-On & Verbal)
//       </h3>
//       <ul className="list-disc pl-6 mb-5 text-gray-800 space-y-1">
//         <li>When to adjust vs when not to</li>
//         <li>Safe hands-on adjustments</li>
//         <li>Verbal cueing techniques</li>
//         <li>Ethical boundaries in adjustments</li>
//       </ul>

//       {/* Module 5 */}
//       <h3 className="font-bold mb-2">5. Injury Prevention & Safety</h3>
//       <ul className="list-disc pl-6 mb-5 text-gray-800 space-y-1">
//         <li>Common yoga injuries and causes</li>
//         <li>Contraindications for different conditions</li>
//         <li>Safe practice for beginners & special populations</li>
//         <li>Recovery and rehabilitation basics</li>
//       </ul>

//       {/* Module 6 */}
//       <h3 className="font-bold mb-2">6. Teaching Methodology</h3>
//       <ul className="list-disc pl-6 mb-5 text-gray-800 space-y-1">
//         <li>How to observe students</li>
//         <li>How to correct alignment in group classes</li>
//         <li>Creating safe sequences</li>
//         <li>Building confidence as a teacher</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Course Features */}
//       <h2 className="text-lg font-bold underline mb-3">Course Features</h2>
//       <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
//         <li>100% Online – Learn from anywhere</li>
//         <li>Recorded + Live Sessions</li>
//         <li>Step-by-step structured modules</li>
//         <li>Practical demonstrations</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Course Benefits */}
//       <h2 className="text-lg font-bold underline mb-3">Course Benefits</h2>
//       <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
//         <li>Practice with confidence and safety</li>
//         <li>Understand why each pose works</li>
//         <li>Prevent injuries for yourself and your students</li>
//         <li>Improve teaching skills and professional value</li>
//         <li>Stand out as a knowledgeable yoga teacher</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Why Choose */}
//       <h2 className="text-lg font-bold underline mb-3">
//         Why Choose Swarna Kamal Yoga?
//       </h2>
//       <p className="mb-2 text-gray-800">At Swarna Kamal Yoga, we combine:</p>
//       <ul className="list-disc pl-6 mb-3 text-gray-800 space-y-1">
//         <li>Traditional Yogic Knowledge</li>
//         <li>Modern Scientific Approach</li>
//         <li>Practical Teaching Experience</li>
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
    title: "Fundamentals of Human Anatomy",
    items: [
      "Skeletal System (Bones & Joints)",
      "Muscular System (Major Muscle Groups)",
      "Types of Movements (Flexion, Extension, Rotation)",
      "Planes of Movement in Yoga",
    ],
  },
  {
    num: "02",
    title: "Asana Breakdown (Pose-by-Pose Analysis)",
    sub: "Detailed anatomical understanding of key yoga postures:",
    items: [
      "Standing Poses",
      "Forward Bends",
      "Backbends",
      "Twists",
      "Balancing Poses",
      "Inversions",
    ],
    checks: ["Muscle engagement", "Joint alignment", "Common mistakes", "Safe modifications"],
  },
  {
    num: "03",
    title: "Alignment Principles",
    sub: "Learn the correct alignment cues for safe and effective practice:",
    items: [
      "Spine alignment",
      "Knee & ankle safety",
      "Shoulder stability",
      "Hip positioning",
      "Core engagement",
    ],
  },
  {
    num: "04",
    title: "Adjustment Techniques (Hands-On & Verbal)",
    items: [
      "When to adjust vs when not to",
      "Safe hands-on adjustments",
      "Verbal cueing techniques",
      "Ethical boundaries in adjustments",
    ],
  },
  {
    num: "05",
    title: "Injury Prevention & Safety",
    items: [
      "Common yoga injuries and causes",
      "Contraindications for different conditions",
      "Safe practice for beginners & special populations",
      "Recovery and rehabilitation basics",
    ],
  },
  {
    num: "06",
    title: "Teaching Methodology",
    items: [
      "How to observe students",
      "How to correct alignment in group classes",
      "Creating safe sequences",
      "Building confidence as a teacher",
    ],
  },
];

function SectionTitle({ children }) {
  return (
    <h2 className="text-lg font-bold underline underline-offset-4 mb-4 text-gray-900">
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="border-amber-100 my-8" />;
}

export default function YogaCourse() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">

      {/* Header */}
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Online Asana Anatomy & Alignment Course
        </h1>
        <p className="italic text-gray-500">Master the Science Behind Every Pose</p>
      </div>

      <p className="text-gray-700 mb-8">
        The Online Asana Anatomy & Adjustment Alignment Course at Swarna Kamal Yoga is a
        deep-dive program designed to help you understand the body, refine your practice, and
        teach with confidence. This course bridges the gap between traditional yoga wisdom and
        modern anatomical science, empowering you to practice safely and guide others with
        precision.
      </p>

      <Divider />

      {/* Why This Course */}
      <SectionTitle>Why This Course?</SectionTitle>
      <p className="mb-2 text-gray-700">Many practitioners perform asanas without understanding:</p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Which muscles are activated</li>
        <li>How joints should align</li>
        <li>Why injuries happen</li>
        <li>How to adjust safely</li>
      </ul>
      <p className="text-gray-700">
        This course gives you{" "}
        <strong className="text-gray-900">clarity, confidence, and professional-level understanding.</strong>
      </p>

      <Divider />

      {/* What You Will Learn */}
      <SectionTitle>What You Will Learn</SectionTitle>

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
              <h3 className="font-bold text-[15px] text-gray-900">{mod.title}</h3>
            </div>

            {mod.sub && (
              <p className="text-sm text-gray-500 mb-2">{mod.sub}</p>
            )}

            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {mod.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {mod.checks && (
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 pt-3 border-t border-dashed border-amber-100">
                {mod.checks.map((c) => (
                  <span key={c} className="text-[13px] text-green-700">
                    ✓ {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Divider />

      {/* Course Features */}
      <SectionTitle>Course Features</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        <li>100% Online – Learn from anywhere</li>
        <li>Recorded + Live Sessions</li>
        <li>Step-by-step structured modules</li>
        <li>Practical demonstrations</li>
      </ul>

      <Divider />

      {/* Course Benefits */}
      <SectionTitle>Course Benefits</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        <li>Practice with confidence and safety</li>
        <li>Understand why each pose works</li>
        <li>Prevent injuries for yourself and your students</li>
        <li>Improve teaching skills and professional value</li>
        <li>Stand out as a knowledgeable yoga teacher</li>
      </ul>

      <Divider />

      {/* Why Choose */}
      <SectionTitle>Why Choose Swarna Kamal Yoga?</SectionTitle>
      <p className="mb-2 text-gray-700">At Swarna Kamal Yoga, we combine:</p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Traditional Yogic Knowledge</li>
        <li>Modern Scientific Approach</li>
        <li>Practical Teaching Experience</li>
      </ul>
      <p className="text-gray-700">
        Our focus is not just learning — but{" "}
        <strong className="text-gray-900">real transformation and mastery.</strong>
      </p>

      {/* CTA */}
      <div className="flex justify-center mt-12 mb-6">
        <Link
          to="/courses"
          className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold font-sans tracking-wide px-8 py-3 rounded-md transition-colors"
        >
          ← Back To Courses
        </Link>
      </div>

      <div className="border-t border-stone-200 mt-8 pt-4 text-center text-xs text-stone-400 font-sans">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All rights reserved.
      </div>
    </div>
  );
}