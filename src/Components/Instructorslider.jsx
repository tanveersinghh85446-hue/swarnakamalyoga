import React, { useState, useEffect, useRef } from "react";

const instructors = [
  {
    name: "Sarita Sahu",
    img: "Sarita Sahu.AVIF",
    role: "Yoga Instructor",
    location: "Bengaluru, India",
    experience: "10+ Years Experience",
  },
  {
    name: "P. Shree Vilasitha",
    img: "P.Shree.Vilasith.AVIF",
    role: "Yoga Instructor",
    location: "Bengaluru, India",
    experience: "4+ Years Experience",
  },
  {
    name: "Dasari Nanditha",
    img: "Dasari Nanditha.AVIF",
    role: "Yoga Nutrition Expert",
    location: "Bengaluru, India",
    experience: "10+ Years Experience",
  },
  {
    name: "Sangeeta Sil",
    img: "Sangeeta Sil.AVIF",
    role: "Yoga & Fitness Instructor",
    location: "Bengaluru, India",
    experience: "13 Years Experience",
  },
  {
    name: "Karan",
    img: "Karan.AVIF",
    role: "Yoga Instructor",
    location: "Bengaluru, India",
    experience: "5+ Years Experience",
  },
  {
    name: "Deevananthan Siranjeevi",
    img: "Deevananthan.AVIF",
    role: "Mat Pilates & Yoga Instructor",
    location: "Malaysia",
    experience: "Clinical Therapist",
  },
  {
    name: "Malvika Malini",
    img: "Malvika.AVIF",
    role: "Yoga Instructor",
    location: "Bengaluru, India",
    experience: "Holistic Wellness Guide",
  },
  {
    name: "Vadlamani Sridevi",
    img: "Vadlamani Sridevi.AVIF",
    role: "Yoga Instructor & Therapist",
    location: "Bengaluru, India",
    experience: "14+ Years Experience",
  },
  {
    name: "Vidita Majmudar",
    img: "Vidita Majmudar.AVIF",
    role: "Yoga Instructor",
    location: "Gujarat, India",
    experience: "20+ Years Experience",
  },
  {
    name: "Suhani Dakh",
    img: "Suhani Dakh.AVIF",
    role: "Yoga Instructor",
    location: "Bengaluru, India",
    experience: "2+ Years Experience",
  },
  {
    name: "Nivedita Sharma",
    img: "Nivedita Sharma.AVIF",
    role: "Yoga Trainer & Therapist",
    location: "Bengaluru, India",
    experience: "Holistic Wellness Focus",
  },
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export default function InstructorSlider() {
  const isMobile = useIsMobile();
  const chunkSize = isMobile ? 1 : 3;
  const slides = chunkArray(instructors, chunkSize);

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  // Reset to 0 when chunk size changes (screen resize)
  useEffect(() => {
    setCurrent(0);
  }, [chunkSize]);

  const startTimer = (slideCount) => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goTo(1, slideCount);
    }, 3500);
  };

  useEffect(() => {
    startTimer(slides.length);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line
  }, [current, slides.length]);

  const goTo = (dir, slideCount) => {
    const total = slideCount ?? slides.length;
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((p) => (p + dir + total) % total);
      setAnimating(false);
    }, 400);
    startTimer(total);
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
            Our Team
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Meet Our Expert Instructors
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Dedicated teachers blending tradition, science & transformation
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className={`grid gap-5 sm:gap-6 ${
              isMobile ? "grid-cols-1" : "grid-cols-3"
            }`}
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction > 0 ? "-30px" : "30px"})`
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {slides[current].map((instructor, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-red-100 flex flex-col items-center p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Photo */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden  shadow-md mb-4">
                  <img
                    src={instructor.img}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h3 className="text-black font-bold text-lg text-center leading-tight">
                  {instructor.name}
                </h3>

                {/* Role */}
                <p className="text-amber-500 font-semibold text-xs text-center mt-1 uppercase tracking-wide">
                  {instructor.role}
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-amber-400 my-3 rounded-full" />

                {/* Location */}
                <p className="text-black text-sm text-center flex items-center gap-1">
                  <span>📍</span> {instructor.location}
                </p>

                {/* Experience */}
                <div className="mt-3 bg-amber-100 border border-amber-200 rounded-full px-4 py-1.5">
                  <p className="text-amber-600 text-xs font-semibold text-center">
                    {instructor.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
                startTimer(slides.length);
              }}
              className={` ${
                i === current ? "w-6 bg-amber-400" : "w-2 bg-amber-200"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* View All link */}
        <div className="text-center mt-8">
          <a
            href="/team"
            className="inline-block bg-amber-500 hover:bg-yellow-400 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 transform shadow"
          >
            Meet All Instructors →
          </a>
        </div>
      </div>
    </div>
  );
}
