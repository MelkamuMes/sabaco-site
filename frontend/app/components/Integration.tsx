"use client";

import Image from "next/image";
import { Globe, ShoppingCart, MessageSquare, Smartphone, Bot, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function Integration() {
  return (
    <section id="integration" className="py-[92px] bg-[var(--bg)] overflow-hidden relative" >
      {/* Subtle background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#2c3a49_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
      
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(14,255,135,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <Reveal className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-[clamp(30px,4vw,42px)] font-bold tracking-[-0.015em]">
            One connected system for your whole business.
          </h2>
          <p className="text-[var(--muted)] mt-4 text-lg">
            Your website, apps, and AI agents all talk to the same central database in real-time.
          </p>
        </Reveal>

        {/* The Ecosystem Graphic Container - Increased height for longer lines */}
        <div className="relative w-full max-w-[1100px] mx-auto h-[650px] md:h-[800px]">
          
          {/* The SVG Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 800" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(14,255,135,0.1)" />
                <stop offset="50%" stopColor="rgba(14,255,135,0.7)" />
                <stop offset="100%" stopColor="rgba(14,255,135,0.1)" />
              </linearGradient>
            </defs>

            {/* Extended Curved Paths (Diving deep behind the dashboard) */}
            
            {/* Website -> Dashboard (Left) */}
            <path d="M 100 120 C 100 350, 150 450, 250 600" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="8 8" className="animate-[dash_2s_linear_infinite]" />
            
            {/* Ecommerce -> Dashboard (Top Left) */}
            <path d="M 350 60 C 350 250, 380 400, 400 600" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="8 8" className="animate-[dash_2.5s_linear_infinite]" />
            
            {/* Chatbot -> Dashboard (Top Right) */}
            <path d="M 650 60 C 650 250, 620 400, 600 600" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="8 8" className="animate-[dash_2.2s_linear_infinite]" />
            
            {/* AI Agent -> Dashboard (Right) */}
            <path d="M 900 140 C 900 350, 850 450, 750 600" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="8 8" className="animate-[dash_1.8s_linear_infinite]" />
            
            {/* Mobile App -> Dashboard (Bottom Left) */}
            <path d="M 80 650 C 150 650, 180 550, 250 560" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="8 8" className="animate-[dash_3s_linear_infinite]" />
            
            {/* Automation -> Dashboard (Bottom Right) */}
            <path d="M 920 650 C 850 650, 820 550, 750 560" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="8 8" className="animate-[dash_2.8s_linear_infinite]" />
          </svg>

          {/* Floating Badges */}
          <div className="absolute top-[10%] left-[2%] md:left-[8%] animate-[float-badge_4s_ease-in-out_infinite]">
             <Badge icon={<Globe className="w-4 h-4 text-[var(--navy)] dark:text-white" />} text="Website" />
          </div>
          <div className="absolute top-[4%] left-[30%] animate-[float-badge_5s_ease-in-out_infinite_0.5s]">
             <Badge icon={<ShoppingCart className="w-4 h-4 text-[var(--navy)] dark:text-white" />} text="Ecommerce" />
          </div>
          <div className="absolute top-[4%] right-[30%] animate-[float-badge_4.5s_ease-in-out_infinite_1s]">
             <Badge icon={<MessageSquare className="w-4 h-4 text-[var(--navy)] dark:text-white" />} text="Chatbot" />
          </div>
          <div className="absolute top-[14%] right-[2%] md:right-[8%] animate-[float-badge_5.5s_ease-in-out_infinite_1.5s]">
             <Badge icon={<Bot className="w-4 h-4 text-[var(--navy)] dark:text-white" />} text="AI Sales Agent" />
          </div>
          <div className="absolute top-[80%] left-[2%] md:left-[6%] animate-[float-badge_5s_ease-in-out_infinite_0.2s]">
             <Badge icon={<Smartphone className="w-4 h-4 text-[var(--navy)] dark:text-white" />} text="Mobile App" />
          </div>
          <div className="absolute top-[80%] right-[2%] md:right-[6%] animate-[float-badge_4.2s_ease-in-out_infinite_0.8s]">
             <Badge icon={<Zap className="w-4 h-4 text-[var(--navy)] dark:text-white" />} text="Automation" />
          </div>

          {/* ================= CENTRAL DASHBOARD IMAGE MOCKUP ================= */}
          {/* Reduced to lg:w-[55%] to leave massive space on the sides */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[55%] bg-white rounded-t-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_-30px_60px_rgba(14,255,135,0.15)] border border-gray-200 dark:border-white/10 overflow-hidden z-10">
            
            {/* Fake Browser Header */}
            <div className="flex items-center px-4 py-3 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#112240]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-[var(--gold)] flex items-center justify-center text-[8px] font-bold text-black">A</span>
                app.sabaco.com - Dashboard
              </div>
            </div>
            
            {/* The Dashboard Image */}
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
              <Image
                src="/images/s2.png" 
                alt="Sabaco ERP Dashboard"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// Helper Component for Badges
function Badge({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-[#1f2b38] px-3 md:px-4 py-2 md:py-2.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-white/10 backdrop-blur-sm">
      <div className="w-6 h-6 rounded-md bg-[#0eff87]/20 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-bold text-xs md:text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">{text}</span>
    </div>
  );
}