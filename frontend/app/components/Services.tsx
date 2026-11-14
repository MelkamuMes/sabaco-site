import Reveal from "./ui/Reveal";

const services = [
  { title: "ERP systems", desc: "One platform for sales, stock, accounting, HR and reporting. We build it around your real workflows and connect it to the tools you already use.", big: true, tags: ["Sales", "Inventory", "Finance", "HR and payroll", "Dashboards"], icon: "grid" },
  { title: "Websites", desc: "Fast, secure sites and web apps that turn visitors into customers.", icon: "globe" },
  { title: "Mobile apps", desc: "iOS and Android apps your customers and staff enjoy using every day.", icon: "mobile" },
  { title: "Telegram bots", desc: "Bots for Telegram, WhatsApp and your website.", icon: "bot" },
  { title: "Custom software", desc: "Have a different idea? We build integrations, portals and internal tools to your specification.", icon: "code" }
];

export default function Services() {
  return (
    // 1. Added 'relative' and 'overflow-hidden' to the section
    <section id="services" className="relative py-[92px] overflow-hidden">
      
      {/* 2. The Glow: Changed to bottom-0, ellipse_at_bottom, and added z-0 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(14,255,135,0.15),transparent_50%)] pointer-events-none z-0" />

      {/* 3. Added 'relative z-10' so the content sits above the glow */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <Reveal className="max-w-[640px] mb-[48px]">
          <h2 className="text-[clamp(30px,4vw,42px)] font-bold tracking-[-0.015em]">Everything your company needs to build, in one team.</h2>
          <p className="text-[var(--muted)] mt-[14px]">One partner for strategy, design, development and support, so your systems work together from day one.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className={`${s.big ? "md:col-span-2 bg-[var(--navy)] text-[#F5F7FA] border-[var(--navy)]" : "bg-[var(--surface)] border-[var(--line)]"} border rounded-[14px] p-[28px] group hover:border-[var(--gold)] hover:shadow-[0_18px_40px_rgba(16,44,66,.2)] transition-all duration-300`}>
              <div className={`w-[46px] h-[46px] rounded-[12px] grid place-items-center transition-transform group-hover:rotate-[-8deg] group-hover:scale-[1.12] ${s.big ? "bg-[var(--gold)]" : "bg-[rgba(212,175,55,.18)]"}`}>
                <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none stroke-2 stroke-linecap-round stroke-linejoin-round ${s.big ? "stroke-[var(--navy)]" : "stroke-[var(--gold)]"}`}>
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                </svg>
              </div>
              <h3 className="text-[21px] mt-4 mb-2.5">{s.title}</h3>
              <p className={`text-[16px] m-0 ${s.big ? "text-[#c3d0dc]" : "text-[var(--muted)]"}`}>{s.desc}</p>
              
              {s.tags && (
                <ul className="mt-4 p-0 list-none flex flex-wrap gap-2">
                  {s.tags.map(t => <li key={t} className="text-[13px] font-bold px-3 py-[5px] rounded-full border border-[rgba(125,183,232,.4)] text-[var(--sky)]">{t}</li>)}
                </ul>
              )}
            </Reveal>
          ))}
          
        </div>
      </div>

    </section>
  );
}