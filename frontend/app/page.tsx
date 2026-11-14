// // import Navbar from "./components/Navbar";
// // import ParticleCanvas from "./components/ParticleCanvas";
// // import { TypingText, FeatureTabs } from "./components/HeroInteractive";

// // export default function Home() {
// //   return (
// //     <main id="top" className="min-h-screen">
// //       <Navbar />

// //       {/* HERO SECTION */}
// //       <section className="relative bg-[var(--hbg)] text-[var(--htx)] pt-[72px] pb-[96px] overflow-hidden">
// //         {/* Background Glows & Canvas */}
// //         <div className="absolute w-[560px] h-[560px] right-[-140px] top-[-180px] bg-[radial-gradient(circle,rgba(14,255,135,.3),transparent_65%)] animate-[drift_12s_ease-in-out_infinite_alternate]"></div>
// //         <ParticleCanvas />

// //         <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-[1.05fr_.95fr] gap-[56px] items-center relative z-10">
// //           <div>
// //             <h1 className="text-[clamp(34px,4.8vw,56px)] font-extrabold tracking-tight animate-[rise_.8s_ease-out_both]">
// //               We build<br/>
// //               <TypingText /><br/>
// //               that fit your business.
// //             </h1>
// //             <p className="text-[19px] text-[var(--hmu)] max-w-[34em] mt-[22px] mb-[32px] animate-[rise_.8s_ease-out_.15s_both]">
// //               We design and build ERP systems, websites, mobile apps and chatbots for companies that need technology made to fit, not forced to fit.
// //             </p>
// //             <div className="flex gap-[14px] flex-wrap animate-[rise_.8s_ease-out_.3s_both]">
// //               <a href="#contact" className="btn btn-gold relative">
// //                 Get a free consultation
// //                 <span className="absolute -inset-[2px] rounded-[10px] border-2 border-[var(--gold)] animate-[ping_2s_ease-out_infinite]"></span>
// //               </a>
// //               <a href="#services" className="btn btn-ghost">See what we build</a>
// //             </div>
// //             <div className="mt-[36px] text-[var(--hmu)] text-sm animate-[rise_.8s_ease-out_.45s_both]">
// //               Custom development for companies of every size.
// //             </div>
// //           </div>

// //           <FeatureTabs />
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }



// // todo
// import Navbar from "./components/Navbar";
// import ParticleCanvas from "./components/ParticleCanvas";
// import { TypingText, FeatureTabs } from "./components/HeroInteractive";
// import Marquee from "./components/Marquee";
// import Services from "./components/Services";
// import Work from "./components/Work";
// import Process from "./components/Process";
// import { Contact, Footer } from "./components/ContactFooter";
// import Automation from "./components/Automation";
// import Integration from "./components/Integration";

// export default function Home() {
//   return (
//     <main id="top" className="min-h-screen ">
//       <Navbar />

//       <section className="relative bg-[var(--hbg)] text-[var(--htx)]  pt-[140px] md:pt-[160px] pb-[96px]  overflow-hidden">
//         <div className="absolute w-[560px] h-[560px] right-[-140px] top-[-180px] bg-[radial-gradient(circle,rgba(14,255,135,.3),transparent_65%)] animate-[drift_12s_ease-in-out_infinite_alternate]"></div>
//         <ParticleCanvas />

//         <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-[1.05fr_.95fr] gap-[56px] items-center relative z-10">
//           <div>
//             <h1 className="text-[clamp(34px,4.8vw,56px)] font-extrabold tracking-tight animate-[rise_.8s_ease-out_both]">
//               We build<br/>
//               <TypingText /><br/>
//               that fit your business.
//             </h1>
//             <p className="text-[19px] text-[var(--hmu)] max-w-[34em] mt-[22px] mb-[32px] animate-[rise_.8s_ease-out_.15s_both]">
//               We design and build ERP systems, websites, mobile apps and chatbots for companies that need technology made to fit, not forced to fit.
//             </p>
//             <div className="flex gap-[14px] flex-wrap animate-[rise_.8s_ease-out_.3s_both] relative z-20">
              
//               <a href="#contact" className="btn btn-gold relative animate-[pulse-ring_2s_ease-out_infinite]">
//                 Get a free consultation
//               </a>

//               <a href="#services" className="btn btn-ghost relative z-10 bg-[var(--hbg)]">
//                 See what we build
//               </a>
//             </div>
//             <div className="mt-[36px] text-[var(--hmu)] text-sm animate-[rise_.8s_ease-out_.45s_both]">
//               Custom development for companies of every size.
//             </div>
//           </div>
//           <FeatureTabs />
//         </div>
//       </section>

//       <Marquee />
//       <Services />
//       <Integration />
//       <Automation />
//       <Work />
//       <Process />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }



// todo translatiion
"use client"; 

import { useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import ParticleCanvas from "./components/ParticleCanvas";
import { TypingText, FeatureTabs } from "./components/HeroInteractive";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Integration from "./components/Integration";
import Automation from "./components/Automation";
import Work from "./components/Work";
import Process from "./components/Process";
import { Contact } from "./components/ContactFooter"; // Assuming you renamed it

export default function Home() {
  const { dict } = useLanguage();

  return (
    // IMPORTANT: Do not put overflow-hidden on <main> or the sticky navbar breaks
    <main id="top" className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[var(--hbg)] text-[var(--htx)] pt-[140px] md:pt-[160px] pb-[96px] overflow-hidden">
        <div className="absolute w-[560px] h-[560px] right-[-140px] top-[-180px] bg-[radial-gradient(circle,rgba(14,255,135,.3),transparent_65%)] animate-[drift_12s_ease-in-out_infinite_alternate]"></div>
        <ParticleCanvas />

        <div className="max-w-[1320px] mx-auto px-4 md:px-8 grid md:grid-cols-[1.05fr_.95fr] gap-[56px] items-center relative z-10">
          <div>
            <h1 className="text-[clamp(34px,4.8vw,56px)] font-extrabold tracking-tight animate-[rise_.8s_ease-out_both]">
              {dict.hero.title}<br/>
              <TypingText /><br/>
              {dict.hero.subtitle}
            </h1>
            <p className="text-[19px] text-[var(--hmu)] max-w-[34em] mt-[22px] mb-[32px] animate-[rise_.8s_ease-out_.15s_both]">
              {dict.hero.desc}
            </p>
            <div className="flex gap-[14px] flex-wrap animate-[rise_.8s_ease-out_.3s_both] relative z-20">
              <a href="#contact" className="btn btn-gold relative animate-[pulse-ring_2s_ease-out_infinite]">
                <span className="relative z-10 text-white">{dict.hero.cta}</span>
                {/* <span className="absolute inset-0 rounded-[10px] border-2 border-[var(--gold)] animate-[ping_2s_ease-out_infinite] pointer-events-none -z-10"></span> */}
              </a>
              <a href="#services" className="btn btn-ghost relative z-10 bg-[var(--hbg)]">
                {dict.nav.services}
              </a>
            </div>
           
            <div className="mt-[36px] text-[var(--hmu)] text-sm animate-[rise_.8s_ease-out_.45s_both]">
              {dict.hero.trust}
            </div>
          </div>
          <FeatureTabs />
        </div>
      </section>

      {/* REST OF THE PAGE */}
      <Marquee />
      <Services />
      <Integration />
      <Automation />
      <Work />
      <Process />
      <Contact />
      
      {/* Footer is now merged into the Contact section, so we don't need a separate <Footer /> here */}
    </main>
  );
}