// import { Link } from "react-router-dom";

// export default function PilatesCourse() {
//   return (
//     <div className="max-w-3xl mx-auto px-5 py-10 bg-white text-gray-900 font-sans text-[15px] leading-relaxed pt-15 border-t border-white/2">
//       {/* Header */}
//       <p className="text-sm text-gray-500 mb-1 tracking-wide">
//         Swarna Kamal Yoga
//       </p>
//       <h1 className="text-2xl font-bold underline mb-1">
//         Mat Pilates Yoga Course
//       </h1>
//       <p className="italic text-gray-600 mb-4">
//         Strength • Stability • Flexibility • Mindful Movement
//       </p>
//       <p className="text-gray-800 mb-6">
//         The Mat Pilates Yoga Course at Swarna Kamal Yoga is a comprehensive
//         training program designed to build core strength, body awareness,
//         posture alignment, and flexibility. This course blends classical Pilates
//         techniques with yogic principles, making it ideal for both beginners and
//         advanced practitioners.
//       </p>

//       <hr className="border-gray-200 my-7" />

//       {/* Course Structure */}
//       <h2 className="text-lg font-bold underline mb-4">Course Structure</h2>

//       {/* 1. Warm-Up */}
//       <h3 className="font-bold mb-1">1. Warm-Up Sequence</h3>
//       <p className="text-gray-800 mb-2">
//         A carefully designed warm-up to activate muscles, improve mobility, and
//         prepare the body.
//       </p>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>Mountain Pose &a Variations (6)</li>
//         <li>Shoulder Rolls</li>
//         <li>Side Bends</li>
//         <li>Arm Circles</li>
//         <li>Flop Downs</li>
//         <li>Chair Pose (Variations)</li>
//         <li>Lunges</li>
//         <li>Forward Fold & Ragdoll</li>
//         <li>Downward Facing Dog</li>
//         <li>Windshield Wipers</li>
//         <li>Toe Touches</li>
//         <li>Chest Lift</li>
//         <li>Wide Leg Forward Bend</li>
//         <li>Side Leg Kicks</li>
//         <li>Chest Opener</li>
//         <li>Plank & Plank Push-Ups</li>
//         <li>Neck Stretch</li>
//         <li>Hip & Pelvic Rotations</li>
//       </ul>

//       {/* 2. Classical Pilates */}
//       <h3 className="font-bold mb-2">
//         2. Classical Pilates Postures (With Progressions)
//       </h3>

//       <p className="font-semibold text-gray-800 mb-1">Core Foundation Series</p>
//       <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-1">
//         <li>Pilates 100 (Levels 1–3 Variations)</li>
//         <li>Roll Up (4 Levels)</li>
//         <li>Roll Over (4 Levels)</li>
//         <li>One Leg Circles</li>
//         <li>Rolling Like a Ball</li>
//       </ul>

//       <p className="font-semibold text-gray-800 mb-1">
//         Classic Big Five Series
//       </p>
//       <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-1">
//         <li>One Leg Stretch</li>
//         <li>Single Straight Leg Stretch (3 Levels)</li>
//         <li>Double Leg Stretch (2 Levels)</li>
//         <li>Criss Cross (3 Levels)</li>
//         <li>Double Straight Leg Stretch (3 Levels)</li>
//       </ul>

//       <p className="font-semibold text-gray-800 mb-1">Spine & Balance Work</p>
//       <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-1">
//         <li>Spine Stretch (2 Levels)</li>
//         <li>Open Leg Rocker</li>
//         <li>Corkscrew (3 Levels)</li>
//         <li>Saw</li>
//         <li>Spine Twist (3 Levels)</li>
//       </ul>

//       <p className="font-semibold text-gray-800 mb-1">
//         Back Extension & Strength
//       </p>
//       <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-1">
//         <li>Swan Dive (2 Levels)</li>
//         <li>Single & Double Leg Kicks</li>
//         <li>Swimming</li>
//       </ul>

//       <p className="font-semibold text-gray-800 mb-1">
//         Advanced Core & Control
//       </p>
//       <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-1">
//         <li>Scissors</li>
//         <li>Bicycle</li>
//         <li>Shoulder Bridge</li>
//         <li>Jackknife</li>
//         <li>Teaser (2 Levels)</li>
//         <li>Hip Twist</li>
//       </ul>

//       <p className="font-semibold text-gray-800 mb-1">
//         Dynamic & Functional Strength
//       </p>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>Side Kicks</li>
//         <li>Leg Pull Front & Back</li>
//         <li>Boomerang</li>
//         <li>Seal & Crab</li>
//         <li>Rocking</li>
//         <li>Control Balance</li>
//         <li>Pilates Push-Ups (3 Levels)</li>
//       </ul>

//       {/* 3. Reformer to Mat */}
//       <h3 className="font-bold mb-2">3. Reformer to Mat Pilates Exercises</h3>
//       <p className="text-gray-800 mb-2">
//         Bringing advanced reformer movements onto the mat:
//       </p>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>Tendon Stretch Footwork</li>
//         <li>Back Stroke & Coordination</li>
//         <li>Seated Sway Back & Twists</li>
//         <li>Tree Crunch Variations</li>
//         <li>Elephant Planks</li>
//         <li>Down Dog Leg Lifts</li>
//         <li>Boat Twists</li>
//         <li>Spine Massage</li>
//         <li>Chest Expansion</li>
//         <li>Camel Pulse</li>
//         <li>Pulling Straps</li>
//         <li>Snake & Star</li>
//         <li>Side Plank Thread the Needle</li>
//         <li>Rowing Series (1–4 Variations)</li>
//         <li>V-Up Teaser & Superman Teaser</li>
//       </ul>

//       {/* 4. Power Pilates */}
//       <h3 className="font-bold mb-2">
//         4. Power Pilates (Advanced Strength & Conditioning)
//       </h3>
//       <p className="text-gray-800 mb-2">
//         High-intensity Pilates for strength, endurance, and fat burn:
//       </p>
//       <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-1">
//         <li>Lunge Crunches</li>
//         <li>Superman Banana</li>
//         <li>Oval Crunches</li>
//         <li>Extended Boat to Wrap</li>
//         <li>Straddle Crunch Variations</li>
//         <li>Walk-Out Planks</li>
//         <li>Spiderman Planks</li>
//         <li>Pilates Planks</li>
//         <li>Kick Throughs</li>
//         <li>Pendulum with Reach</li>
//         <li>Reverse Swimming</li>
//         <li>Bridge to Boat</li>
//         <li>Spiderman & Superman Burpees</li>
//       </ul>

//       <p className="font-semibold text-gray-800 mb-1">Side Leg Series (1–6)</p>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>Circles</li>
//         <li>Taps</li>
//         <li>Kicks</li>
//         <li>Triangles</li>
//         <li>"U" Swing</li>
//         <li>Kick Ups</li>
//       </ul>

//       {/* 5. Cool Down */}
//       <h3 className="font-bold mb-2">5. Cool Down & Stretching</h3>
//       <p className="text-gray-800 mb-2">
//         Relaxation and flexibility to restore the body:
//       </p>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>Child's Pose</li>
//         <li>Cobra & Upward Facing Dog</li>
//         <li>Pigeon & Figure Four</li>
//         <li>Scorpion Stretch</li>
//         <li>Pyramid Pose</li>
//         <li>Butterfly</li>
//         <li>Straddle Splits</li>
//         <li>Spider Stretch</li>
//         <li>Lying Spinal Twist</li>
//         <li>Knees to Chest</li>
//       </ul>

//       {/* 6. Special Training */}
//       <h3 className="font-bold mb-2">6. Special Training Modules</h3>
//       <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-1">
//         <li>20 Pilates Flow Sequences</li>
//         <li>Yogalates (30 Sets)</li>
//         <li>Shiva Sequences</li>
//         <li>Earth Sequences (Level 1 & 2)</li>
//         <li>Ring & Ball Pilates Training</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Who Can Join */}
//       <h2 className="text-lg font-bold underline mb-3">Who Can Join?</h2>
//       <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
//         <li>Beginners to Advanced Practitioners</li>
//         <li>Yoga Teachers & Fitness Trainers</li>
//         <li>Rehabilitation & Wellness Enthusiasts</li>
//         <li>Anyone looking to improve posture, strength, and flexibility</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Course Benefits */}
//       <h2 className="text-lg font-bold underline mb-3">Course Benefits</h2>
//       <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
//         <li>Strong Core & Better Posture</li>
//         <li>Improved Flexibility & Mobility</li>
//         <li>Injury Prevention & Rehabilitation</li>
//         <li>Enhanced Mind-Body Connection</li>
//         <li>Professional Teaching Skills</li>
//       </ul>

//       <hr className="border-gray-200 my-7" />

//       {/* Why Choose */}
//       <h2 className="text-lg font-bold underline mb-3">
//         Why Choose This Course at Swarna Kamal Yoga?
//       </h2>
//       <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
//         <li>Blended approach of Yoga + Pilates</li>
//         <li>Step-by-step progression (Beginner to Advanced)</li>
//         <li>Practical teaching methodology</li>
//         <li>Suitable for both personal practice & professional career</li>
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
