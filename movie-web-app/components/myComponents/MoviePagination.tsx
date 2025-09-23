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
  whichPage: string;
  whichId: number | string;
  whichName: string;
  pageIndex: number;
  perPage?: number;
};

export function MoviePagination({
  totalResults,
  whichPage,
  whichId,
  whichName,
  pageIndex,
  perPage = 20,
}: MoviePaginationTypes) {
  // API restriction: max 500 pages
  const apiMaxPages = 500;

  // Calculate real pages from totalResults
  const calculatedPages = Math.ceil(totalResults / perPage);

  // Take the smaller of real pages vs API max
  const safeTotalPages = Math.min(calculatedPages, apiMaxPages);

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

  const makeHref = (page: number) =>
    `/${whichPage}?id=${whichId}&name=${whichName}&page=${page}`;

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
