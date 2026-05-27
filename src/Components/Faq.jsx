import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Who can join Swarna Kamal Yoga Center?",
    answer:
      "Anyone can join — beginners, intermediate, and advanced practitioners. We welcome adults, kids, seniors, and people with health conditions. Our trainers customize sessions to individual needs.",
    to: "/about",
  },
  {
    question: "What are the available batch timings?",
    answer:
      "We offer flexible morning and evening batches on weekdays and weekends. Please contact us on WhatsApp or visit the center to check the latest available slots.",
    to: "/contact",
  },
  {
    question: "Is the Teacher Training Course (TTC) recognized?",
    answer:
      "Yes! All our TTC programs (100Hr, 200Hr, 300Hr) are internationally recognized and follow Yoga Alliance standards, making our certification globally accepted.",
    to: "/courses",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, we offer online yoga sessions. Our flexible learning model allows students from any part of the world to learn from Smita Karakavalasa directly.",
    to: "/courses",
  },
  {
    question: "What is the fee structure for courses?",
    answer:
      "Fee structure varies based on the course type and duration. Please reach out to us via WhatsApp or fill the enquiry form for a detailed fee breakdown and available discounts.",
    to: "/contact",
  },
  {
    question: "How experienced is the faculty?",
    answer:
      "Our founder, Smita Karakavalasa, has over 16 years of dedicated yoga teaching experience and has trained 8000+ of students with warmth and expertise.",
    to: "/about",
  },
];

const faqColors = [
  { bg: "#FEF9EE", border: "#D97706", text: "#92400E" },
  { bg: "#F0FDF4", border: "#16A34A", text: "#14532D" },
  { bg: "#FFF7ED", border: "#EA580C", text: "#7C2D12" },
  { bg: "#EFF6FF", border: "#2563EB", text: "#1E3A8A" },
  { bg: "#FDF4FF", border: "#9333EA", text: "#581C87" },
  { bg: "#F0FDFA", border: "#0D9488", text: "#134E4A" },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredFaq, setHoveredFaq] = useState(null);

  return (
    <div
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-stone-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('God.webp')" }}
    >
      <div className="max-w-3xl mx-auto p-4 sm:p-6 rounded-xl">
        <FadeIn>
          <p className="text-center text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
            Got Questions?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, i) => {
            const color = faqColors[i % faqColors.length];
            const isOpen = openFaq === i;
            const isHov = hoveredFaq === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  onMouseEnter={() => setHoveredFaq(i)}
                  onMouseLeave={() => setHoveredFaq(null)}
                  style={{
                    backgroundColor: isOpen || isHov ? color.bg : "#ffffff",
                    borderLeft: `4px solid ${isOpen || isHov ? color.border : "#e5e7eb"}`,
                    transition: "all 0.3s ease",
                  }}
                  className="rounded-xl shadow-sm cursor-pointer px-5 sm:px-6 py-4 sm:py-5 select-none"
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3
                      className="font-semibold text-base sm:text-lg pr-2"
                      style={{
                        color: isOpen || isHov ? color.text : "#1f2937",
                        transition: "color 0.3s",
                      }}
                    >
                      {faq.question}
                    </h3>
                    <span
                      className="text-2xl font-light shrink-0"
                      style={{
                        color: color.border,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                        transition: "transform 0.3s",
                      }}
                    >
                      +
                    </span>
                  </div>
                  <div
                    style={{
                      maxHeight: isOpen ? "220px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                    {isOpen && (
                      <Link
                        to={faq.to}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block mt-3 text-xs font-bold uppercase tracking-wider border-b-2 pb-0.5"
                        style={{
                          color: color.border,
                          borderColor: color.border,
                        }}
                      >
                        Know More →
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;