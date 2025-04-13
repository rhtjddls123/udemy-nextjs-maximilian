import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ImagePageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const ImagePage = async ({ params }: ImagePageProps) => {
  const { newsId } = await params;
  const newsItem = await getNewsItem(newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
    </div>
  );
};

export default ImagePage;
