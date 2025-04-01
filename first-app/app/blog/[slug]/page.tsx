interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const slug = (await params).slug;

  return (
    <main>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </main>
  );
};

export default BlogPostPage;
