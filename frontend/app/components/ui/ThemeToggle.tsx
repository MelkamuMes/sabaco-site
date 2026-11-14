// "use client";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<"light" | "dark">("light");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const saved = localStorage.getItem("th");
//     const initial = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
//     setTheme(initial as "light" | "dark");
//     document.documentElement.setAttribute("data-theme", initial);
//   }, []);

//   const toggleTheme = () => {
//     const next = theme === "dark" ? "light" : "dark";
//     setTheme(next);
//     document.documentElement.setAttribute("data-theme", next);
//     localStorage.setItem("th", next);
//   };

//   if (!mounted) return <div className="w-10 h-10 ml-4" />; // Prevent hydration mismatch

//   return (
//     <button onClick={toggleTheme} className="ml-4 w-10 h-10 rounded-full border-[1.5px] border-[var(--hgh)] bg-transparent inline-grid place-items-center transition-transform duration-300 hover:rotate-[25deg] hover:border-[var(--gold)]" aria-label="Toggle Theme">
//       {theme === "dark" ? (
//         <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
//       ) : (
//         <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
//       )}
//     </button>
//   );
// }


// todo
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("th");
    const initial = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial as "light" | "dark");
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("th", next);
  };

  if (!mounted) return <div className="w-10 h-10 ml-4" />;

  return (
    <button 
      onClick={toggleTheme} 
      className="ml-4 w-10 h-10 rounded-full border-[1.5px] border-[var(--hgh)] bg-transparent inline-grid place-items-center transition-transform duration-300 hover:rotate-[25deg] hover:border-[var(--gold)] cursor-pointer" 
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        /* Sun Icon */
        <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
        </svg>
      ) : (
        /* Moon Icon */
        <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
        </svg>
      )}
    </button>
  );
}