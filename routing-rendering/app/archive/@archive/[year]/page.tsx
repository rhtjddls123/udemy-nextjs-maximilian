import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

interface FilteredNewsPageProps {
  params: Promise<{
    year: string;
  }>;
}

const FilteredNewsPage = async ({ params }: FilteredNewsPageProps) => {
  const { year } = await params;
  const news = getNewsForYear(year);
  return <NewsList news={news} />;
};

export default FilteredNewsPage;
