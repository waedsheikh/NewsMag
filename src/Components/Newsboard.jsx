import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const fallbackArticles = [
  {
    title: "World News",
    description:
      "A sample article to show the layout while the API key is not configured.",
    urlToImage:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
  {
    title: "Technology Update",
    description:
      "Your app is ready, but it needs a working News API key to load live articles.",
    urlToImage:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
  {
    title: "Business Report",
    description:
      "A clean card layout helps users browse multiple news items without feeling cramped.",
    urlToImage:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
  {
    title: "Sports Highlights",
    description:
      "Display more cards makes the homepage feel richer and more useful for readers.",
    urlToImage:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
  {
    title: "Culture & Lifestyle",
    description:
      "News boards look better when cards share a consistent size and structure.",
    urlToImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
  {
    title: "Health Watch",
    description:
      "This backup content keeps the page active even before the API is connected.",
    urlToImage:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895977?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
];

const Newsboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
      setArticles(fallbackArticles);
      return;
    }

    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok" && Array.isArray(data.articles)) {
          setArticles(data.articles.slice(0, 12));
        } else {
          setArticles(fallbackArticles);
        }
      })
      .catch((error) => {
        console.error("Error fetching news articles:", error);
        setArticles(fallbackArticles);
      });
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row g-4">
        {articles.map((news, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12">
            <NewsItem
              title={news.title || "Untitled"}
              description={news.description || "No description available."}
              src={
                news.urlToImage ||
                "https://via.placeholder.com/600x400?text=News"
              }
              url={news.url || "#"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
