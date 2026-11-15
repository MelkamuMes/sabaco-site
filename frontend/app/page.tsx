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










// {
//   "nav": {
//     "home": "መነሻ",
//     "services": "አገልግሎቶች",
//     "solutions": "መፍትሄዎች",
//     "work": "ሥራዎቻችን",
//     "blog": "ብሎግ",
//     "about": "ስለ እኛ",
//     "contact": "አግኙን"
//   },
//   "hero": {
//     "title": "እኛ የተለያዩ",
//     "subtitle": "ለንግድዎ የሚስማሙ መተግበሪያዎችን እናበለጽጋለን።",
//     "desc": "ለኩባንያዎች የሚስማማ ቴክኖሎጂ ለመፍጠር ERP ሲስተሞችን፣ ዌብሳይቶችን፣ ሞባይል አፕሊኬሽኖችን እና ቻትቦቶችን እንነድፋለን።",
//     "cta": "ነጻ ምክክር ያግኙ",
//     "trust": "ለማንኛውም መጠን ላላቸው ኩባንያዎች ልዩ ሶፍትዌር ልማት።"
//   },
//   "heroInteractive": {
//     "typingWords": ["የ ERP ሲስተሞች", "የሞባይል አፕሊኬሽኖች", "ዌብሳይቶች", "ቻትቦቶች", "ልዩ ሶፍትዌሮች"],
//     "tabs": {
//       "erp": "ERP",
//       "app": "ሞባይል አፕ",
//       "bot": "ቻትቦት"
//     },
//     "erp": {
//       "sales": "ሽያጭ",
//       "inventory": "እቃ ዝርዝር",
//       "hr": "የሰው ኃይል እና ደመወዝ",
//       "finance": "ፋይናንስ",
//       "reports": "ሪፖርቶች"
//     },
//     "app": {
//       "order": "ትዕዛዝ",
//       "items": "ዕቃዎች",
//       "delivered": "ደርሷል",
//       "onTheWay": "በመንገድ ላይ"
//     },
//     "bot": {
//       "user1": "የመጋቢት ወር ደረሰኔ የት ነው?",
//       "bot1": "አገኘሁት። ደረሰኝ ቁጥር 2031 መጋቢት 3 ተልኳል። እንደገና እንድልክልዎ ይፈልጋሉ?",
//       "user2": "አዎ፣ እባክዎን።"
//     }
//   },
//     "marquee": {
//     "items": ["ERP", "ሽያጭ", "የሰው ኃይል አስተዳደር", "እቃ ዝርዝር", "የደመወዝ ሂደት", "የፋይናንስ አስተዳደር", "የቴሌግራም ቦቶች", "የሞባይል አፕሊኬሽኖች", "ዌብሳይቶች", "ልዩ ሶፍትዌር", "ራስ-ሰር ስራዎች"]
//   },
//     "servicesSection": {
//     "title": "አንድ ቡድን ብቻ ለኩባንያዎ የሚያስፈልጉትን ሁሉንም ነገሮች ለመገንባት።",
//     "subtitle": "ለስትራቴጂ፣ ለዲዛይን፣ ለልማት እና ለድጋፍ አንድ አጋር፣ ስለዚህ ሲስተሞችዎ ከመጀመሪያው ቀን ጀምሮ አብረው ይሰራሉ።",
//     "items": [
//       {
//         "title": "የ ERP ሲስተሞች",
//         "desc": "ለሽያጭ፣ ለእቃ ዝርዝር፣ ለሂሳብ አያያዝ፣ ለሰው ኃይል እና ለሪፖርት አንድ መድረክ። በእውነተኛ የስራ ሂደቶችዎ ላይ የተመሰረተ እና አስቀድመው ከሚጠቀሙባቸው መሳሪያዎች ጋር የሚገናኝ።",
//         "tags": ["ሽያጭ", "እቃ ዝርዝር", "ፋይናንስ", "የሰው ኃይል እና ደመወዝ", "ዳሽቦርዶች"]
//       },
//       {
//         "title": "ዌብሳይቶች",
//         "desc": "ጎብኚዎችን ወደ ደንበኞች የሚቀይሩ ፈጣን እና አስተማማኝ ዌብሳይቶች እና ዌብ አፕሊኬሽኖች።",
//         "tags": []
//       },
//       {
//         "title": "የሞባይል አፕሊኬሽኖች",
//         "desc": "ደንበኞችዎ እና ሰራተኞችዎ በየቀኑ ለመጠቀም የሚወዷቸው የ iOS እና Android አፕሊኬሽኖች።",
//         "tags": []
//       },
//       {
//         "title": "የቴሌግራም ቦቶች",
//         "desc": "ለቴሌግራም፣ ለ WhatsApp እና ለዌብሳይትዎ የሚሆኑ ቦቶች።",
//         "tags": []
//       },
//       {
//         "title": "ልዩ ሶፍትዌር",
//         "desc": "ሌላ ሀሳብ አለዎት? በመመሪያዎ መሰረት ውህደቶችን፣ ፖርታሎችን እና የውስጥ መሳሪያዎችን እንገነባለን።",
//         "tags": []
//       }
//     ]
//   },
//     "integration": {
//     "title": "ለመላው ንግድዎ አንድ የተገናኘ ስርዓት።",
//     "subtitle": "ዌብሳይትዎ፣ አፕሊኬሽኖችዎ እና የ AI ወኪሎችዎ ሁሉም በእውነተኛ ጊዜ ከተመሳሳይ ማዕከላዊ ዳታቤዝ ጋር ይነጋገራሉ።",
//     "badges": {
//       "website": "ዌብሳይት",
//       "ecommerce": "ኢ-ኮሜርስ",
//       "chatbot": "ቻትቦት",
//       "aiAgent": "የ AI ሽያጭ ወኪል",
//       "mobileApp": "የሞባይል አፕ",
//       "automation": "ራስ-ሰር ስራ"
//     }
//   },
//     "automation": {
//     "heading": "ሰዓታትን በማጣት ያቁሙ",
//     "strikethrough": "ቴሌግራም፣ WhatsApp እና ወረቀቶች",
//     "cardTitle": "በስራ ላይ ያለ ወኪል (ምሳሌ)",
//     "notifications": [
//       "የአቅራቢ ደረሰኝ ከትዕዛዙ ጋር ተዛምዷል",
//       "የተመላሽ ጥያቄ ለድጋፍ ቡድኑ ተሰጥቷል",
//       "ሳምንታዊ የሽያጭ ሪፖርት ተዘጋጅቷል"
//     ],
//     "steps": [
//       {
//         "problem": "የአቅራቢ ደረሰኞች በየሳምንቱ በእጅ ወደ ተመን ሉሆች ይተየባሉ።",
//         "solution": "ሰነዶች በራስ-ሰር ይነበባሉ እና ይዛመዳሉ፣ እና ቡድንዎ የሚገመግማቸው ልዩ ሁኔታዎችን ብቻ ነው።"
//       },
//       {
//         "problem": "ደንበኞች በቴሌግራም እና WhatsApp ላይ ተመሳሳይ ጥያቄዎችን ይጠይቃሉ፣ በአንድ ጊዜ አንድ መልእክት ብቻ ይመለሳል።",
//         "solution": "ረዳት የተለመዱ ጥያቄዎችን በማንኛውም ሰዓት ይመልሳል እና ቀሪውን ለአንድ ሰው ይሰጣል።"
//       },
//       {
//         "problem": "ሪፖርቶች ከስብሰባው በፊት ባለው ምሽት ከአምስት ፋይሎች ይሰበሰባሉ።",
//         "solution": "የቀጥታ ዳሽቦርዶች ከአንድ የእውነት ምንጭ ይስላሉ፣ ስለዚህ ቁጥሮቹ ሲፈልጉዋቸው ዝግጁ ናቸው።"
//       }
//     ]
//   },
//     "workSection": {
//     "title": "የገነባናቸው ስርዓቶች።",
//     "subtitle": "የእኛ ፕሮጀክቶች ምርጫ። ለማሰስ ወደታች ይሸብልሉ።",
//     "exploreBtn": "ፕሮጀክቱን ያስሱ",
//     "projects": [
//       {
//         "kind": "ERP ሲስተም",
//         "title": "የመገኘት ክትትል እና የደመወዝ አስተዳደር ሲስተም ERP",
//         "desc": "ለሽያጭ፣ ለእቃ ዝርዝር፣ ለግዢ እና ለሂሳብ አያያዝ አንድ ስርዓት፣ ለአስተዳዳሪዎች በቀጥታ የሚሰሩ ዳሽቦርዶች።",
//         "chips": ["ሽያጭ", "እቃ ዝርዝር", "ፋይናንስ", "ሪፖርቶች"]
//       },
//       {
//         "kind": "የሞባይል አፕሊኬሽን",
//         "title": "የሰራተኞች መገኘት ክትትል",
//         "desc": "ደንበኞች ከስልካቸው ያዙ፣ ይከታተሉ እና ይክፈሉ። አሽከርካሪዎች መንገዶችን እና ማሻሻያዎችን ያገኛሉ።",
//         "chips": ["iOS", "Android", "ክፍያዎች"]
//       },
//       {
//         "kind": "የሞባይል አፕሊኬሽን",
//         "title": "የሰራተኛ ዝርዝር አፕ",
//         "desc": "የሰራተኛ ዝርዝር መዝገቦችን አሳይ",
//         "chips": ["ቴሌግራም", "ራስ-ሰር", "ERP አገናኝ"]
//       },
//       {
//         "kind": "የሰራተኛ ፖርታል",
//         "title": "ከሰራተኛ መገለጫዎች ጋር የኮርፖሬት ዌብሳይት",
//         "desc": "ኩባንያውን በግልጽ የሚያቀርብ ፈጣን እና ዘመናዊ ዌብሳይት።",
//         "chips": ["ምላሽ ሰጪ", "SEO", "ቦታ ቦታ ማስያዝ"]
//       }
//     ]
//   },
//     "processSection": {
//     "title": "ግልጽ የሆነ ሂደት፣ ከመጀመሪያው ጥሪ እስከ ምረቃ።",
//     "subtitle": "ሁልጊዜ ምን እየተሰራ እንዳለ እና ቀጣዩ ምን እንደሆነ ያውቃሉ።",
//     "steps": [
//       { "title": "ያግኙ", "desc": "ንግድዎን፣ ግቦችዎን እና መፍትሄ የሚፈልጉትን ችግሮች እንማራለን።" },
//       { "title": "ንድፍ", "desc": "ከመገንባታችን በፊት እቅዱን እና የሚሰራ ፕሮቶታይፕ ያጸድቃሉ።" },
//       { "title": "ግንባታ", "desc": "በአጭር ዑደቶች ውስጥ እናዳብራለን እና በየሳምንቱ እድገትን እናሳያለን።" },
//       { "title": "ምረቃ እና ድጋፍ", "desc": "እናሰማራለን፣ ቡድንዎን እናሰለጥናለን እና ስርዓቱን ማሻሻል እንቀጥላለን።" }
//     ]
//   },
//   "contactSection": {
//     "description": "ቴክኖሎጂ · AI · የሶፍትዌር ልማት · ዲጂታል ሽግግር። ለኢትዮጵያ እና ለአለም አቀፍ ንግዶች ሙሉ ዲጂታል የቢዝነስ ስርዓቶችን መገንባት።",
//     "servicesTitle": "አገልግሎቶች",
//     "servicesList": [
//       "ልዩ የሶፍትዌር ልማት",
//       "የዌብ እና ሞባይል አፕሊኬሽኖች",
//       "የ AI ራስ-ሰር ስራ",
//       "የድርጅት ስርዓቶች",
//       "UI/UX ንድፍ",
//       "የክላውድ መፍትሄዎች",
//       "የጥናት ስራዎች"
//     ],
//     "contactTitle": "አግኙን",
//     "location": "አዲስ አበባ፣ ኢትዮጵያ",
//     "copyright": "መብቱ በህግ የተጠበቀ ነው።"
//   }
// }

// todo version 2
