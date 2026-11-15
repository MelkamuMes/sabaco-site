// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Reveal from "./ui/Reveal";

// const steps = [
//   { title: "Discover", desc: "We learn your business, your goals and the problems to solve." },
//   { title: "Design", desc: "You approve the plan and a working prototype before we build." },
//   { title: "Build", desc: "We develop in short cycles and show progress every week." },
//   { title: "Launch and support", desc: "We deploy, train your team and keep improving the system." }
// ];

// export default function Process() {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 80%", "end 50%"], 
//   });

//   const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     // Changed bg to --surface and text to --text for light mode support
//     <section id="process" className="py-[92px] bg-[var(--surface)] text-[var(--text)] overflow-hidden transition-colors duration-300">
//       <div className="max-w-[1320px] mx-auto px-4 md:px-8">
//         <Reveal className="max-w-[640px] mb-[60px]">
//           <h2 className="text-[clamp(30px,4vw,42px)] font-bold tracking-[-0.015em]">
//             A clear process, from first call to launch.
//           </h2>
//           <p className="text-[var(--muted)] mt-[14px]">
//             You always know what is happening and what comes next.
//           </p>
//         </Reveal>

//         <div ref={containerRef} className="relative">
          
//           {/* ================= DESKTOP TIMELINE (Horizontal) ================= */}
//           <div className="hidden md:block relative pb-10">
//             {/* Background Track Line */}
//             <div className="absolute top-[20px] left-0 right-0 h-[2px] bg-[var(--line)]" />
            
//             {/* Animated Foreground Line */}
//             <motion.div 
//               style={{ scaleX: lineWidth, transformOrigin: "left" }}
//               className="absolute top-[20px] left-0 right-0 h-[2px] bg-[var(--gold)] z-0" 
//             />

//             <div className="grid grid-cols-4 gap-6 relative z-10">
//               {steps.map((step, i) => (
//                 <div key={i} className="relative flex flex-col group">
//                   {/* Number Circle */}
//                   <div className="w-10 h-10 rounded-full bg-[var(--bg)] border-2 border-[var(--line)] flex items-center justify-center font-bold text-[var(--text)] mb-6 transition-colors duration-500 group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]">
//                     {i + 1}
//                   </div>
                  
//                   {/* Text Content */}
//                   <h3 className="text-[20px] font-bold mb-2 font-[var(--f-head)]">{step.title}</h3>
//                   <p className="text-[15px] text-[var(--muted)] pr-4">{step.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ================= MOBILE TIMELINE (Vertical) ================= */}
//           <div className="md:hidden relative pl-8">
//             {/* Background Track Line */}
//             <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-[var(--line)]" />
            
//             {/* Animated Foreground Line */}
//             <motion.div 
//               style={{ height: lineHeight }}
//               className="absolute top-0 left-[19px] w-[2px] bg-[var(--gold)] z-0" 
//             />

//             <div className="flex flex-col gap-10 relative z-10">
//               {steps.map((step, i) => (
//                 <div key={i} className="relative flex flex-col">
//                   {/* Number Circle */}
//                   <div className="absolute -left-[40px] w-10 h-10 rounded-full bg-[var(--bg)] border-2 border-[var(--line)] flex items-center justify-center font-bold text-[var(--text)] mb-2">
//                     {i + 1}
//                   </div>
                  
//                   {/* Text Content */}
//                   <h3 className="text-[20px] font-bold mb-2 font-[var(--f-head)] mt-1">{step.title}</h3>
//                   <p className="text-[15px] text-[var(--muted)]">{step.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// todo translation
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./ui/Reveal";
import { useLanguage } from "../context/LanguageContext";
import InteractiveCanvas from "./InteractiveCanvas"; // <-- Import the canvas

export default function Process() {
  const { dict } = useLanguage();
  const text = dict.processSection;
  const steps = text.steps;

  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"], 
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    // 1. Changed bg to --bg to create contrast with the Footer (--surface)
    // 2. Added relative and overflow-hidden for the canvas
    <section id="process" className="relative py-[92px] bg-[var(--bg)] text-[var(--text)] overflow-hidden transition-colors duration-300">
      
      {/* The Interactive Canvas */}
      <InteractiveCanvas />

      {/* Content wrapped in relative z-10 so it sits above the particles */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <Reveal className="max-w-[640px] mb-[60px]">
          <h2 className="text-[clamp(30px,4vw,42px)] font-bold tracking-[-0.015em]">
            {text.title}
          </h2>
          <p className="text-[var(--muted)] mt-[14px]">
            {text.subtitle}
          </p>
        </Reveal>

        <div ref={containerRef} className="relative">
          
          {/* ================= DESKTOP TIMELINE (Horizontal) ================= */}
          <div className="hidden md:block relative pb-10">
            {/* Background Track Line */}
            <div className="absolute top-[20px] left-0 right-0 h-[2px] bg-[var(--line)]" />
            
            {/* Animated Foreground Line */}
            <motion.div 
              style={{ scaleX: lineWidth, transformOrigin: "left" }}
              className="absolute top-[20px] left-0 right-0 h-[2px] bg-[var(--gold)] z-0" 
            />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((step: any, i: number) => (
                <div key={i} className="relative flex flex-col group">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg)] border-2 border-[var(--line)] flex items-center justify-center font-bold text-[var(--text)] mb-6 transition-colors duration-500 group-hover:border-[var(--gold)] group-hover:text-[var(--gold)] shadow-sm">
                    {i + 1}
                  </div>
                  
                  <h3 className="text-[20px] font-bold mb-2 font-[var(--f-head)]">{step.title}</h3>
                  <p className="text-[15px] text-[var(--muted)] pr-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MOBILE TIMELINE (Vertical) ================= */}
          <div className="md:hidden relative pl-8">
            {/* Background Track Line */}
            <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-[var(--line)]" />
            
            {/* Animated Foreground Line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 left-[19px] w-[2px] bg-[var(--gold)] z-0" 
            />

            <div className="flex flex-col gap-10 relative z-10">
              {steps.map((step: any, i: number) => (
                <div key={i} className="relative flex flex-col">
                  <div className="absolute -left-[40px] w-10 h-10 rounded-full bg-[var(--bg)] border-2 border-[var(--line)] flex items-center justify-center font-bold text-[var(--text)] mb-2 shadow-sm">
                    {i + 1}
                  </div>
                  
                  <h3 className="text-[20px] font-bold mb-2 font-[var(--f-head)] mt-1">{step.title}</h3>
                  <p className="text-[15px] text-[var(--muted)]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}