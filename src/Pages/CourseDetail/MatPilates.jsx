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

export default function PilatesCourse() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      {/* Header */}
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Mat Pilates Yoga Course
        </h1>
        <p className="italic text-gray-500">
          Strength • Stability • Flexibility • Mindful Movement
        </p>
      </div>

      <p className="text-gray-700 mb-8">
        The Mat Pilates Yoga Course at Swarna Kamal Yoga is a comprehensive
        training program designed to build core strength, body awareness,
        posture alignment, and flexibility. This course blends classical Pilates
        techniques with yogic principles, making it ideal for both beginners and
        advanced practitioners.
      </p>

      <Divider />

      <SectionTitle>Course Structure</SectionTitle>

      {/* 1 */}
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 font-sans">
            01
          </span>
          <h3 className="font-bold text-[15px] text-gray-900">
            Warm-Up Sequence
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-3">
          A carefully designed warm-up to activate muscles, improve mobility,
          and prepare the body.
        </p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-sm text-gray-700">
          {[
            "Mountain Pose & Variations (6)",
            "Shoulder Rolls",
            "Side Bends",
            "Arm Circles",
            "Flop Downs",
            "Chair Pose (Variations)",
            "Lunges",
            "Forward Fold & Ragdoll",
            "Downward Facing Dog",
            "Windshield Wipers",
            "Toe Touches",
            "Chest Lift",
            "Wide Leg Forward Bend",
            "Side Leg Kicks",
            "Chest Opener",
            "Plank & Plank Push-Ups",
            "Neck Stretch",
            "Hip & Pelvic Rotations",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      {/* 2 */}
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 font-sans">
            02
          </span>
          <h3 className="font-bold text-[15px] text-gray-900">
            Classical Pilates Postures (With Progressions)
          </h3>
        </div>
        <SubGroup
          label="Core Foundation Series"
          items={[
            "Pilates 100 (Levels 1–3 Variations)",
            "Roll Up (4 Levels)",
            "Roll Over (4 Levels)",
            "One Leg Circles",
            "Rolling Like a Ball",
          ]}
        />
        <SubGroup
          label="Classic Big Five Series"
          items={[
            "One Leg Stretch",
            "Single Straight Leg Stretch (3 Levels)",
            "Double Leg Stretch (2 Levels)",
            "Criss Cross (3 Levels)",
            "Double Straight Leg Stretch (3 Levels)",
          ]}
        />
        <SubGroup
          label="Spine & Balance Work"
          items={[
            "Spine Stretch (2 Levels)",
            "Open Leg Rocker",
            "Corkscrew (3 Levels)",
            "Saw",
            "Spine Twist (3 Levels)",
          ]}
        />
        <SubGroup
          label="Back Extension & Strength"
          items={[
            "Swan Dive (2 Levels)",
            "Single & Double Leg Kicks",
            "Swimming",
          ]}
        />
        <SubGroup
          label="Advanced Core & Control"
          items={[
            "Scissors",
            "Bicycle",
            "Shoulder Bridge",
            "Jackknife",
            "Teaser (2 Levels)",
            "Hip Twist",
          ]}
        />
        <SubGroup
          label="Dynamic & Functional Strength"
          items={[
            "Side Kicks",
            "Leg Pull Front & Back",
            "Boomerang",
            "Seal & Crab",
            "Rocking",
            "Control Balance",
            "Pilates Push-Ups (3 Levels)",
          ]}
        />
      </div>

      {/* 3 */}
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 font-sans">
            03
          </span>
          <h3 className="font-bold text-[15px] text-gray-900">
            Reformer to Mat Pilates Exercises
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-3">
          Bringing advanced reformer movements onto the mat:
        </p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-sm text-gray-700">
          {[
            "Tendon Stretch Footwork",
            "Back Stroke & Coordination",
            "Seated Sway Back & Twists",
            "Tree Crunch Variations",
            "Elephant Planks",
            "Down Dog Leg Lifts",
            "Boat Twists",
            "Spine Massage",
            "Chest Expansion",
            "Camel Pulse",
            "Pulling Straps",
            "Snake & Star",
            "Side Plank Thread the Needle",
            "Rowing Series (1–4 Variations)",
            "V-Up Teaser & Superman Teaser",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      {/* 4 */}
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 font-sans">
            04
          </span>
          <h3 className="font-bold text-[15px] text-gray-900">
            Power Pilates (Advanced Strength & Conditioning)
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-3">
          High-intensity Pilates for strength, endurance, and fat burn:
        </p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-sm text-gray-700 mb-4">
          {[
            "Lunge Crunches",
            "Superman Banana",
            "Oval Crunches",
            "Extended Boat to Wrap",
            "Straddle Crunch Variations",
            "Walk-Out Planks",
            "Spiderman Planks",
            "Pilates Planks",
            "Kick Throughs",
            "Pendulum with Reach",
            "Reverse Swimming",
            "Bridge to Boat",
            "Spiderman & Superman Burpees",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <SubGroup
          label="Side Leg Series (1–6)"
          items={[
            "Circles",
            "Taps",
            "Kicks",
            "Triangles",
            '"U" Swing',
            "Kick Ups",
          ]}
        />
      </div>

      {/* 5 */}
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 font-sans">
            05
          </span>
          <h3 className="font-bold text-[15px] text-gray-900">
            Cool Down & Stretching
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-3">
          Relaxation and flexibility to restore the body:
        </p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-sm text-gray-700">
          {[
            "Child's Pose",
            "Cobra & Upward Facing Dog",
            "Pigeon & Figure Four",
            "Scorpion Stretch",
            "Pyramid Pose",
            "Butterfly",
            "Straddle Splits",
            "Spider Stretch",
            "Lying Spinal Twist",
            "Knees to Chest",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      {/* 6 */}
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 font-sans">
            06
          </span>
          <h3 className="font-bold text-[15px] text-gray-900">
            Special Training Modules
          </h3>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          {[
            "20 Pilates Flow Sequences",
            "Yogalates (30 Sets)",
            "Shiva Sequences",
            "Earth Sequences (Level 1 & 2)",
            "Ring & Ball Pilates Training",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <SectionTitle>Who Can Join?</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        {[
          "Beginners to Advanced Practitioners",
          "Yoga Teachers & Fitness Trainers",
          "Rehabilitation & Wellness Enthusiasts",
          "Anyone looking to improve posture, strength, and flexibility",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Divider />

      <SectionTitle>Course Benefits</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-gray-700 text-sm mb-2">
        {[
          "Strong Core & Better Posture",
          "Improved Flexibility & Mobility",
          "Injury Prevention & Rehabilitation",
          "Enhanced Mind-Body Connection",
          "Professional Teaching Skills",
        ].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Divider />

      <SectionTitle>Why Choose This Course at Swarna Kamal Yoga?</SectionTitle>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        {[
          "Blended approach of Yoga + Pilates",
          "Step-by-step progression (Beginner to Advanced)",
          "Practical teaching methodology",
          "Suitable for both personal practice & professional career",
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
