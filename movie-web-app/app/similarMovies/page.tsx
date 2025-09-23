type SimilarMoviesPageProps = {
  params: Promise<{ id: string }>;
};

const SimilarMoviesPage = async ({ params }: SimilarMoviesPageProps) => {
  const dynamicParams = await params;
  return;
};

export default SimilarMoviesPage;
