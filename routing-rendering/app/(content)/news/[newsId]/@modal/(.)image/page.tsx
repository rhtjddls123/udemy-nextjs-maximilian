import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface InterceptedImagePageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const InterceptedImagePage = async ({ params }: InterceptedImagePageProps) => {
  const { newsId } = await params;
  const newsItem = await getNewsItem(newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
