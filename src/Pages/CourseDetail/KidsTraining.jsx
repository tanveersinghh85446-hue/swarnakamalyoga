import { Link } from "react-router-dom";

const modules = [
  {
    num: "01",
    title: "Creative & Traditional Breathing Practices",
    items: [
      "Fun and effective pranayama for children",
      "Breath awareness and calming techniques",
      "Age-appropriate breathing games and exercises",
    ],
  },
  {
    num: "02",
    title: "Teaching Techniques for Different Age Groups (3–14 Yrs)",
    items: [
      "Developmental stages and how they affect learning",
      "Physical, Cognitive, Emotional, Social and Moral Development in children",
      "How to create age-appropriate classes from birth to age 16",
      "Indian Philosophy of Child Development and Education",
      "Consciousness in children and the impact of samskaras on development",
    ],
  },
  {
    num: "03",
    title: "Kid-Friendly Yoga Postures & Benefits",
    sub: "Practical exploration of yoga asanas adapted for young bodies:",
    checks: [
      "Muscle engagement and joint safety for growing bodies",
      "Benefits of each posture for children",
      "Common mistakes and safe modifications",
      "Partner poses and group activities",
    ],
  },
  {
    num: "04",
    title: "Yoga Stories & Yoga Games",
    items: [
      "Using storytelling to guide children through poses",
      "Interactive yoga games for engagement and learning",
      "Songs, mantras, and omkar for children",
      "Activity ideas beyond yoga — arts, crafts, mandalas and cooking",
    ],
  },
  {
    num: "05",
    title: "Use of Props & Class Structure",
    items: [
      "Creative use of props to enhance learning",
      "Class structure and class management techniques",
      "How to structure and create your own lesson plan",
      "Making yoga fun and engaging for all ages",
    ],
  },
  {
    num: "06",
    title: "Mindfulness, Meditation & Relaxation Techniques",
    items: [
      "Yoga Nidra and meditation techniques for children and teens",
      "Guided visualizations and relaxation practices",
      "Taraka Concentrated Gazing (Trataka for kids)",
      "Laughter Yoga techniques",
    ],
  },
  {
    num: "07",
    title: "Online Kids Yoga — Preparation & Tips",
    items: [
      "Setting up an engaging online kids yoga class",
      "Tools and platforms for virtual teaching",
      "Maintaining attention and energy online",
      "Communicating with parents in digital settings",
    ],
  },
  {
    num: "08",
    title: "Yoga Philosophies for Kids",
    items: [
      "Patanjali's Eight Limbs of Yoga applied to children",
      "Karma and Bhakti Yoga for children",
      "Yoga for education and classroom settings",
      "Lifestyle, diet and parenting from the yogic perspective",
    ],
  },
  {
    num: "09",
    title: "Chakras & Mudras — Approach for Kids",
    items: [
      "Child-friendly introduction to the chakra system",
      "Simple mudras and their benefits for young learners",
      "Integrating energy awareness into kids yoga classes",
    ],
  },
  {
    num: "10",
    title: "Anatomy for Kids Yoga",
    items: [
      "Basic skeletal and muscular anatomy relevant to children",
      "Benefits, contraindications and guidelines for teaching yoga to children",
      "Safe practice principles for growing bodies",
      "Yoga therapy for children with special needs including ADHD, Autism, Asthma, Depression and Anxiety",
    ],
  },
  {
    num: "11",
    title: "Teaching Methodology & Lesson Planning",
    items: [
      "How to observe students and correct alignment in groups",
      "Creating safe, fun, and engaging sequences",
      "Teaching Mommy & Me or family yoga classes",
      "Practical info — asanas, pranayama, games, songs, partner poses and more",
      "Assignments with individual feedback from instructor",
      "Experience reconnecting with your own inner child",
    ],
  },
  {
    num: "12",
    title: "Community & Outreach",
    items: [
      "How to bring kids yoga back to your home country or community",
      "Communicating with parents, schools, and administrators",
      "Advocating for the benefits of yoga in educational settings",
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

export default function KidsYogaCourse() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      {/* Header */}
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Kids Teacher Training Course
        </h1>
        <p className="italic text-gray-500">50 Hours Kids Yoga TTC</p>
      </div>

      <p className="text-gray-700 mb-8">
        The Kids Yoga Teacher Training Course at Swarna Kamal Yoga is a
        comprehensive 50-hour program designed to equip educators, parents, and
        yoga practitioners with the tools and techniques needed to teach yoga
        meaningfully to children aged 3–16. This course blends traditional yogic
        wisdom with child development science to help you create safe, joyful,
        and transformative yoga experiences for kids.
      </p>

      <Divider />

      <SectionTitle>Why This Course?</SectionTitle>
      <p className="mb-2 text-gray-700">
        Many teachers and parents struggle to:
      </p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Make yoga fun and age-appropriate for children</li>
        <li>Understand child development at different stages</li>
        <li>Address special needs like ADHD, Autism, and Anxiety</li>
        <li>Structure safe, engaging kids yoga classes</li>
      </ul>
      <p className="text-gray-700">
        This course gives you{" "}
        <strong className="text-gray-900">
          the skills, confidence, and creativity to inspire young yogis.
        </strong>
      </p>

      <Divider />

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
              <h3 className="font-bold text-[15px] text-gray-900">
                {mod.title}
              </h3>
            </div>
            {mod.sub && <p className="text-sm text-gray-500 mb-2">{mod.sub}</p>}
            {mod.items && (
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {mod.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {mod.checks && (
              <div className="flex flex-col gap-1 mt-1">
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

      <SectionTitle>Course Features</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        <li>100% Online – Learn from anywhere</li>
        <li>50 Hours of comprehensive training</li>
        <li>Recorded + Live Sessions</li>
        <li>Step-by-step structured modules</li>
        <li>Practical demonstrations and assignments</li>
        <li>Individual feedback from instructor</li>
      </ul>

      <Divider />

      <SectionTitle>Course Benefits</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        <li>Teach yoga confidently to children of all ages (3–16 yrs)</li>
        <li>Understand child development at every stage</li>
        <li>Create safe, joyful, and inclusive yoga classes</li>
        <li>Support children with special needs through yoga therapy</li>
        <li>Stand out as a certified Kids Yoga Teacher</li>
        <li>Reconnect with your own inner child through practice</li>
      </ul>

      <Divider />

      <SectionTitle>Why Choose Swarna Kamal Yoga?</SectionTitle>
      <p className="mb-2 text-gray-700">At Swarna Kamal Yoga, we combine:</p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Traditional Yogic Knowledge</li>
        <li>Modern Child Development Science</li>
        <li>Creative & Playful Teaching Approaches</li>
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
