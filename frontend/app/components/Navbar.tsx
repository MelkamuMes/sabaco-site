// "use client";

// import { motion, useScroll, useSpring } from "framer-motion";
// import ThemeToggle from "./ui/ThemeToggle";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Globe } from "lucide-react"; // Make sure lucide-react is installed

// export default function Navbar() {
//   const { scrollYProgress } = useScroll();
//   const pathname = usePathname();

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   const navLinks = [
//     { name: "Home", href: "#top" },
//     { name: "Services", href: "#services" },
//     { name: "Solutions", href: "#integration" },
//     { name: "Work", href: "#work" },
//     // { name: "Case Studies", href: "#work" },
//     { name: "About", href: "#process" },
//   ];

//   // Determine current language from the URL (defaults to 'en')
//   const currentLang = pathname?.startsWith("/am") ? "am" : "en";
//   // Create the path for the other language
//   const targetLang = currentLang === "en" ? "am" : "en";
//   const newPath = pathname ? pathname.replace(`/${currentLang}`, `/${targetLang}`) : `/${targetLang}`;

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 flex justify-center pointer-events-none">
      
//       <header className="relative pointer-events-auto w-full max-w-[1200px] bg-white/90 dark:bg-[#18212B]/90 backdrop-blur-md text-[var(--htx)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-white/10 rounded-[32px] overflow-hidden">
        
//         {/* Scroll Progress Bar */}
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--sabaco)] origin-left z-50 opacity-90"
//           style={{ scaleX }}
//         />

//         <div className="px-6 md:px-8 flex items-center justify-between h-[64px] md:h-[72px]">
          
//           {/* Logo */}
//           <a href="#top" className="font-extrabold text-[20px] md:text-[22px] font-[var(--f-head)] flex items-center gap-2 group shrink-0">
//             <div className="relative w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-[#adfcd479] dark:bg-[#2b3f3579]">
//               <Image
//                 src="/images/sabaco.png" 
//                 alt="Sabaco Logo" 
//                 fill
//                 className="object-cover" 
//               />
//             </div>
//             <div className="flex flex-col leading-none">
//               <span className="text-[var(--text)]">SABACO</span>
//               <span className="text-[8px] font-bold tracking-widest text-[var(--muted)] uppercase mt-0.5">Digital Solutions</span>
//             </div>
//           </a>

//           {/* Desktop Navigation Links */}
//           <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name}
//                 href={link.href} 
//                 className="relative text-[15px] font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors py-2 group"
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[var(--gold)] rounded-t-sm transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//           </nav>

//           {/* Right Side Actions */}
//           <div className="flex items-center gap-2 md:gap-4 shrink-0">
            
//             {/* Language Toggle */}
//             <Link 
//               href={newPath}
//               className="flex items-center gap-1.5 text-[13px] font-bold text-[var(--muted)] hover:text-[var(--text)] transition-colors border border-[var(--line)] hover:border-[var(--gold)] px-3 py-1.5 rounded-full bg-[var(--surface)]"
//             >
//               <Globe className="w-4 h-4" />
//               <span>{currentLang === "en" ? "EN" : "አማ"}</span>
//             </Link>

//             {/* Contact Button (Replaced Start a Project) */}
//             <a 
//               href="#contact" 
//               className="hidden sm:inline-flex items-center justify-center bg-[var(--navy)] text-white px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-black dark:hover:bg-[#0a192f] hover:shadow-lg transition-all"
//             >
//               Contact
//             </a>
            
//             <ThemeToggle />
//           </div>

//         </div>
//       </header>
//     </div>
//   );
// }


// todo translatiion
"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const { locale, dict, toggleLanguage } = useLanguage(); // Get toggle function

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    // { name: dict.nav.home, href: "#top" },
    { name: dict.nav.services, href: "#services" },
    { name: dict.nav.solutions, href: "#integration" },
    { name: dict.nav.blog, href: "#work" },
    { name: dict.nav.work, href: "#work" },
    { name: dict.nav.about, href: "#process" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 flex justify-center pointer-events-none">
      <header className="relative pointer-events-auto w-full max-w-[1200px] bg-white/90 dark:bg-[#18212B]/90 backdrop-blur-md text-[var(--htx)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-white/10 rounded-[32px] overflow-hidden">
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--sabaco)] origin-left z-50 opacity-90"
          style={{ scaleX }}
        />

        <div className="px-6 md:px-8 flex items-center justify-between h-[64px] md:h-[72px]">
          
          <a href="#top" className="font-extrabold text-[20px] md:text-[22px] font-[var(--f-head)] flex items-center gap-2 group shrink-0">
            <div className="relative w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-[#adfcd479] dark:bg-[#2b3f3579]">
              <Image src="/images/sabaco.png" alt="Sabaco Logo" fill className="object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[var(--text)]">SABACO</span>
              <span className="text-[8px] font-bold tracking-widest text-[var(--muted)] uppercase mt-0.5">Digital Solutions</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="relative text-[15px] font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[var(--gold)] rounded-t-sm transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            
            {/* Language Toggle Button */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-[13px] font-bold text-[var(--muted)] hover:text-[var(--text)] transition-colors border border-[var(--line)] hover:border-[var(--gold)] px-3 py-1.5 rounded-full bg-[var(--surface)]"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === "en" ? "EN" : "አማ"}</span>
            </button>

            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center bg-[var(--navy)] text-white px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-black dark:hover:bg-[#0a192f] hover:shadow-lg transition-all"
            >
              {dict.nav.contact}
            </a>
            
            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}