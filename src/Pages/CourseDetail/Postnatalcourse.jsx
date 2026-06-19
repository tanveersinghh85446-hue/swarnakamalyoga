import { Link } from "react-router-dom";

const modules = [
  {
    num: "01",
    title: "Fundamentals of Postnatal Recovery",
    items: [
      "Understanding the postpartum body & physiology",
      "Pelvic floor anatomy and function",
      "Core muscle recovery timeline",
      "Hormonal changes & their impact on practice",
      "Safe return to exercise guidelines",
    ],
  },
  {
    num: "02",
    title: "Pelvic Floor Muscle Training",
    sub: "Deep understanding of pelvic floor health and rehabilitation:",
    items: [
      "Pelvic floor anatomy and function",
      "Kegel exercises (proper technique)",
      "Progressive pelvic floor strengthening",
      "Assessment and self-awareness techniques",
      "Preventing incontinence and dysfunction",
    ],
    checks: [
      "Safe progression",
      "Common mistakes",
      "Individual modifications",
      "Long-term maintenance",
    ],
  },
  {
    num: "03",
    title: "Core Strengthening & Diastasis Recti Management",
    sub: "Rebuild core strength safely after pregnancy:",
    items: [
      "Understanding diastasis recti (abdominal separation)",
      "Assessment of core separation and function",
      "Safe abdominal exercises for postnatal recovery",
      "Progressive core strengthening sequences",
      "Return to normal activities safely",
    ],
  },
  {
    num: "04",
    title: "Postnatal Exercises & Movement",
    items: [
      "Abdominal exercises (safe progressions)",
      "Circulatory exercises (gentle movement for healing)",
      "Pelvic floor strengthening exercises",
      "Chest and upper body exercises",
      "Postnatal Pilates techniques",
      "Safe stretching and mobility work",
    ],
  },
  {
    num: "05",
    title: "Breathwork (Pranayama) Techniques",
    items: [
      "Abdominal breathing for core awareness",
      "Costal breathing for rib expansion",
      "Diaphragmatic breathing for pelvic floor relaxation",
      "Breath-to-movement coordination",
      "Breathing techniques for stress relief",
    ],
  },
  {
    num: "06",
    title: "Meditation & Healing Techniques",
    items: [
      "Trauma Tapping Technique (TTT) for release",
      "Trataka meditation (candle gazing)",
      "Body scan meditation for awareness",
      "Sleep meditation for recovery",
      "Guided visualization for healing",
      "Emotional release and mindfulness practices",
    ],
  },
  {
    num: "07",
    title: "Postpartum Depression (PPD) & Mental Health",
    sub: "Evidence-based yoga practices for emotional wellbeing:",
    items: [
      "Understanding postpartum depression and anxiety",
      "Yoga practices for PPD management",
      "Neuroscience of tapping and stress relief",
      "Building emotional resilience",
      "When to seek professional mental health support",
    ],
  },
  {
    num: "08",
    title: "Special Topics & Practical Application",
    items: [
      "Managing acid reflux during postnatal period",
      "Bladder health and continence management",
      "Sleep optimization for recovery",
      "Nutrition and hydration considerations",
      "Teaching postnatal yoga to mothers",
      "Creating safe group classes for postpartum women",
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
  return <hr className="border-pink-100 my-8" />;
}

export default function PostnatalCourse() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffcfc] text-gray-900 text-[15px] leading-relaxed font-serif">
      {/* Header */}
      <div className="border-l-[3px] border-pink-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-pink-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Postnatal Training Certification Program
        </h1>
        <p className="italic text-gray-500">
          Transform Postnatal Recovery with Evidence-Based Yoga
        </p>
      </div>

      <p className="text-gray-700 mb-8">
        The Postnatal Training Certification Program at Swarna Kamal Yoga is a
        comprehensive course designed to empower yoga teachers, therapists,
        fitness professionals, and mothers with practical, evidence-informed
        tools to support safe and effective postnatal recovery. This
        YACEP-approved program bridges traditional yoga wisdom with modern
        scientific understanding of postpartum rehabilitation.
      </p>

      <Divider />

      {/* Quick Info */}
      <SectionTitle>Program Details</SectionTitle>
      <div className="bg-pink-50 border border-pink-200 rounded-lg px-5 py-4 mb-6 text-sm space-y-2">
        <p>
          <strong>Duration:</strong> 16 Classes
        </p>
        <p>
          <strong>Schedule:</strong> 23rd July – 7th August, 2026
        </p>
        <p>
          <strong>Time:</strong> 7:00 PM – 8:00 PM IST
        </p>
        <p>
          <strong>Fee:</strong> ₹4,000
        </p>
        <p>
          <strong>Mode:</strong> Live + Recorded Sessions
        </p>
        <p>
          <strong>Certification:</strong> YACEP Approved – Yoga Alliance
          Continuing Education Program
        </p>
      </div>

      <Divider />

      {/* Why This Course */}
      <SectionTitle>Why This Course?</SectionTitle>
      <p className="mb-2 text-gray-700">
        Postpartum recovery is critical but often overlooked. Many mothers face:
      </p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Pelvic floor dysfunction and incontinence</li>
        <li>Postpartum depression and anxiety (PPD)</li>
        <li>Core weakness and diastasis recti</li>
        <li>Sleep deprivation and emotional stress</li>
        <li>Lack of safe, evidence-based guidance</li>
      </ul>
      <p className="text-gray-700">
        This program equips you with{" "}
        <strong className="text-gray-900">
          specialized knowledge and practical skills
        </strong>{" "}
        to guide mothers through healing with confidence and compassion.
      </p>

      <Divider />

      {/* What You Will Learn */}
      <SectionTitle>What You Will Learn</SectionTitle>

      <div className="flex flex-col gap-3 mb-2">
        {modules.map((mod) => (
          <div
            key={mod.num}
            className="bg-white border border-pink-100 rounded-lg px-5 py-4 shadow-sm"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[11px] font-bold tracking-widest text-pink-600 font-sans">
                {mod.num}
              </span>
              <h3 className="font-bold text-[15px] text-gray-900">
                {mod.title}
              </h3>
            </div>

            {mod.sub && <p className="text-sm text-gray-500 mb-2">{mod.sub}</p>}

            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {mod.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {mod.checks && (
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 pt-3 border-t border-dashed border-pink-100">
                {mod.checks.map((c) => (
                  <span key={c} className="text-[13px] text-rose-700">
                    ✓ {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Divider />

      {/* Exercises Covered */}
      <SectionTitle>Exercises & Techniques Covered</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-sm">🏃 Exercises</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Abdominal exercises</li>
            <li>Circulatory exercises</li>
            <li>Pelvic floor strengthening</li>
            <li>Chest exercises</li>
            <li>Postnatal Pilates</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-sm">
            🌬 Breathwork
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Abdominal breathing</li>
            <li>Costal breathing</li>
            <li>Diaphragmatic breathing</li>
            <li>Breath coordination</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-sm">
            🧘 Meditation & Healing
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Trauma Tapping Technique (TTT)</li>
            <li>Trataka meditation</li>
            <li>Body scan meditation</li>
            <li>Sleep meditation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-sm">
            🧠 Special Topics
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Postpartum Depression (PPD)</li>
            <li>Acid reflux management</li>
            <li>Bladder health</li>
            <li>Neuroscience of tapping</li>
          </ul>
        </div>
      </div>

      <Divider />

      {/* Course Features */}
      <SectionTitle>Course Features</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        <li>100% Online – Learn from anywhere</li>
        <li>Live + Recorded sessions</li>
        <li>8 comprehensive modules</li>
        <li>Practical demonstrations</li>
        <li>Interactive Q&A sessions</li>
        <li>Lifetime access to recordings</li>
      </ul>

      <Divider />

      {/* Course Benefits */}
      <SectionTitle>Who Should Enroll?</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        <li>🧘 Yoga teachers & instructors</li>
        <li>💪 Fitness professionals</li>
        <li>👩‍⚕️ Therapists & wellness coaches</li>
        <li>👩‍👧 Mothers seeking recovery</li>
        <li>🏥 Healthcare practitioners</li>
        <li>📚 Yoga students advancing practice</li>
      </ul>

      <Divider />

      {/* Benefits */}
      <SectionTitle>Course Benefits</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        <li>Master postnatal recovery science</li>
        <li>Learn specialized pelvic floor techniques</li>
        <li>Understand and support PPD management</li>
        <li>Gain YACEP continuing education credits</li>
        <li>Build confidence teaching postpartum women</li>
        <li>Access practical, evidence-based tools</li>
      </ul>

      <Divider />

      {/* Why Choose */}
      <SectionTitle>Why Choose Swarna Kamal Yoga?</SectionTitle>
      <p className="mb-2 text-gray-700">At Swarna Kamal Yoga, we combine:</p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Traditional Yogic Wisdom</li>
        <li>Modern Scientific Evidence</li>
        <li>Practical Teaching Experience</li>
        <li>Compassionate, Holistic Approach</li>
      </ul>
      <p className="text-gray-700">
        Our focus is on{" "}
        <strong className="text-gray-900">
          real transformation and sustainable recovery
        </strong>{" "}
        for both mothers and practitioners.
      </p>

      <Divider />

      {/* Certification */}
      <SectionTitle>Certification</SectionTitle>
      <p className="text-gray-700 mb-3">
        Upon successful completion of all 16 classes, you will receive a{" "}
        <strong>Postnatal Training Certification</strong> that is{" "}
        <strong>YACEP Approved</strong> by the Yoga Alliance Continuing
        Education Program. This certification is recognized globally and can be
        added to your professional credentials.
      </p>

      <Divider />

      {/* CTA */}
      <div className="bg-linear-to-r from-pink-100 to-rose-100 border border-pink-200 rounded-lg px-6 py-5 mb-8 text-center">
        <p className="text-gray-700 mb-3 font-semibold">
          Ready to Transform Postnatal Recovery?
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Limited seats available. Register now to secure your spot!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="/Apply"
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold font-sans tracking-wide px-6 py-2.5 rounded-md transition-colors"
          >
            📧 Register Now
          </a>
          <a
            href="tel:+919663894499"
            className="bg-white hover:bg-gray-50 text-pink-600 text-sm font-semibold font-sans tracking-wide px-6 py-2.5 rounded-md border border-pink-300 transition-colors"
          >
            📞 Call Us
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 mb-8 text-sm">
        <p className="font-bold text-gray-900 mb-2">Contact Information</p>
        <p>
          <strong>Email:</strong> smita15smile@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91-9663894499
        </p>
        <p>
          <strong>Website:</strong> www.swarnakamalyoga.com
        </p>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-12 mb-6">
        <Link
          to="/courses"
          className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold font-sans tracking-wide px-8 py-3 rounded-md transition-colors"
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
