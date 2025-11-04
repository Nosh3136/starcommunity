import Link from "next/link";
import Image from "next/image";

type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string | null;
};

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col">
        {/* Image */}
        {article.image ? (
          <div className="relative h-48 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600" />
        )}

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-xs mb-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full font-medium">
              {article.category}
            </span>
            <time className="text-gray-500 dark:text-gray-400">
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3 flex-1">
            {article.excerpt}
          </p>

          <span className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
            Read more →
          </span>
        </div>
      </article>
    </Link>
  );
}
