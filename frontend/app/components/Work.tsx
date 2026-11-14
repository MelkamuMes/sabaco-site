// "use client";
// import Reveal from "./ui/Reveal";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const projects = [
//   { 
//     kind: "ERP system", 
//     title: "Attendance Tracing and Payroll Management System ERP", 
//     desc: "One system for sales, stock, purchasing and accounting, with live dashboards for managers.", 
//     chips: ["Sales", "Inventory", "Finance", "Reports"], 
//     wide: true,
//     imageUrl: "/images/s4.png" // Note: fixed "./" to "/" for Next.js public folder
//   },
//   { 
//     kind: "Mobile app", 
//     title: "Employee Attendance Track", 
//     desc: "Customers order, track and pay from their phone. Drivers get routes and updates.", 
//     chips: ["iOS", "Android", "Payments"],
//     imageUrl: "https://c7.alamy.com/comp/2FA0M06/vector-art-with-word-attendance-fastened-to-computer-monitor-2FA0M06.jpg"
//   },
//   { 
//     kind: "Mobile app", 
//     title: "Employee Detail App", 
//     desc: "Display Employee Detail Records", 
//     chips: ["Telegram", "Automation", "ERP link"],
//     imageUrl: "https://plus.unsplash.com/premium_photo-1684761949512-fab7ef8a3b3c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
//   },
//   { 
//     kind: "Employee portal", 
//     title: "Corporate website with employee profiles", 
//     desc: "A fast, modern site that presents the company clearly.", 
//     chips: ["Responsive", "SEO", "Booking"], 
//     wide: true, 
//     reverse: true,
//     imageUrl: "/images/s3.png" // Note: fixed "./" to "/"
//   }
// ];

// export default function Work() {
//   return (
//     <section id="work" className="py-[42px]">
//       <div className="max-w-[1320px] mx-auto px-4 md:px-8">
//         <Reveal className="max-w-[640px] mb-[32px]">
//           <h2 className="text-[clamp(30px,4vw,42px)] font-bold tracking-[-0.015em]">Systems we have built.</h2>
//           <p className="text-[var(--muted)] mt-[14px]">A selection of our projects. Open any of them to see it live.</p>
//         </Reveal>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((p, i) => (
//             <Reveal key={i} delay={i * 0.1} className={p.wide ? "md:col-span-2" : ""}>
//               <motion.a 
//                 href="#" 
//                 whileHover={{ y: -4, rotateX: 2, rotateY: 2 }}
//                 // Added h-full here to make all cards equal height
//                 className={`flex h-full flex-col ${p.wide ? (p.reverse ? "md:flex-row-reverse" : "md:flex-row") : ""} bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden hover:border-[var(--gold)] hover:shadow-[0_26px_50px_rgba(16,44,66,.25)] transition-colors group`}
//               >
//                 {/* Image Container */}
//                 <div className={`relative overflow-hidden bg-[var(--mid)] ${p.wide ? "flex-[1.15] min-h-[320px]" : "h-[230px]"}`}>
//                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_8%,rgba(14,255,135,.25),transparent_55%)] z-10 pointer-events-none" />
                   
//                    {/* Restored fill with object-cover */}
//                    <Image 
//                      src={p.imageUrl}
//                      alt={p.title}
//                      fill
//                      unoptimized 
//                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
//                    />
//                 </div>

//                 {/* Text Content */}
//                 <div className="p-[28px] flex-1 flex flex-col relative z-20">
//                   <div className="text-sm font-bold text-[var(--acc)] mb-1.5">{p.kind}</div>
//                   <h3 className="text-[23px]">{p.title}</h3>
//                   <p className="text-[var(--muted)] my-2.5 text-[16px]">{p.desc}</p>
//                   <ul className="list-none p-0 mb-5 flex flex-wrap gap-2">
//                     {p.chips.map(c => <li key={c} className="text-xs font-bold px-2.5 py-1 rounded-full border border-[var(--line)] text-[var(--muted)]">{c}</li>)}
//                   </ul>
//                   <span className="mt-auto font-extrabold inline-flex gap-3 items-center">
//                     View project <span className="w-9 h-9 rounded-full bg-[var(--gold)] text-[var(--navy)] grid place-items-center transition-transform group-hover:translate-x-1.5 group-hover:-rotate-45">→</span>
//                   </span>
//                 </div>
//               </motion.a>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// todo

"use client";
import Reveal from "./ui/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  { 
    kind: "ERP system", 
    title: "Attendance Tracking and Payroll Management System ERP", 
    desc: "One system for sales, stock, purchasing and accounting, with live dashboards for managers.", 
    chips: ["Sales", "Inventory", "Finance", "Reports"], 
    imageUrl: "/images/s4.png" 
  },
  { 
    kind: "Mobile app", 
    title: "Employee Attendance Track", 
    desc: "Customers order, track and pay from their phone. Drivers get routes and updates.", 
    chips: ["iOS", "Android", "Payments"],
    imageUrl: "https://c7.alamy.com/comp/2FA0M06/vector-art-with-word-attendance-fastened-to-computer-monitor-2FA0M06.jpg"
  },
  { 
    kind: "Mobile app", 
    title: "Employee Detail App", 
    desc: "Display Employee Detail Records", 
    chips: ["Telegram", "Automation", "ERP link"],
    imageUrl: "https://plus.unsplash.com/premium_photo-1684761949512-fab7ef8a3b3c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  { 
    kind: "Employee portal", 
    title: "Corporate website with employee profiles", 
    desc: "A fast, modern site that presents the company clearly.", 
    chips: ["Responsive", "SEO", "Booking"], 
    imageUrl: "/images/s3.png"
  }
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="py-[42px] bg-[var(--bg)] relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <Reveal className="max-w-[640px] mb-[32px]">
          <h2 className="text-[clamp(30px,4vw,42px)] font-bold tracking-[-0.015em]">Systems we have built.</h2>
          <p className="text-[var(--muted)] mt-[14px]">A selection of our projects. Scroll down to explore.</p>
        </Reveal>

        {/* The Stacking Container */}
        <div ref={containerRef} className="relative mt-10">
          {projects.map((project, i) => {
            // Calculate the target scale for each card as it goes behind
            // The first card scales down the most, the last card stays at 1
            const targetScale = 1 - ((projects.length - i) * 0.05);
            
            return (
              <Card
                key={i}
                i={i}
                project={project}
                progress={scrollYProgress}
                range={[i * (1 / projects.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sub-component for the individual sticky cards
function Card({ project, i, progress, range, targetScale }: any) {
  const container = useRef(null);
  
  // Map the scroll progress to a scale value
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    // This container gives us the scroll height and makes the card stick
    <div 
      ref={container} 
      className="h-[85vh] flex items-center justify-center sticky top-[100px] md:top-[140px]"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="w-full bg-[var(--surface)] border border-[var(--line)] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row relative origin-top"
      >
        {/* Left Side: Image */}
        <div className="relative w-full md:w-[45%] h-[250px] md:h-auto md:min-h-[400px] overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
          <div className="text-sm font-bold text-[var(--acc)] mb-2">
            0{i + 1} — {project.kind}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--text)] mb-4">
            {project.title}
          </h3>
          <p className="text-[var(--muted)] text-base md:text-lg mb-8 leading-relaxed">
            {project.desc}
          </p>
          
          <ul className="list-none p-0 mb-8 flex flex-wrap gap-2">
            {project.chips.map((c: string) => (
              <li key={c} className="text-xs font-bold px-3 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--line)] text-[var(--muted)]">
                {c}
              </li>
            ))}
          </ul>

          <a href="#" className="mt-auto font-bold inline-flex gap-2 items-center text-[var(--text)] hover:text-[var(--acc)] transition-colors w-max group">
            Explore project 
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-lg">↗</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}