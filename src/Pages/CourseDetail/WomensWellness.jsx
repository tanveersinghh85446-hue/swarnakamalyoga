import { Link } from "react-router-dom";

const modules = [
  {
    num: "01",
    title: "Theory & Philosophy of Women's Health",
    sub: "Master the science behind women's reproductive and hormonal health:",
    items: [
      "Anatomy & Physiology – Reproductive & Endocrine System",
      "Hormonal Imbalance & Reproductive Health Disorders",
      "Pathology of PCOS, Fibroids, Menstrual Irregularities, UTI & Thyroid",
      "Prevention & Cure of Women's Health Disorders Through Yoga",
      "Infertility Causes & Evidence-Based Yoga Therapy",
      "Integration of Modern Science with Yogic Wisdom",
    ],
  },
  {
    num: "02",
    title: "Practical Yoga Therapy Sessions",
    sub: "Learn specialized yoga sequences and practices for women's health:",
    items: [
      "Yoga for Healthy Metabolism & Reproductive Health",
      "Yoga for Prevention & Therapy in Infertility",
      "Yoga Therapy for Menstrual Health Disorders",
      "Yoga Therapy for PCOS, Fibroids & Endometriosis",
      "Yoga Therapy for Thyroid Disorders",
      "Yoga for Weight Management and Obesity",
      "Safe Asana Modifications for Different Menstrual Phases",
    ],
  },
  {
    num: "03",
    title: "Pelvic Floor & Hormonal Health",
    sub: "Deep understanding of pelvic anatomy and hormonal management:",
    items: [
      "Pelvic Floor Anatomy and Function",
      "Pelvic Floor Strengthening and Relaxation Techniques",
      "Managing Menopause & Osteoarthritis",
      "Hormonal Imbalance Control through Yoga",
      "Women's Reproductive Health Across All Life Stages",
      "Menstruation, Fertility, Pregnancy & Menopause Support",
    ],
  },
  {
    num: "04",
    title: "Nutrition & Fitness for Women",
    sub: "Holistic nutrition and fitness strategies tailored for women:",
    items: [
      "Nutrition & Fitness Principles for Women's Health",
      "Healthy Eating Strategies & Posture Correction",
      "Ayurvedic Approach to Women's Wellness",
      "Balancing the Doshas (Vata, Pitta, Kapha)",
      "Natural Remedies for Reproductive Wellbeing",
      "Dietary Support for Different Health Conditions",
    ],
  },
  {
    num: "05",
    title: "Yoga, Pranayama & Relaxation",
    sub: "Integrate breathwork, meditation, and relaxation for emotional wellness:",
    items: [
      "Yoga & Meditation for Physical & Emotional Wellbeing",
      "Relaxation Techniques (Yoga Nidra, Pranayama variations)",
      "Mudra Therapy for Hormonal Balance",
      "Pranayama & Meditation Techniques for Women",
      "Practical Application in Daily Life",
      "Gentle Strength Building & Restorative Poses",
      "Stress Management & Mindfulness Practices",
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

export default function WomensWellness() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Women's Health Coach Certification Course
        </h1>
        <p className="italic text-gray-500">
          Empower Women Through Yoga, Nutrition & Holistic Wellness
        </p>
      </div>

      <p className="text-gray-700 mb-8">
        The Women's Health Coach Certification Course at Swarna Kamal Yoga is a
        specialized program designed to support women through every stage of
        life — from menstruation to fertility, pregnancy, and menopause. This
        comprehensive course combines yogic science, modern medicine, nutrition,
        and emotional wellness to address hormonal imbalance, fertility
        challenges, and reproductive health disorders.
      </p>

      <Divider />

      <SectionTitle>Why This Course?</SectionTitle>
      <p className="mb-2 text-gray-700">
        Women face unique health challenges that require specialized knowledge:
      </p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Hormonal imbalances affecting physical and emotional health</li>
        <li>Fertility and pregnancy-related complications</li>
        <li>PCOS, fibroids, menstrual irregularities, and thyroid disorders</li>
        <li>Menopause and age-related health transitions</li>
        <li>Need for personalized, compassionate wellness coaching</li>
      </ul>
      <p className="text-gray-700">
        This course gives you{" "}
        <strong className="text-gray-900">
          the expertise to transform women's health and build a meaningful
          coaching practice.
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
          "40 Live Interactive Zoom Sessions (3 Months)",
          "Expert-Led Teaching with Hands-On Demonstrations",
          "Step-by-step structured modules with clear progression",
          "Complete PDF Study Materials and Notes",
          "Lifetime Access to Course Recordings",
          "Certification from Swarna Kamal Yoga",
          "Interactive Q&A and Doubt Clearing Sessions",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Divider />

      <SectionTitle>Who Is This Course For?</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        {[
          "Yoga Teachers and Wellness Coaches",
          "Healthcare Professionals seeking specialized knowledge",
          "Women wanting to understand and manage their own health",
          "Fitness Trainers specializing in women's fitness",
          "Entrepreneurs building women-centered wellness businesses",
          "Anyone passionate about women's empowerment and health",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Divider />

      <SectionTitle>Course Benefits</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        {[
          "Address Hormonal Imbalance and Related Disorders",
          "Support Women Through Fertility Challenges",
          "Provide Expert Pregnancy & Postpartum Care Guidance",
          "Guide Menopause Management with Compassion",
          "Address Auto Immune Disorders with Yoga",
          "Promote Preventative Health and Wellness",
          "Provide Mental Health Support and Emotional Wellbeing",
          "Teach Mindfulness & Stress Management Techniques",
          "Specialize in PCOD/PCOS, Infertility, Anxiety & Depression",
          "Build Credibility as a Women's Health Expert",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Divider />

      <SectionTitle>Course Details</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        {[
          ["Duration", "40 classes"],
          ["Sessions", "40 Live Zoom Classes"],
          ["Fee", "₹9,000"],
          [
            "Recording Access",
            "3–4 months access to all recordings and materials",
          ],
          ["Delivery", "Online (100% Flexible Learning)"],
          ["Certification", "Swarna Kamal Yoga Certificate"],
        ].map(([label, val]) => (
          <div
            key={label}
            className="flex items-baseline gap-3 py-2 border-b border-stone-100 last:border-0"
          >
            <span className="text-[12px] font-bold text-amber-700 font-sans w-32 shrink-0">
              {label}
            </span>
            <span className="text-sm text-gray-700">{val}</span>
          </div>
        ))}
      </div>

      <Divider />

      <SectionTitle>Why Choose Swarna Kamal Yoga?</SectionTitle>
      <p className="mb-2 text-gray-700">At Swarna Kamal Yoga, we provide:</p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>16+ Years of Expertise in Women's Wellness</li>
        <li>Compassionate, Women-Centered Teaching Approach</li>
        <li>Integration of Yoga, Science, and Modern Medicine</li>
        <li>Personalized Support and Mentorship</li>
        <li>Building a Sustainable Coaching Career</li>
      </ul>
      <p className="text-gray-700">
        Our focus is on{" "}
        <strong className="text-gray-900">
          empowering women to take charge of their health and building coaches
          who can guide others with expertise and compassion.
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
