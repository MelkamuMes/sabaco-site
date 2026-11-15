// "use client";
// import { useState, useEffect } from "react";

// export function TypingText() {
//   const words = ["ERP systems", "mobile apps", "websites", "chatbots", "custom software"];
//   const [text, setText] = useState("");
//   const [wordIdx, setWordIdx] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[wordIdx];
//     const speed = isDeleting ? 45 : 90;

//     const timer = setTimeout(() => {
//       if (!isDeleting && text === currentWord) {
//         setTimeout(() => setIsDeleting(true), 1500);
//       } else if (isDeleting && text === "") {
//         setIsDeleting(false);
//         setWordIdx((prev) => (prev + 1) % words.length);
//       } else {
//         setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
//       }
//     }, speed);
//     return () => clearTimeout(timer);
//   }, [text, isDeleting, wordIdx, words]);

//   return (
//     <span className="text-[var(--acc)] inline-block min-h-[1.12em]">
//       {text}
//       <span className="inline-block w-[4px] h-[.9em] bg-[var(--acc)] ml-[6px] align-[-.05em] animate-[blink_1s_steps(1)_infinite]"></span>
//     </span>
//   );
// }

// export function FeatureTabs() {
//   const [active, setActive] = useState("erp");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev === "erp" ? "app" : prev === "app" ? "bot" : "erp"));
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-white dark:bg-[var(--mid)] border border-gray-200 dark:border-[rgba(125,183,232,.25)] rounded-2xl shadow-xl dark:shadow-[0_30px_60px_rgba(0,0,0,.35)] overflow-hidden animate-[rise_.9s_ease-out_both,float_7s_ease-in-out_1s_infinite]">
      
//       <div className="flex gap-1.5 p-3 border-b border-gray-100 dark:border-[rgba(125,183,232,.18)]">
//         {["erp", "app", "bot"].map((tab) => (
//           <button 
//             key={tab} 
//             onClick={() => setActive(tab)} 
//             className={`flex-1 p-2.5 rounded-lg font-bold text-sm transition-colors ${
//               active === tab 
//                 ? "bg-[var(--navy)] text-[var(--gold)]" 
//                 : "bg-transparent text-gray-500 hover:text-gray-900 dark:text-[#9fb2c4] dark:hover:text-white"
//             }`}
//           >
//             {tab === "erp" ? "ERP" : tab === "app" ? "Mobile app" : "Chatbot"}
//           </button>
//         ))}
//       </div>

//       <div className="p-6 min-h-[290px]">
        
//         {active === "erp" && (
//           <div className="animate-[pop_.5s_ease-out_both]">
//             {[
//               { label: "Sales", w: 92 }, { label: "Inventory", w: 78 }, 
//               { label: "HR and payroll", w: 85 }, { label: "Finance", w: 96 }, { label: "Reports", w: 64 }
//             ].map((item, i) => (
//               <div key={i} className="mb-4 text-sm text-gray-600 dark:text-[#c3d0dc]">
//                 <b className="flex justify-between text-gray-900 dark:text-[#F5F7FA] mb-1.5 font-bold">
//                   <span>{item.label}</span><span>{item.w}%</span>
//                 </b>
//                 <div className="h-2 rounded-[5px] bg-gray-200 dark:bg-[rgba(125,183,232,.18)] overflow-hidden">
//                   <span className="block h-full bg-gradient-to-r from-[var(--sky)] to-[var(--gold)] rounded-[5px] animate-[grow_1.2s_ease-out_both]" style={{ width: `${item.w}%` }}></span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {active === "app" && (
//           <div className="animate-[pop_.5s_ease-out_both]">
//              {[1, 2, 3].map(i => (
//                 <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-[rgba(125,183,232,.15)] text-sm text-gray-800 dark:text-[#F5F7FA]">
//                    <span>Order #{1040 + i}<br/><small className="text-gray-500 dark:text-[#9fb2c4]">{i * 2} items</small></span>
//                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-[rgba(125,183,232,.18)] dark:text-[var(--sky)]">
//                      {i === 1 ? "Delivered" : "On the way"}
//                    </span>
//                 </div>
//              ))}
//           </div>
//         )}

//         {active === "bot" && (
//           <div className="animate-[pop_.5s_ease-out_both] space-y-3">
//              {/* User Message */}
//              <div className="max-w-[82%] p-[11px_15px] rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800 dark:bg-[var(--navy)] dark:text-[#F5F7FA] text-sm animate-[pop_.5s_ease-out_both]">
//                Where is my invoice for March?
//              </div>
             
//              <div className="max-w-[82%] p-[11px_15px] rounded-2xl rounded-br-sm bg-[var(--gold)] text-sm font-medium text-[var(--navy)] ml-auto animate-[pop_.5s_ease-out_.5s_both]">
//                Found it. Invoice #2031 was sent on 3 March. Want me to email it again?
//              </div>
             
//              <div className="max-w-[82%] p-[11px_15px] rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800 dark:bg-[var(--navy)] dark:text-[#F5F7FA] text-sm animate-[pop_.5s_ease-out_1s_both]">
//                Yes, please.
//              </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// todo translation 
"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export function TypingText() {
  const { dict } = useLanguage();
  const words = dict.heroInteractive.typingWords;
  
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset typing state if language changes
  useEffect(() => {
    setText("");
    setWordIdx(0);
    setIsDeleting(false);
  }, [words]);

  useEffect(() => {
    const currentWord = words[wordIdx];
    const speed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
      } else {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIdx, words]);

  return (
    <span className="text-[var(--acc)] inline-block min-h-[1.12em]">
      {text}
      <span className="inline-block w-[4px] h-[.9em] bg-[var(--acc)] ml-[6px] align-[-.05em] animate-[blink_1s_steps(1)_infinite]"></span>
    </span>
  );
}

export function FeatureTabs() {
  const { dict } = useLanguage();
  const [active, setActive] = useState("erp");

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === "erp" ? "app" : prev === "app" ? "bot" : "erp"));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Use translated labels from the dictionary
  const erpData = [
    { label: dict.heroInteractive.erp.sales, w: 92 },
    { label: dict.heroInteractive.erp.inventory, w: 78 },
    { label: dict.heroInteractive.erp.hr, w: 85 },
    { label: dict.heroInteractive.erp.finance, w: 96 },
    { label: dict.heroInteractive.erp.reports, w: 64 }
  ];

  return (
    <div className="bg-white dark:bg-[var(--mid)] border border-gray-200 dark:border-[rgba(125,183,232,.25)] rounded-2xl shadow-xl dark:shadow-[0_30px_60px_rgba(0,0,0,.35)] overflow-hidden animate-[rise_.9s_ease-out_both,float_7s_ease-in-out_1s_infinite]">
      
      {/* Tabs Header */}
      <div className="flex gap-1.5 p-3 border-b border-gray-100 dark:border-[rgba(125,183,232,.18)]">
        {["erp", "app", "bot"].map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActive(tab)} 
            className={`flex-1 p-2.5 rounded-lg font-bold text-sm transition-colors ${
              active === tab 
            ? "bg-gray-200 text-gray-900 dark:bg-[var(--navy)] dark:text-[var(--gold)]" 
            : "bg-transparent text-gray-500 hover:text-gray-900 dark:text-[#9fb2c4] dark:hover:text-white"
            }`}
          >
            {dict.heroInteractive.tabs[tab as keyof typeof dict.heroInteractive.tabs]}
          </button>
        ))}
      </div>

      <div className="p-6 min-h-[290px]">
        
        {/* ERP TAB */}
        {active === "erp" && (
          <div className="animate-[pop_.5s_ease-out_both]">
            {erpData.map((item, i) => (
              <div key={i} className="mb-4 text-sm text-gray-600 dark:text-[#c3d0dc]">
                <b className="flex justify-between text-gray-900 dark:text-[#F5F7FA] mb-1.5 font-bold">
                  <span>{item.label}</span><span>{item.w}%</span>
                </b>
                <div className="h-2 rounded-[5px] bg-gray-200 dark:bg-[rgba(125,183,232,.18)] overflow-hidden">
                  <span className="block h-full bg-gradient-to-r from-[var(--sky)] to-[var(--gold)] rounded-[5px] animate-[grow_1.2s_ease-out_both]" style={{ width: `${item.w}%` }}></span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* APP TAB */}
        {active === "app" && (
          <div className="animate-[pop_.5s_ease-out_both]">
             {[1, 2, 3].map(i => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-[rgba(125,183,232,.15)] text-sm text-gray-800 dark:text-[#F5F7FA]">
                   <span>
                     {dict.heroInteractive.app.order} #{1040 + i}<br/>
                     <small className="text-gray-500 dark:text-[#9fb2c4]">{i * 2} {dict.heroInteractive.app.items}</small>
                   </span>
                   <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-[rgba(125,183,232,.18)] dark:text-[var(--sky)]">
                     {i === 1 ? dict.heroInteractive.app.delivered : dict.heroInteractive.app.onTheWay}
                   </span>
                </div>
             ))}
          </div>
        )}

        {/* BOT TAB */}
        {active === "bot" && (
          <div className="animate-[pop_.5s_ease-out_both] space-y-3">
             {/* User Message */}
             <div className="max-w-[82%] p-[11px_15px] rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800 dark:bg-[var(--navy)] dark:text-[#F5F7FA]  text-sm animate-[pop_.5s_ease-out_both]">
               {dict.heroInteractive.bot.user1}
             </div>
             
             {/* Bot Message */}
             <div className="max-w-[82%] p-[11px_15px] rounded-2xl rounded-br-sm bg-[var(--gold)] text-white text-sm font-medium text-[var(--navy)] ml-auto animate-[pop_.5s_ease-out_.5s_both]">
               {dict.heroInteractive.bot.bot1}
             </div>
             
             {/* User Message */}
             <div className="max-w-[82%] p-[11px_15px] rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800 dark:bg-[var(--navy)] dark:text-[#F5F7FA] text-sm animate-[pop_.5s_ease-out_1s_both]">
               {dict.heroInteractive.bot.user2}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}