"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, RefreshCcw, CircleDashed } from "lucide-react";
import Reveal from "./ui/Reveal";

const notifications = [
  { text: "Supplier invoice matched to its order", icon: <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> },
  { text: "Refund request handed to the support team", icon: <RefreshCcw className="w-5 h-5 text-orange-500 shrink-0" /> },
  { text: "Weekly sales report drafted", icon: <CircleDashed className="w-5 h-5 text-gray-400 shrink-0" /> },
];

const steps = [
  {
    problem: "Supplier invoices are retyped into spreadsheets by hand every week.",
    solution: "Documents are read and matched automatically, and your team only reviews the exceptions.",
  },
  {
    problem: "Customers ask the same questions on Telegram and WhatsApp, answered one message at a time.",
    solution: "An assistant answers routine questions around the clock and hands the rest to a person.",
  },
  {
    problem: "Reports are pieced together from five files the night before the meeting.",
    solution: "Live dashboards draw from one source of truth, so the numbers are ready when you are.",
  }
];

export default function Automation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tickerControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // Section scale animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], 
  });

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["32px", "0px", "0px", "32px"]);

  // Top-to-Bottom Ticker (Starts at -50% and moves to 0%)
  useEffect(() => {
    if (!isHovered) {
      tickerControls.start({
        y: ["-50%", "0%"],
        transition: { repeat: Infinity, ease: "linear", duration: 20 }, // 20 seconds for slow scroll
      });
    } else {
      tickerControls.stop();
    }
  }, [tickerControls, isHovered]);

  return (
    <motion.div 
      ref={sectionRef} 
      style={{ scale, opacity, borderRadius }} 
      className="origin-center w-full bg-[var(--bg)]"
    >
      <section className="py-[92px] overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          
          <Reveal className="max-w-[800px] mb-16">
            <h2 className="text-[clamp(30px,4vw,42px)] font-bold tracking-[-0.015em] leading-tight">
              Stop losing hours to <br className="hidden md:block" />
              <span className="text-[var(--muted)] line-through decoration-[var(--line)] decoration-2">
                Telegram, WhatsApp and paperwork
              </span>
            </h2>
          </Reveal>

          {/* 
            THE FIX: 
            Notice there is NO `items-start` here. 
            This forces the left column to stretch to the exact same height as the right text column.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
            
            {/* ================= LEFT SIDE (Sticky Image) ================= */}
            {/* The parent wrapper */}
            <div className="relative w-full">
              {/* The sticky child: Now it has a massive column to stick within */}
              <div className="md:sticky md:top-28 w-full h-[500px] md:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl bg-[var(--mid)]">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1752452998548-e104f9bedbc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="AI Agent at work"
                  fill
                  unoptimized
                  className="object-cover"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-[#1f2b38] rounded-2xl p-5 shadow-2xl border border-gray-100 dark:border-white/10">
                  <div className="text-[10px] font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-3">
                    An Agent at Work (Example)
                  </div>
                  
                  {/* Ticker Container - Height strictly enforced */}
                  <div 
                    className="relative h-[180px] overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Fade masks */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-[#1f2b38] to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-[#1f2b38] to-transparent z-10 pointer-events-none" />

                    {/* Ticker Animation */}
                    <motion.div 
                      animate={tickerControls}
                      initial={{ y: "-50%" }}
                      className="flex flex-col gap-3"
                    >
                      {[...notifications, ...notifications].map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5 w-full shrink-0"
                        >
                          {item.icon}
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE (Scrolling Text) ================= */}
            {/* We use a massive gap (gap-[30vh]) to ensure the left side stays sticky long enough */}
            <div className="flex flex-col gap-[10vh] pb-[5vh]">
              {steps.map((step, i) => (
                <StepItem key={i} index={i} problem={step.problem} solution={step.solution} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}

function StepItem({ index, problem, solution }: { index: number; problem: string; solution: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"], 
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, scale }}
      className="flex flex-col justify-center border-b border-[var(--line)] last:border-0 pb-12"
    >
      <div className="flex gap-6 items-start">
        <span className="text-sm font-bold text-[var(--muted)] mt-1">
          0{index + 1}
        </span>
        
        <div className="flex flex-col gap-4">
          <p className="text-lg text-[var(--muted)] line-through decoration-[var(--line)] decoration-2 opacity-60">
            {problem}
          </p>
          
          <div className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--gold)] mt-2 shrink-0 shadow-[0_0_8px_var(--gold)]" />
            <p className="text-xl font-medium text-[var(--text)] leading-relaxed">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}