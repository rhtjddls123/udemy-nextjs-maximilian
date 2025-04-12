import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NewsDetailPageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetailPage = async ({ params }: NewsDetailPageProps) => {
  const { newsId } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsId}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={112}
            height={112}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailPage;
