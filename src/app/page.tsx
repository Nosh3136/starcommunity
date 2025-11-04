import ArticleCard from "@/components/ArticleCard";
import ThemeToggle from "@/components/ThemeToggle";

// Mock data
const mockArticles = [
  {
    slug: "ai-quantum",
    title: "AI Achieves Quantum Supremacy",
    date: "2025-11-02",
    category: "AI",
    excerpt:
      "New model solves problems in seconds that took supercomputers years.",
    image: "/images/ai.jpg",
  },
  {
    slug: "mars-habitat",
    title: "First Human Habitat Lands on Mars",
    date: "2025-11-01",
    category: "Space",
    excerpt: "SpaceX deploys pressurized module with life support.",
    image: "/images/mars.jpg",
  },
  // Add 4 more
  ...Array(4)
    .fill(null)
    .map((_, i) => ({
      slug: `article-${i + 3}`,
      title: `Breaking News ${i + 3}`,
      date: "2025-10-31",
      category: "Tech",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: null,
    })),
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            DailyPulse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Fresh insights on tech, science, and the future — every day.
          </p>
          <ThemeToggle />
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockArticles.slice(0, 6).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
