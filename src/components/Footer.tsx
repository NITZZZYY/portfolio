export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/8 sm:px-10">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 mx-auto font-mono text-xs tracking-widest uppercase text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Leptron</span>
        <span>Designed & built by Nitesh Raghu</span>
      </div>
    </footer>
  );
}
