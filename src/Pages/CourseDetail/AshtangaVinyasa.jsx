import React from "react";
import { Link } from "react-router-dom";

const asanas = {
  standing: [
    ["Padangusthasana", "Big Toe Pose"],
    ["Padahastasana", "Hand Under Foot Pose"],
    ["Utthita Trikonasana", "Triangle Pose"],
    ["Parivrtta Trikonasana", "Revolving Triangle Pose"],
    ["Utthita Parsvakonasana", "Extended Side Angle Pose"],
    ["Parivritta Parsvakonasana", "Revolving Side Angle Pose"],
    ["Prasarita Padottanasana A–D", "Intense Wide Leg Stretch"],
    ["Parsvottanasana", "Intense Side Stretch Pose"],
    ["Utthita Hasta Padangusthasana", "Hand to Big Toe Pose"],
    ["Ardha Baddha Padmottanasana", "Half Bound Lotus Forward Bend"],
  ],
  sitting: [
    ["Dandasana", "Staff Pose"],
    ["Paschimottanasana A–C", "Seated Forward Bend"],
    ["Purvottanasana", "Intense East Stretch"],
    ["Ardha Baddha Padma Paschimottanasana", "Half Bound Lotus Forward Bend"],
    ["Tiriang Mukhaipada Paschimottanasana", "Three Limbs West Stretch Pose"],
    ["Janu Sirsasana", "Head to Knee Pose"],
    ["Marichyasana", "Sage Marichi's Pose"],
    ["Navasana", "Boat Pose"],
    ["Bhujapidasana", "Shoulder Pressure Posture"],
    ["Kurmasana", "Tortoise Pose"],
    ["Supta Kurmasana", "Sleeping Tortoise"],
    ["Garbha Pindasana", "Embryo Pose"],
    ["Kukkutasana", "Rooster Pose"],
    ["Baddha Konasana A–B", "Bound Angle Pose"],
    ["Upavista Konasana A–B", "Seated Angle Pose"],
    ["Supta Padangustasana", "Reclining Big Toe Posture"],
    ["Ubhaya Padangusthasana", "Both Big Toes Pose"],
    ["Urdhva Mukha Paschimottasana", "Upward Facing Full Forward Bend"],
    ["Setu Bandhasana", "Bridge"],
    ["Urdhva Dhanurasana", "Upward Bow Posture"],
  ],
  finishing: [
    ["Salamba Sarvangasana", "Shoulderstand"],
    ["Halasana", "Plow"],
    ["Karnapidasana", "Ear Pressure Pose"],
    ["Urdhva Padmasana", "Upward Lotus"],
    ["Pindasana", "Embryo Pose"],
    ["Matsyasana", "Fish Pose"],
    ["Uttana Padasana", "Extended Leg Pose"],
    ["Sirsasana", "Headstand"],
    ["Yoga Mudra", "Sealed Yoga Pose"],
    ["Padmasana", "Lotus"],
    ["Uttpluthi", "Uprooting"],
    ["Savasana", "Corpse Pose"],
  ],
};

function Divider() {
  return <hr className="border-amber-100 my-8" />;
}

function SectionTitle({ number, title }) {
  return (
    <h2 className="text-lg font-bold underline underline-offset-4 mb-4 text-gray-900">
      {number}. {title}
    </h2>
  );
}

function SubCard({ label, children }) {
  return (
    <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
      <p className="font-bold text-[13px] text-amber-700 font-sans tracking-wide mb-2">{label}</p>
      {children}
    </div>
  );
}

function AsanaSubheading({ title }) {
  return (
    <p className="text-[11px] font-bold tracking-widest uppercase text-amber-700 font-sans border-b border-amber-100 pb-2 mb-4 mt-2">
      {title}
    </p>
  );
}

function AsanaGrid({ list }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 mb-6">
      {list.map(([name, meaning]) => (
        <div key={name} className="py-2 border-b border-stone-100">
          <span className="text-sm text-gray-900 block">{name}</span>
          <span className="text-xs italic text-gray-400">{meaning}</span>
        </div>
      ))}
    </div>
  );
}

export default function AshtangaVinyasa() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">

      {/* Header */}
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Ashtanga Yoga Teacher Training Course
        </h1>
        <p className="italic text-gray-500">40-Hour Certified Program</p>
      </div>

      <p className="text-gray-700 mb-8">
        This 40-hour Ashtanga Yoga Teacher Training Course offers an immersive
        journey into the traditional Ashtanga Vinyasa system as taught by Sri K.
        Pattabhi Jois. Students will gain a deep understanding of the Primary
        Series, pranayama, bandhas, drishti, and the philosophical foundations
        of this ancient practice.
      </p>

      <Divider />

      {/* Section 1 */}
      <SectionTitle number="1" title="Origins & History of Ashtanga Yoga" />
      <p className="text-gray-700 mb-8">
        An exploration of the lineage, philosophy, and historical roots of the
        Ashtanga Vinyasa system — tracing its origins to the ancient sage Vamana
        Rishi and its modern revival through Sri T. Krishnamacharya and Sri K.
        Pattabhi Jois.
      </p>

      <Divider />

      {/* Section 2 */}
      <SectionTitle number="2" title="Practical Guidelines for Ashtanga Yoga Practice" />
      <p className="text-gray-700 mb-8">
        Essential guidance on self-practice, Mysore style, led classes, and the
        foundational principles that support a safe and sustainable Ashtanga
        practice.
      </p>

      <Divider />

      {/* Section 3 */}
      <SectionTitle number="3" title="Diet for Ashtanga Yoga Practice" />

      <SubCard label="i. Yogic Diet of Non-Violence">
        <p className="text-sm text-gray-700">
          Understanding ahimsa (non-harming) as the basis of conscious eating
          and its role in supporting deep practice.
        </p>
      </SubCard>

      <SubCard label="ii. Diet Guidelines">
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>Sattvic — pure, light, nourishing foods that support clarity</li>
          <li>Rajasic — stimulating foods that increase energy and restlessness</li>
          <li>Tamasic — heavy, dull foods that promote lethargy</li>
        </ul>
      </SubCard>

      <SubCard label="iii. Cleansing and Purification through Diet">
        <p className="text-sm text-gray-700">
          Dietary practices to purify the body and prepare it for advanced
          pranayama and asana practice.
        </p>
      </SubCard>

      <Divider />

      {/* Section 4 */}
      <SectionTitle number="4" title="Pranayama & Bandhas" />

      <SubCard label="i. Awakening the Fire Within">
        <p className="text-sm text-gray-700">
          Understanding tapas — the inner heat generated through consistent
          Ashtanga practice.
        </p>
      </SubCard>

      <SubCard label="ii. The Breath of Life: Ujjayi Breathing (Victorious Breath)">
        <p className="text-sm text-gray-700">
          The foundational breathing technique of Ashtanga — creating an oceanic
          sound that anchors the mind and regulates internal heat throughout the
          practice.
        </p>
      </SubCard>

      <SubCard label="iii. Capturing Prana through the Three Bandhas">
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
          <li>
            <span className="font-semibold text-gray-900">Moola Bandha</span> — Root Lock:
            engaging the perineum to contain and direct prana upward
          </li>
          <li>
            <span className="font-semibold text-gray-900">Uddiyana Bandha</span> — Flying Lock:
            drawing the lower abdomen inward and upward
          </li>
          <li>
            <span className="font-semibold text-gray-900">Jalandhara Bandha</span> — Water Pipe
            Lock: chin-to-chest lock that seals prana in the upper body
          </li>
        </ul>
      </SubCard>

      <Divider />

      {/* Section 5 */}
      <SectionTitle number="5" title="Drishti: Gaze Focusing Technique" />
      <p className="text-gray-700 mb-3">
        The nine gazing points (Nava Drishtis) that direct attention inward and
        deepen concentration:
      </p>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-8">
        <ol className="list-decimal pl-5 space-y-0 text-sm text-gray-700">
          {[
            "Nasagrai — the space just beyond the tip of the nose",
            "Ajna chakra — the space between the eyebrows",
            "Nabi chakra — navel center",
            "Hastagrai — hand",
            "Padhayoragrai — toes",
            "Parshva — far to the right",
            "Parshva — far to the left",
            "Angushtha ma dyai — thumbs",
            "Urdhva drishti / Antara drishti — up to the sky",
          ].map((item, i, arr) => (
            <li
              key={i}
              className={`py-2 ${i < arr.length - 1 ? "border-b border-stone-100" : ""}`}
            >
              {item}
            </li>
          ))}
        </ol>
      </div>

      <Divider />

      {/* Section 6 */}
      <SectionTitle number="6" title="Ashtanga Yoga Primary Series Practice" />

      <AsanaSubheading title="Opening" />
      <ul className="list-disc pl-6 space-y-1 mb-6 text-sm text-gray-700">
        <li>Opening Prayer / Invocation — <em>Vande Gurunam...</em></li>
        <li>Surya Namaskar A (Sun Salutation A)</li>
        <li>Surya Namaskar B (Sun Salutation B)</li>
      </ul>

      <AsanaSubheading title="Standing Asanas" />
      <AsanaGrid list={asanas.standing} />

      <AsanaSubheading title="Sitting & Supine Asanas" />
      <AsanaGrid list={asanas.sitting} />

      <AsanaSubheading title="Finishing Asanas" />
      <AsanaGrid list={asanas.finishing} />

      <Divider />

      <p className="text-center italic text-gray-400 text-sm mb-2">
        Closing Prayer — <em>Svasthi Praja...</em>
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