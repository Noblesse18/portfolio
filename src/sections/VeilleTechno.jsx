import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import Marquee from "../components/Marquee";

// Proxy pour contourner CORS
const RSS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";

// Flux RSS
const RSS_FEEDS = [
  {
    url: "https://www.tomshardware.fr/feed/",
    name: "Tom's Hardware",
    icon: "🖥️",
  },
  {
    url: "https://artificialintelligence-news.com/feed/",
    name: "AI News",
    icon: "🤖",
  },
];

const NewsCard = ({ title, link, pubDate, source, icon, description }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    });
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    const cleanText = text.replace(/<[^>]*>/g, "");
    return cleanText.length > maxLength
      ? cleanText.substring(0, maxLength) + "..."
      : cleanText;
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <figure
        className={twMerge(
          "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo to-storm hover:from-royal hover:to-indigo hover-animation"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">
              {source}
            </figcaption>
            <p className="text-xs font-medium text-white/40">
              {formatDate(pubDate)}
            </p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm font-semibold text-white line-clamp-2">
          {title}
        </blockquote>
        <p className="mt-1 text-xs text-white/60 line-clamp-2">
          {truncateText(description, 100)}
        </p>
      </figure>
    </a>
  );
};

const LoadingCard = () => (
  <figure
    className={twMerge(
      "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo to-storm animate-pulse"
    )}
  >
    <div className="flex flex-row items-center gap-2">
      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
      <div className="flex flex-col gap-1">
        <div className="w-20 h-3 bg-white/20 rounded"></div>
        <div className="w-12 h-2 bg-white/10 rounded"></div>
      </div>
    </div>
    <div className="mt-3 space-y-2">
      <div className="w-full h-3 bg-white/20 rounded"></div>
      <div className="w-3/4 h-3 bg-white/20 rounded"></div>
    </div>
  </figure>
);

export default function VeilleTechno() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllFeeds = async () => {
      try {
        const allNews = [];

        for (const feed of RSS_FEEDS) {
          try {
            const response = await fetch(
              `${RSS_PROXY}${encodeURIComponent(feed.url)}`
            );
            const data = await response.json();

            if (data.status === "ok" && data.items) {
              const feedNews = data.items.slice(0, 5).map((item) => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                description: item.description,
                source: feed.name,
                icon: feed.icon,
              }));
              allNews.push(...feedNews);
            }
          } catch (feedError) {
            console.error(`Erreur pour ${feed.name}:`, feedError);
          }
        }

        // Mélanger les news
        const shuffledNews = allNews.sort(() => Math.random() - 0.5);
        setNews(shuffledNews);
        setLoading(false);
      } catch (err) {
        setError("Impossible de charger les actualités");
        setLoading(false);
      }
    };

    fetchAllFeeds();

    // Rafraîchir toutes les 5 minutes
    const interval = setInterval(fetchAllFeeds, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const firstRow = news.slice(0, Math.ceil(news.length / 2));
  const secondRow = news.slice(Math.ceil(news.length / 2));

  return (
    <div className="items-start mt-25 md:mt-35 c-space" id="veille">
      <h2 className="text-heading">📰 Veille Technologique</h2>
      <p className="mt-2 text-neutral-400">
        Flux RSS en direct de Tom's Hardware et AI News
      </p>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        {loading ? (
          <>
            <Marquee pauseOnHover className="[--duration:25s]">
              {[...Array(5)].map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s]">
              {[...Array(5)].map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </Marquee>
          </>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-indigo rounded-lg hover:bg-royal transition-colors"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <>
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((item, index) => (
                <NewsCard key={`${item.link}-${index}`} {...item} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondRow.map((item, index) => (
                <NewsCard key={`${item.link}-${index}`} {...item} />
              ))}
            </Marquee>
          </>
        )}
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}

