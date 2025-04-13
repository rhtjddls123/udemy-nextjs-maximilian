import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import { Suspense } from "react";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <div>
      <h1>News Page</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <NewsList news={news} />
      </Suspense>
    </div>
  );
};

export default NewsPage;
