import { NewsType } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

interface NewsListProps {
  news: NewsType[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={200}
              height={224}
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
