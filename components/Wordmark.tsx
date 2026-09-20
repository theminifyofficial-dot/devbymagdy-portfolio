/**
 * Set in Archivo as live text rather than an image, so the wordmark stays
 * sharp at any size and always matches the site's own typeface.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display inline-flex items-center gap-2 text-[1.0625rem] font-bold tracking-[-0.04em] text-ink ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block h-[0.95em] w-[3px] bg-moss"
      />
      devbymagdy
    </span>
  );
}
