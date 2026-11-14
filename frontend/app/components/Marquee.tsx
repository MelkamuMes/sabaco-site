export default function Marquee() {
  const items = ["ERP", "Sales", "HR management", "Inventory", "Payroll Processing", "Finance Management", "Telegram bots", "Mobile Apps", "Websites", "Custom Software", "Automation"];
  
  return (
    <div className="bg-[var(--surface)] border-b border-[var(--line)] overflow-hidden whitespace-nowrap py-5">
      <div className="inline-flex animate-[scroll_32s_linear_infinite] hover:[animation-play-state:paused]">
        {[1, 2].map((i) => (
          <div key={i} className="flex shrink-0">
            {items.map((item, j) => (
              <span key={j} className="font-[var(--f-head)] font-bold text-[18px] text-[var(--muted)] after:content-['◆'] after:text-[var(--gold)] after:mx-[34px] after:text-[12px]">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}