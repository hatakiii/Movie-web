import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type MoviePaginationTypes = {
  totalResults: number;
  id: string | number;

  pageIndex: number;
  perPage?: number;
};

export function MoviePaginationMoreLikeThis({
  totalResults,
  id,

  pageIndex,
  perPage = 20,
}: MoviePaginationTypes) {
  const apiMaxPages = 500;

  const safeTotalPages = Math.min(
    isNaN(Math.ceil(totalResults / perPage))
      ? 0
      : Math.ceil(totalResults / perPage),
    apiMaxPages
  );

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const half = Math.floor(maxPagesToShow / 2);

    let start = Math.max(1, pageIndex - half);
    let end = Math.min(safeTotalPages, pageIndex + half);

    if (end - start + 1 < maxPagesToShow) {
      if (start === 1) {
        end = Math.min(safeTotalPages, start + maxPagesToShow - 1);
      } else if (end === safeTotalPages) {
        start = Math.max(1, end - maxPagesToShow + 1);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const makeHref = (page: number) => `/moreLikeThis/${id}?page=${page}`;

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href={pageIndex > 1 ? makeHref(pageIndex - 1) : "#"}
          />
        </PaginationItem>

        {/* First page + ellipsis */}
        {!pageNumbers.includes(1) && (
          <>
            <PaginationItem>
              <PaginationLink href={makeHref(1)} isActive={pageIndex === 1}>
                1
              </PaginationLink>
            </PaginationItem>
            {pageNumbers[0] > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {/* Dynamic pages */}
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={makeHref(page)} isActive={page === pageIndex}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last page + ellipsis */}
        {!pageNumbers.includes(safeTotalPages) && (
          <>
            {pageNumbers[pageNumbers.length - 1] < safeTotalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href={makeHref(safeTotalPages)}
                isActive={pageIndex === safeTotalPages}
              >
                {safeTotalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href={
              pageIndex < safeTotalPages ? makeHref(pageIndex + 1) : "#The_End"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
