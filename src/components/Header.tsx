import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          DailyPulse
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link
            href="/"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/rss.xml"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            RSS
          </Link>
        </nav>
      </div>
    </header>
  );
}
