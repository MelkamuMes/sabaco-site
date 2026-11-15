// import Image from "next/image";
// import Reveal from "./ui/Reveal";
// import Link from "next/link";

// export function Contact() {
//   return (
//     <section 
//       id="contact" 
//       // Uses the subtle dot grid background matching your screenshot
//       className="relative pt-[100px] pb-[40px] bg-[var(--bg)] border-t border-[var(--line)] overflow-hidden"
//     >
//       {/* Dot Grid Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

//       {/* Subtle top glow to keep the premium feel */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(14,255,135,0.08),transparent_60%)] pointer-events-none" />

//       <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
//           {/* Column 1: Brand & Description */}
//           <div className="md:col-span-5 lg:col-span-4">
//             <Reveal>
//               <Link href="/" className="flex items-center gap-3 mb-6 group">
//                             <div className="relative w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-[#adfcd479] dark:bg-[#2b3f3579]">
//                               <Image
//                                 src="/images/sabaco.png" 
//                                 alt="Sabaco Logo" 
//                                 fill
//                                 className="object-cover" 
//                               />
//                             </div>
//                                           <div className="flex flex-col leading-none">
//                               <span className="font-bold text-xl leading-tight text-[var(--text)] font-[var(--f-head)]">SABACO</span>
//                               <span className="text-[10px] font-bold tracking-widest text-[var(--muted)] uppercase">Digital Solutions</span>
//                             </div>
                        
//               </Link>
              
//               <p className="text-[var(--muted)] text-[15px] leading-relaxed max-w-sm">
//                 Technology · AI · Software Development · Digital Transformation. 
//                 Building complete digital business systems for Ethiopian and international businesses.
//               </p>
//             </Reveal>
//           </div>

//           {/* Column 2: Services Links */}
//           <div className="md:col-span-4 lg:col-span-4 lg:pl-10">
//             <Reveal delay={0.1}>
//               <h4 className="font-bold text-[var(--text)] mb-5 text-sm">Services</h4>
//               <ul className="space-y-3.5">
//                 {[
//                   "Custom Software Development",
//                   "Web & Mobile Applications",
//                   "AI Automation",
//                   "Enterprise Systems",
//                   "UI/UX Design",
//                   "Cloud Solutions",
//                   "Case Studies"
//                 ].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-[15px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </Reveal>
//           </div>

//           {/* Column 3: Contact Info */}
//           <div className="md:col-span-3 lg:col-span-4 lg:pl-10">
//             <Reveal delay={0.2}>
//               <h4 className="font-bold text-[var(--text)] mb-5 text-sm">Contact</h4>
//               <ul className="space-y-3.5">
//                 <li>
//                   <a href="mailto:sabaco@gmail.com" className="text-[15px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
//                     sabaco@gmail.com
//                   </a>
//                 </li>
//                 <li>
//                   <a href="tel:+251955000000" className="text-[15px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
//                     +251 955 000 000
//                   </a>
//                 </li>
//                 <li>
//                   <span className="text-[15px] text-[var(--muted)]">
//                     Addis Ababa, Ethiopia
//                   </span>
//                 </li>
//               </ul>
//             </Reveal>
//           </div>

//         </div>

//         {/* Bottom Copyright Bar */}
//         <div className="mt-16 pt-8 border-t border-[var(--line)] text-center flex flex-col items-center justify-center">
//           <p className="text-[14px] text-[var(--muted)]">
//             © {new Date().getFullYear()} Sabaco Digital Construct. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// // We export an empty Footer or just remove it from page.tsx since the Contact section now acts as the footer.
// export function Footer() {
//   return null;
// }

// todo translation
"use client";

import Image from "next/image";
import Reveal from "./ui/Reveal";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { dict } = useLanguage();
  const text = dict.contactSection;

  return (
    <section 
      id="contact" 
      // CHANGED: bg-[var(--bg)] to bg-[var(--surface)] for a subtle contrast in light mode
      className="relative pt-[100px] pb-[40px] bg-[var(--surface)] border-t border-[var(--line)] overflow-hidden"
    >
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Subtle top glow */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(14,255,135,0.08),transparent_60%)] pointer-events-none" /> */}

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-[#adfcd479] dark:bg-[#2b3f3579]">
                  <Image
                    src="/images/sabaco.png" 
                    alt="Sabaco Logo" 
                    fill
                    className="object-cover" 
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-xl leading-tight text-[var(--text)] font-[var(--f-head)]">SABACO</span>
                  <span className="text-[10px] font-bold tracking-widest text-[var(--muted)] uppercase">Digital Solutions</span>
                </div>
              </Link>
              
              <p className="text-[var(--muted)] text-[15px] leading-relaxed max-w-sm">
                {text.description}
              </p>
            </Reveal>
          </div>

          {/* Column 2: Services Links */}
          <div className="md:col-span-4 lg:col-span-4 lg:pl-10">
            <Reveal delay={0.1}>
              <h4 className="font-bold text-[var(--text)] mb-5 text-sm">{text.servicesTitle}</h4>
              <ul className="space-y-3.5">
                {text.servicesList.map((item: string) => (
                  <li key={item}>
                    <Link href="#" className="text-[15px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-3 lg:col-span-4 lg:pl-10">
            <Reveal delay={0.2}>
              <h4 className="font-bold text-[var(--text)] mb-5 text-sm">{text.contactTitle}</h4>
              <ul className="space-y-3.5">
                <li>
                  <a href="mailto:sabaco@gmail.com" className="text-[15px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                    sabaco@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+251955000000" className="text-[15px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                    +251 955 000 000
                  </a>
                </li>
                <li>
                  <span className="text-[15px] text-[var(--muted)]">
                    {text.location}
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--line)] text-center flex flex-col items-center justify-center">
          <p className="text-[14px] text-[var(--muted)]">
            © {new Date().getFullYear()} Sabaco Digital Construct. {text.copyright}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return null;
}