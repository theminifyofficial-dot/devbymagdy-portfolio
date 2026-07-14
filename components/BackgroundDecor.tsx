export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* soft color washes */}
      <div className="absolute left-[-6%] top-[6%] h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute right-[-4%] top-[28%] h-80 w-80 rounded-full bg-purple/10 blur-[110px]" />
      <div className="absolute left-[4%] top-[54%] h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute right-[6%] top-[78%] h-80 w-80 rounded-full bg-purple/10 blur-[110px]" />

      {/* sparse floating shapes */}
      <div className="absolute left-[18%] top-[16%] h-4 w-4 rounded-full bg-accent/20" />
      <div className="absolute right-[22%] top-[38%] h-5 w-5 rotate-12 rounded-lg bg-purple/15" />
      <div className="absolute left-[28%] top-[62%] h-3 w-3 rounded-full bg-purple/25" />
      <div className="absolute right-[14%] top-[86%] h-4 w-4 rounded-full bg-accent/20" />
    </div>
  );
}
