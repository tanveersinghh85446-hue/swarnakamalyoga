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

function BulletCard({ items }) {
  return (
    <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function SubGroup({ label, items }) {
  return (
    <div className="mb-4">
      <p className="text-[13px] font-bold text-amber-700 font-sans tracking-wide mb-2">
        {label}
      </p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function YinYogaCourse() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      {/* Header */}
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Yin Yoga Course
        </h1>
      </div>

      <Divider />

      {/* Theory */}
      <SectionTitle>Course Theory</SectionTitle>
      <BulletCard
        items={[
          "Meaning of Yin Yoga",
          "What is Yin Yoga",
          "Origin & History of Yin Yoga",
          "Key Characteristics of Yin Yoga",
          "Breathing Patterns",
          "Understanding the Meaning of Yin & Yang in Yoga",
        ]}
      />

      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mt-3">
        <p className="font-bold text-[13px] text-gray-900 mb-3">
          Differences between Yin and Yang Tissues
        </p>
        <div className="grid grid-cols-2 gap-6">
          <SubGroup
            label="Yin Tissues"
            items={["Bones", "Tendons", "Ligaments", "Discs"]}
          />
          <SubGroup label="Yang Tissues" items={["Muscle", "Blood"]} />
        </div>
        <p className="text-sm text-gray-700 mt-1">
          • Functional Principles of Yin Yoga
        </p>
      </div>

      <Divider />

      {/* Benefits */}
      <SectionTitle>Benefits of Yin Yoga</SectionTitle>
      <div className="flex flex-col gap-3">
        {[
          [
            "Physical Benefits",
            [
              "Increases flexibility and joint mobility",
              "Improves circulation in joints and connective tissue",
              "Releases deep muscular tension",
              "Supports spinal health and posture",
              "Enhances recovery and reduces stiffness",
            ],
          ],
          [
            "Mental & Emotional Benefits",
            [
              "Reduces stress and anxiety",
              "Cultivates mindfulness and inner stillness",
              "Balances the nervous system",
              "Promotes emotional release and healing",
              "Improves focus, patience, and self-awareness",
            ],
          ],
          [
            "Physiological Benefits",
            [
              "Stimulates meridian lines and organ health",
              "Balances energy flow (Qi/Prana) in the body",
              "Supports the lymphatic and immune systems",
              "Regulates hormonal function",
            ],
          ],
          [
            "The Heart and Mind Benefits",
            [
              "Deepens the mind-body connection",
              "Encourages compassion and self-acceptance",
              "Develops meditative awareness during movement",
            ],
          ],
        ].map(([label, items]) => (
          <div
            key={label}
            className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm"
          >
            <p className="text-[13px] font-bold text-amber-700 font-sans tracking-wide mb-2">
              {label}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Divider />

      {/* Postures */}
      <SectionTitle>Yin Yoga Postures</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <div className="grid grid-cols-2 gap-x-6">
          {[
            "Anahatasana – Melting Heart",
            "Ankle Stretch",
            "Banana Asana",
            "Butterfly",
            "Half Butterfly",
            "Camel",
            "Cat Pulling Its Tail",
            "Caterpillar",
            "Dangling",
            "Deer",
            "Dragon",
            "Dragon Flying Low",
            "Twisted Dragon",
            "Frog",
            "Happy Baby",
            "Reclining Twist",
            "Saddle",
            "Half Saddle",
            "Shoelace",
            "Snail",
            "Sphinx & Seal",
            "Square",
            "Squat",
            "Straddle (Dragonfly)",
            "Swan",
            "Sleeping Swan",
            "Toe Squat",
            "Shavasana",
          ].map((pose) => (
            <div
              key={pose}
              className="py-2 border-b border-stone-100 last:border-0 text-sm text-gray-700"
            >
              {pose}
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Yang Counter */}
      <SectionTitle>Yang Counter Poses</SectionTitle>
      <BulletCard
        items={[
          "Cat's Breath",
          "Crocodile",
          "Down Dog & All Its Variations",
          "Fish",
          "Hinge",
          "Table Top or Slide",
          "Windshield Wipers",
        ]}
      />

      <Divider />

      {/* Flows */}
      <SectionTitle>Yin Yoga Flows</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <div className="grid grid-cols-2 gap-x-6">
          {[
            "Neck and Upper Body",
            "Spine",
            "Hips",
            "Shoulders, Arms & Wrists, Legs",
            "Liver & Gall Bladder",
            "Menstrual Cramps",
            "Kidney & Urinary Bladder Meridian Lines",
            "Stomach & Spleen",
            "Whole Body",
            "Wall Yin",
            "Lower Back Disorders",
            "Postnatal Yin Yoga",
            "Stressing Our Tissue",
            "Hip & Knee Issues",
          ].map((flow) => (
            <div
              key={flow}
              className="py-2 border-b border-stone-100 last:border-0 text-sm text-gray-700"
            >
              {flow}
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Additional */}
      <SectionTitle>Additional Practices</SectionTitle>
      <BulletCard
        items={["Pranayama", "Mantra Chanting", "Meditation", "Relaxation"]}
      />

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
