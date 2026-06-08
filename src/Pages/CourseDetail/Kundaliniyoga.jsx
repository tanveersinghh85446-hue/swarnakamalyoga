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

function SubCard({ label, children }) {
  return (
    <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm mb-3">
      <p className="font-bold text-[13px] text-amber-700 font-sans tracking-wide mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="text-sm text-gray-700">
          ✓ {item}
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function KundaliniYoga() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 bg-[#fffdf9] text-gray-900 text-[15px] leading-relaxed font-serif">
      {/* Header */}
      <div className="border-l-[3px] border-amber-500 pl-4 mb-8">
        <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-1">
          Swarna Kamal Yoga
        </p>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-1 text-gray-900">
          Kundalini Yoga Teaching Trainer Course
        </h1>
        <p className="italic text-gray-500">Awaken the Dormant Energy Within</p>
      </div>

      <p className="text-gray-700 mb-8">
        Kundalini Yoga, often called the "yoga of awareness," is a powerful
        practice that combines physical postures, breathwork, meditation, and
        chanting to awaken the dormant energy believed to reside at the base of
        the spine. This course at Swarna Kamal Yoga blends traditional tantric
        philosophy with practical techniques to help you experience profound
        transformation — physically, mentally, and spiritually.
      </p>

      <Divider />

      <SectionTitle>Kundalini & Yoga</SectionTitle>
      <BulletList
        items={[
          "Kundalini has origins in tantric philosophy.",
          "No mention in PYS (Patanjali Yoga Sutras).",
          "Kundalini yoga is the process of bringing together two opposite poles of energy in the body so that they meet in Muladhara and release the inner Kundalini Shakti.",
        ]}
      />

      <Divider />

      <SectionTitle>Approaches to Kundalini Awakening</SectionTitle>
      <SubCard label="1. Active Approach">
        <p className="text-sm text-gray-700">
          Systematic physical exercises and techniques of concentration,
          visualization, pranayama and meditation under the guidance of a
          competent teacher.
        </p>
      </SubCard>
      <SubCard label="2. Passive Approach">
        <BulletList
          items={[
            "Path of surrender where one lets go of all the impediments to the awakening rather than trying to actively awaken Kundalini.",
            "A chief part of the passive approach is Shaktipat where one individual's Kundalini is awakened by another who already has the experience.",
            "Shaktipat only raises Kundalini temporarily but gives the student an experience to use as a basis.",
          ]}
        />
      </SubCard>

      <Divider />

      <SectionTitle>Kundalini Anatomy</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-sm text-gray-700">
          {[
            "Nadis / Energy Channels",
            "Chakras",
            "Panchakosha (5 Sheaths)",
            "Respiratory System",
            "Nervous System",
            "Tri Dosha",
            "Dhatus",
            "Vayu",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <SectionTitle>Kundalini Tantra Philosophy</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-sm text-gray-700">
          {[
            "Introduction to Kundalini Yoga",
            "Definition of the Chakra & Understanding the Chakra",
            "Mooladhara Chakra",
            "Swadhisthan Chakra",
            "Manipura Chakra",
            "Anahata Chakra",
            "Vishuddhi Chakra",
            "Aagya Chakra",
            "Sahasrar Chakra",
            "Kundalini Awakening Process",
            "Mantra",
            "Shakti Pata",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <SectionTitle>
        Kundalini Asthi Granthi Kriya (Joints Movements)
      </SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-sm text-gray-700">
          {[
            "Warm-up Exercises",
            "Feet and ankle exercises",
            "Knee movement",
            "Hip movement and rotation",
            "Leg cradle",
            "Side bending",
            "Arms movement",
            "Arm swing",
            "Elbow movement",
            "Wrist and hand movement",
            "Neck exercises",
            "Chin, jaw, mouth, tongue, eye, and head exercises",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <SectionTitle>Kundalini Yoga Asana</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <div className="flex flex-col gap-1">
          {[
            "Bhujangasana (Cobra pose — to awaken the heart chakra)",
            "Prarthanasana (The prayer pose — to have reverence)",
            "Padahastasana (The standing forward bend — to awake Muladhara Chakra)",
            "Tadasana (The Tree Pose — for nourishing our spiritual aspiration)",
            "Trikonasana (The Triangle pose)",
            "Sahaja Agnisar Dhauti (Awakening inner fire — in Manipura Chakra)",
            "Vajrasana (Thunderbolt pose — to cleanse Vajra Nadi to promote ascendance of the sexual energy towards upper chakras)",
            "Shalabhasana (The Locust pose — increases the blood supply to the sacrum and lower back)",
            "Dhanurasana (The Bow pose — remove constipation and improve digestion)",
            "Ardha Matsyendrasana (The Lord of the Fishes Pose)",
            "Uddiyana Bandha (Upward flying lock)",
            "Paschimottanasana (The back stretching pose)",
            "Janushirshasana (The head to knee pose — eliminate laziness and weakness)",
            "Ushtrasana (The Camel Pose — arousing Manipura chakra)",
            "Naukasana (The boat pose — alleviates anxiety and nervousness)",
            "Supta Vajrasana (The Reclining Thunderbolt pose — guides the sexual energy through Vajra Nadi towards the brain)",
            "Garudasana (The Eagle pose — improve balance and co-ordination)",
            "Nauli Kriya (The Navel Cleansing — balance the three doshas of the body Kapha-Vata-Pitta)",
            "Ardha Shirshasana (Half headstand — rejuvenate the brain cells)",
            "Shashankasana (The Hare pose — remove stress, arrogance, selfishness, and anger)",
            "Pavanamuktasana (Massages the internal organ and decongests the liver and sexual organs)",
          ].map((item) => (
            <span
              key={item}
              className="text-sm text-gray-700 py-1 border-b border-stone-100 last:border-0"
            >
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      <Divider />

      <SectionTitle>Surya Namaskar (Sun Salutation) — Meditation</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <BulletList
          items={[
            "Correct Sitting",
            "Correct Breathing",
            "Chakra Breathing Meditation",
            "Mantra Meditation",
          ]}
        />
      </div>

      <Divider />

      <SectionTitle>Kriya Yoga Practices for Kundalini Awakening</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-sm text-gray-700">
          {[
            "Rules and Preparation",
            "Postures",
            "Chakra Sadhana",
            "Practices to awaken Ajna Chakra",
            "Practices to awake Mooladhar Chakra",
            "Practices to awake Swadhisthan Chakra",
            "Practices to awake Manipura Chakra",
            "Practices to awake Anahata Chakra",
            "Practices to awake Vishuddhi Chakra",
            "Practices to awake Bindu",
            "Practices for Chakra Awareness",
            "Moola Shakti Bandha (Root Energy Lock)",
            "Uddiyana Shakti Bandha (Abdomen Energy Lock)",
            "Jalandhar Shakti Bandha (Throat Energy Lock)",
            "Maha Shakti Bandha (Great Energy Lock)",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <SectionTitle>Tantra Pranayama Kriya</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <BulletList
          items={[
            "Introduction to Prana and Pranayama",
            "Individual and universal prana body (health)",
            "Natural breathing (for peace)",
            "Abdominal or diaphragmatic breathing (expansion and healing all internal organs)",
            "Thoracic/Chest Breathing (middle chest expansion)",
            "Clavicular breathing (upper lungs expansion)",
            "Yogic breathing / Complete breathing (complete lungs therapy)",
            "Alternative Nostril breathing — Nadishodhanam (balance and peace)",
            "Cooling breathing — Sheetali and Shikari (fever and reduce anger)",
            "Bhramari Pranayama (for memory and stress relief)",
            "Ujjayi Pranayama (healing throat and prolong concentration)",
            "Bhastrika Pranayama (for complete health)",
            "Kapalbhati (intense cleansing and healing stress)",
            "Moorchha Pranayama (for Ecstasy)",
            "Surya Bheda Pranayama (heating and digestive)",
            "Chandra Bheda Pranayama (activate parasympathetic system)",
          ]}
        />
      </div>

      <Divider />

      <SectionTitle>Basic Sanskrit and Chakra Sound</SectionTitle>
      <SubCard label="Bija Mantra of Chakras">
        <div className="flex flex-wrap gap-3">
          {["Lam", "Vam", "Ram", "Yam", "Ham", "Om"].map((m) => (
            <span
              key={m}
              className="text-sm font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200"
            >
              {m}
            </span>
          ))}
        </div>
      </SubCard>
      <SubCard label="Sanskrit Syllable">
        <BulletList
          items={["Vowel", "Consonant", "Sound in different Chakras"]}
        />
      </SubCard>

      <Divider />

      <SectionTitle>Mantra Healing</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <CheckList
          items={[
            "Mantra for leading darkness to light (Asato Mam Sadgamaya)",
            "Mantra for Surrender (Twameva Mata)",
            "Mantra for Healing and fearless of death (Maha Mrityunjaya)",
            "Guru Mantra (Gurur Brahma)",
            "Mantra for removing the obstacle of life (Bakratunda Mahakaya)",
            "Mantra for healing Energy (Pranaya Swaha-Apanaya..)",
            "Mantra for student and teacher (Om Sahana Vavatu)",
            "Morning Prayer (Karagre Vacate)",
            "Mantra for world peace (Lokah Samastah)",
          ]}
        />
      </div>

      <Divider />

      <SectionTitle>Mudras: Kundalini Awakening Gestures</SectionTitle>
      <SubCard label="About Mudras">
        <BulletList
          items={[
            "Origin of Mudras",
            "What is a Mudra",
            "Why hand Mudras",
            "Benefits of Mudra practice",
            "Five-element theory",
            "Acupressure and Scientific theory",
          ]}
        />
      </SubCard>
      <SubCard label="General Mudras">
        <CheckList
          items={[
            "Prana Vayu Mudra (for poor vision and increase confidence)",
            "Mritsanjeevani Mudra (prevent heart attack and depression)",
            "Samana Vaayu Mudra (reduces the formation of gases and acids and cure liver)",
            "Udana Vayu Mudra (improve the power of speech and generate vitality)",
            "Vyana Vayu Mudra (for high BP, relax mental nerves)",
          ]}
        />
      </SubCard>
      <SubCard label="Therapeutic Mudras">
        <CheckList
          items={[
            "Vayu Mudra (release extra wind from the stomach)",
            "Agni Mudra (helps dissolving extra fat)",
            "Prithivi Mudra (boost blood circulation)",
            "Varun Mudra (relieving dehydration and stomach infection)",
            "Akash Mudra (activate calcium and phosphorus so good for bones)",
          ]}
        />
      </SubCard>
      <SubCard label="Spiritual Mudras">
        <CheckList
          items={[
            "Gyan Mudra (for innate wisdom)",
            "Abhaya Mudra (for courage and strength)",
            "Dhyana Mudra (concentration and spiritual awakening)",
          ]}
        />
      </SubCard>

      <Divider />

      <SectionTitle>Kundalini and Tantra Meditations</SectionTitle>
      <SubCard label="Basics of Meditation">
        <BulletList
          items={[
            "How to sit in meditation",
            "How to breathe in meditation",
            "How to relax in the meditation",
            "How to concentrate in meditation",
          ]}
        />
      </SubCard>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <CheckList
          items={[
            "Mantra meditation (improve anxiety)",
            "Breath awareness meditation (improving willpower)",
            "Obstacles in meditation",
            "Om meditation (energy booster)",
            "Meditation and stress management",
            "Trataka — Candlelight meditation (improve eyesight and courage)",
            "Dynamic meditation (emotional block removing)",
            "Kundalini meditation (awakening sleeping Kundalini energy)",
            "Silence Meditation (for enlightenment and peace)",
          ]}
        />
      </div>

      <Divider />

      <SectionTitle>Yoga Nidra</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <BulletList
          items={[
            "Subtle body awakening Yoga Nidra",
            "31 point blue star Yoga Nidra",
            "Types of Relaxations",
          ]}
        />
      </div>

      <Divider />

      <SectionTitle>Benefits of Kundalini Yoga</SectionTitle>
      <p className="text-gray-700 mb-3">
        The divine practice of Kundalini Yoga comes up with lots of benefits.
        Some of these are:
      </p>
      <div className="flex flex-col gap-3">
        {[
          [
            "Improved Mental Clarity",
            "The practice enhances focus, mental clarity, and cognitive functioning, helping to remove mental fog and confusion.",
          ],
          [
            "Emotional Balance",
            "Through meditation and breathwork, practitioners can manage emotions more effectively, reducing mood swings and improving emotional stability.",
          ],
          [
            "Awakens Consciousness",
            "With consistent long-term practice it is possible to awaken your Kundalini energy, fostering spiritual growth and awareness.",
          ],
          [
            "Increased Intuition",
            "As your awareness grows, so does your intuitive ability, helping you make better decisions and trust your inner guidance.",
          ],
          [
            "Connection to Higher Self",
            "It facilitates a deeper connection with your true self, helping you align with your life's purpose.",
          ],
          [
            "Balance of Chakras",
            "Kundalini yoga works on balancing and energizing the body's chakras, leading to overall physical, mental, and emotional health.",
          ],
          [
            "Increased Self-Awareness",
            "The practice helps you become more aware of your thoughts, habits, and behaviors, allowing for personal growth and transformation.",
          ],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="bg-white border border-amber-100 rounded-lg px-5 py-3 shadow-sm"
          >
            <span className="font-bold text-gray-900 text-sm">{title}: </span>
            <span className="text-sm text-gray-700">{desc}</span>
          </div>
        ))}
      </div>

      <Divider />

      <SectionTitle>What This Course Includes</SectionTitle>
      <div className="bg-white border border-amber-100 rounded-lg px-5 py-4 shadow-sm">
        <BulletList
          items={[
            "Kundalini Practice (to awake the hidden energy) and Tantra practices (to unite and balance the Shiva and Shakti)",
            "Hatha Yoga (for physical health and flexibility) and Pranayama (for energy balance and proper breathing)",
            "Meditation (for calming and relaxing the mind to achieve stillness and stability in our life)",
            "Bandhas (for awakening the hidden energy and channeling the energy in the proper direction)",
            "Mudras (Yogic gestures that help you to save your energy so that you can make yourself always happy)",
            "Philosophy (you can understand your life better and the function of Kundalini Shakti)",
            "Satkarma (Detox cleansing will help you to make yourself lighter and open to awake the energy)",
          ]}
        />
      </div>

      <Divider />

      <SectionTitle>Why Choose Swarna Kamal Yoga?</SectionTitle>
      <p className="mb-2 text-gray-700">At Swarna Kamal Yoga, we combine:</p>
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        <li>Traditional Tantric & Yogic Knowledge</li>
        <li>Modern Scientific Approach</li>
        <li>Practical Teaching Experience</li>
      </ul>
      <p className="text-gray-700">
        Our focus is not just learning — but{" "}
        <strong className="text-gray-900">
          real transformation and spiritual awakening.
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
