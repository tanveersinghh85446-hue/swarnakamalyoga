// import { useEffect, useState } from "react";

// function SplashScreen({ onFinish }) {
//   const [step, setStep] = useState(0);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timers = [
//       setTimeout(() => setStep(1), 400),
//       setTimeout(() => setStep(2), 1000),
//       setTimeout(() => setStep(3), 2200),
//       setTimeout(() => setStep(4), 3000),
//       setTimeout(() => {
//         setVisible(false);
//         onFinish();
//       }, 3700),
//     ];
//     return () => timers.forEach(clearTimeout);
//   }, [onFinish]);

//   if (!visible) return null;

//   return (
//     <div
//       className={`fixed inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
//         step === 4 ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//       style={{
//         background:
//           "linear-gradient(135deg, #4a0080 0%, #6b21a8 45%, #1a0030 100%)",
//         zIndex: 9999,
//       }}
//     >
//       {/* Background glow */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.08) 0%, transparent 70%)",
//         }}
//       />

//       {/* Logo */}
//       <img
//         src="/Start.AVIF"
//         alt="Swarna Kamal Logo"
//         className={`relative z-10 mb-7 h-50 w-200 transition-all duration-700 ${
//           step >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75" // 
//         }`}
//         style={{
//           width: "clamp(110px, 22vw, 160px)",
//           filter: "drop-shadow(0 0 24px rgba(255,255,255,0.35))",
//         }}
//       />

//       {/* SWARNA KAMAL heading */}
//       <h1
//         className={`relative z-10 text-center transition-all duration-700 ${
//           step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//         style={{
//           fontFamily: "'Georgia', serif",
//           fontSize: "clamp(1.9rem, 7vw, 3.4rem)",
//           fontWeight: 700,
//           color: "#ffffff",
//           letterSpacing: "6px",
//           lineHeight: 1.1,
//           margin: 0,
//         }}
//       >
//         SWARNA KAMAL
//       </h1>

//       {/* YOGA CENTER subtitle */}
//       <p
//         className={`relative z-10 text-center transition-all duration-700 delay-75 ${
//           step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//         style={{
//           fontFamily: "'Georgia', serif",
//           fontSize: "clamp(0.9rem, 3vw, 1.35rem)",
//           fontWeight: 400,
//           color: "rgba(255,255,255,0.72)",
//           letterSpacing: "10px",
//           margin: "8px 0 0",
//         }}
//       >
//         YOGA CENTER
//       </p>

//       {/* Loader bar */}
//       <div
//         className="relative z-10 mt-10 rounded-full overflow-hidden"
//         style={{
//           width: "clamp(160px, 40vw, 220px)",
//           height: "2px",
//           background: "rgba(255,255,255,0.18)",
//         }}
//       >
//         <div
//           className="h-full rounded-full"
//           style={{
//             background: "rgba(255,255,255,0.75)",

//             animation: step >= 1 ? "loader 2.6s linear forwards" : "none",
//           }}
//         />
//       </div>

//       {/* Tagline */}
//       <p
//         className={`relative uppercase z-10 mt-4 transition-all duration-700 ${
//           step >= 3 ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           color: "rgba(255,255,255,0.35)",
//           fontSize: "11px",
//           letterSpacing: "3px",
//         }}
//       >
//         Transform Your Mind Body Soul
//       </p>

//       <style>{`
//         @keyframes loader {
//           0%   { width: 0%; }
//           100% { width: 100%; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default SplashScreen;





import { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 900),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => setStep(4), 2800),
      setTimeout(() => {
        setVisible(false);
        onFinish();
      }, 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
        step === 4 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(160deg, #2d0060 0%, #5b1a9e 40%, #0d001f 100%)",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Animated radial glow rings */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "min(500px, 130vw)",
          height: "min(500px, 130vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(180,100,255,0.18) 0%, transparent 70%)",
          animation: "pulse-glow 3s ease-in-out infinite",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "min(320px, 90vw)",
          height: "min(320px, 90vw)",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.07)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "ring-expand 3s ease-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "min(480px, 120vw)",
          height: "min(480px, 120vw)",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "ring-expand 3s ease-out 0.8s infinite",
        }}
      />

      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,151,58,0.6), transparent)",
          opacity: step >= 1 ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center px-6 w-full">

        {/* Logo */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? "scale(1) translateY(0)" : "scale(0.8) translateY(10px)",
            transition: "opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1)",
            marginBottom: "clamp(16px, 4vw, 28px)",
          }}
        >
          <img
            src="/Start.AVIF"
            alt="Swarna Kamal Logo"
            style={{
              width: "clamp(90px, 24vw, 140px)",
              height: "auto",
              filter: "drop-shadow(0 0 28px rgba(255,255,255,0.3)) drop-shadow(0 0 8px rgba(200,151,58,0.4))",
            }}
          />
        </div>

        {/* Thin gold divider above name */}
        <div
          style={{
            width: step >= 2 ? "clamp(40px, 12vw, 60px)" : "0px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(200,151,58,0.8), transparent)",
            transition: "width 0.6s ease",
            marginBottom: "clamp(10px, 2.5vw, 16px)",
          }}
        />

        {/* SWARNA KAMAL */}
        <h1
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(1.6rem, 7.5vw, 3.2rem)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "clamp(4px, 1.5vw, 8px)",
            lineHeight: 1.1,
            margin: 0,
            textAlign: "center",
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            textShadow: "0 0 40px rgba(200,151,58,0.3)",
          }}
        >
          SWARNA KAMAL
        </h1>

        {/* YOGA CENTER */}
        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(0.65rem, 2.8vw, 1.1rem)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "clamp(6px, 2.5vw, 12px)",
            margin: "clamp(4px, 1vw, 8px) 0 0",
            textAlign: "center",
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          YOGA CENTER
        </p>

        {/* Gold divider below name */}
        <div
          style={{
            width: step >= 2 ? "clamp(40px, 12vw, 60px)" : "0px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(200,151,58,0.8), transparent)",
            transition: "width 0.6s ease 0.2s",
            marginTop: "clamp(10px, 2.5vw, 16px)",
            marginBottom: "clamp(20px, 5vw, 36px)",
          }}
        />

        {/* Loader bar */}
        <div
          style={{
            width: "clamp(140px, 40vw, 200px)",
            height: "2px",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "9999px",
            overflow: "hidden",
            opacity: step >= 1 ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: "9999px",
              background: "linear-gradient(90deg, rgba(200,151,58,0.7), rgba(255,255,255,0.9), rgba(200,151,58,0.7))",
              animation: step >= 1 ? "loader 2.5s cubic-bezier(.4,0,.2,1) forwards" : "none",
              boxShadow: "0 0 8px rgba(200,151,58,0.5)",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "clamp(8px, 2.2vw, 11px)",
            letterSpacing: "clamp(2px, 0.8vw, 4px)",
            marginTop: "clamp(12px, 3vw, 18px)",
            textTransform: "uppercase",
            textAlign: "center",
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Transform · Mind · Body · Soul
        </p>
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,151,58,0.4), transparent)",
          opacity: step >= 1 ? 1 : 0,
          transition: "opacity 1s ease 0.3s",
        }}
      />

      <style>{`
        @keyframes loader {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.08); }
        }
        @keyframes ring-expand {
          0%   { opacity: 0.5; transform: translate(-50%, -50%) scale(0.85); }
          100% { opacity: 0;   transform: translate(-50%, -50%) scale(1.3); }
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;