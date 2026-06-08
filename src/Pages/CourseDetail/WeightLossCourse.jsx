import { Link } from "react-router-dom";

const modules = [
  {
    num: "01",
    title: "Asana & Movement for Weight Loss",
    sub: "Master powerful yoga sequences and training methods to build strength and burn calories:",
    items: [
      "Dynamic Asana Sequences for Fat Burning",
      "Sun Salutation Variations (Surya Namaskar)",
      "Strength-Building Poses and Sequences",
      "Swiss Ball – Balance and Core Training",
      "Speed Training and Power Development",
      "Circuit Training for Maximum Calorie Burn",
      "Whole Body Strength for Women",
    ],
  },
  {
    num: "02",
    title: "Flexibility & Stretching Protocols",
    sub: "Understand the role of flexibility in recovery and weight management:",
    items: [
      "Static vs Dynamic Stretching Techniques",
      "Flexibility Training for Better Performance",
      "Mobility Exercises for Injury Prevention",
      "Pilates Sequences for Core Stability",
      "Recovery and Myofascial Release",
    ],
  },
  {
    num: "03",
    title: "Advanced Training Methods",
    sub: "Learn high-intensity and specialized training approaches:",
    items: [
      "TABATA Training – Science and Practice",
      "HIIT (High-Intensity Interval Training)",
      "Core Stability and Strengthening Techniques",
      "Modifications for People with Health Conditions",
      "Progressive Overload Principles",
    ],
  },
  {
    num: "04",
    title: "Nutrition & Dietary Science",
    sub: "Master the nutritional foundations of sustainable weight loss:",
    items: [
      "Yogic Diet Principles and Nutrition Basics",
      "Creating Personalized Meal Plans",
      "Different Diet Types (Keto, Intermittent Fasting, Plant-Based, etc.)",
      "Macronutrients and Micronutrients for Weight Loss",
      "Importance of Hydration in Weight Management",
      "Role of Naturopathy in Healthy Weight Loss",
      "Sustainable Eating Habits",
    ],
  },
  {
    num: "05",
    title: "Yoga, Pranayama & Wellness",
    sub: "Integrate ancient yogic practices with modern weight loss science:",
    items: [
      "Pranayama (Breathing Techniques) for Metabolism",
      "Mudras (Hand Gestures) for Weight Management",
      "Relaxation Techniques and Stress Management",
      "Meditation Practices for Mental Clarity",
      "Spiritual Healing and Positive Affirmations",
      "Understanding Obesity – Causes and Health Effects",
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

export default function WeightLossCourse() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Weight Loss Coach Certification Course
        </h1>
        <p className="italic text-gray-500">
          Transform Your Body & Master the Science of Sustainable Weight Loss
        </p>
      </div>

      <p className="text-gray-700 mb-8">
        The Weight Loss Coach Certification Course at Swarna Kamal Yoga is a
        comprehensive program designed to help you achieve your fitness goals
        and guide others on their weight loss journey. This course combines
        ancient yogic wisdom with modern fitness science, nutrition coaching,
        and wellness practices to create lasting, healthy transformations.
      </p>

      <Divider />

      <SectionTitle>Why This Course?</SectionTitle>
      <p className="mb-2 text-gray-700">
        Most weight loss programs fail because they focus only on exercise or
        diet. This course teaches you:
      </p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>How the body loses weight scientifically</li>
        <li>Effective movement and training methods</li>
        <li>Sustainable nutrition and meal planning</li>
        <li>Mental and spiritual wellness aspects</li>
      </ul>
      <p className="text-gray-700">
        This course gives you{" "}
        <strong className="text-gray-900">
          a complete toolkit to transform lives — including your own.
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
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {mod.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Divider />

      <SectionTitle>Course Features</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        {[
          "100% Online – Learn from anywhere at your own pace",
          "Live Interactive Sessions + Recorded Videos",
          "Step-by-step structured modules with clear progression",
          "Practical demonstrations and real-world examples",
          "Complete study materials in PDF format",
          "Certification from Swarna Kamal Yoga",
          "Recording available for 4 months access",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Divider />

      <SectionTitle>Who Is This Course For?</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        {[
          "Yoga Teachers and Fitness Instructors",
          "Wellness Coaches and Health Professionals",
          "Yoga Students seeking transformation",
          "Beginners interested in fitness and weight management",
          "Entrepreneurs building a coaching business",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Divider />

      <SectionTitle>Course Benefits</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        {[
          "Transform your own body and health",
          "Understand the complete science of weight loss",
          "Guide clients safely and effectively",
          "Improve your credibility as a coach or instructor",
          "Build a sustainable coaching business",
          "Combine yoga, fitness, and nutrition expertise",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

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
