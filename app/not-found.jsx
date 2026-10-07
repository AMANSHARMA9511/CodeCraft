import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-5">
      <div className="text-center max-w-lg">
        {/* Big 404 */}
        <div className="relative mb-6">
          <p className="text-[10rem] font-extrabold leading-none
            gradient-text opacity-20 select-none" aria-hidden="true">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl font-extrabold gradient-text">404</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
          Page Not Found
        </h1>
        <p className="text-[var(--text-secondary)] text-base mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-7 py-3.5 rounded-full text-sm font-bold text-white
              bg-gradient-to-r from-violet-600 to-purple-600
              hover:from-violet-500 hover:to-purple-500
              shadow-lg shadow-violet-500/20 transition-all hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full text-sm font-semibold
              text-[var(--text-secondary)] border border-[var(--border)]
              hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]
              transition-all hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
