import { Skeleton } from "../ui/skeleton";

export const HomePageSkeleton = () => {
  return (
    <div className="sm:w-[1437px] w-full">
      <Skeleton className="w-full h-[600px] bg-background-bg-muted rounded-md mb-[52px] bg-black dark:bg-white" />

      {/* Upcoming */}
      <div className="sm:px-20 px-5 inline-flex flex-col justify-start items-start sm:gap-8 gap-5">
        <div className="w-[1277px] inline-flex justify-between items-start">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-64 h-8 relative rounded-full "
          >
            <Skeleton className="w-64 h-8 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-black dark:bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-40 h-9 relative rounded-full "
          >
            <Skeleton className="w-40 h-9 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-black dark:bg-white" />
          </div>
        </div>
        <div className="sm:w-[1277px] w-full self-stretch inline-flex justify-start items-start sm:gap-8 gap-5 flex-wrap content-start">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              data-shape="Line"
              data-style="Default"
              className="sm:w-[229.73px] sm:h-[439px] w-[157.5px] h-[309.1px] relative rounded-lg"
            >
              <Skeleton className="sm:w-[229.73px] sm:h-[439px] w-[157.5px] h-[309.1px] left-0 top-0 absolute bg-background-bg-muted rounded-lg bg-black dark:bg-white" />
            </div>
          ))}
        </div>
      </div>
      {/* Popular */}
      <div className="sm:px-20 px-5 inline-flex flex-col justify-start items-start sm:gap-8 gap-5">
        <div className="sm:w-[1277px] w-full inline-flex justify-between items-start">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-64 h-8 relative rounded-full "
          >
            <Skeleton className="w-64 h-8 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-black dark:bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-40 h-9 relative rounded-full "
          >
            <Skeleton className="w-40 h-9 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-black dark:bg-white" />
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start sm:gap-8 gap-5 flex-wrap content-start">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              data-shape="Line"
              data-style="Default"
              className="sm:w-[229.73px] sm:h-[439px] w-[157.5px] h-[309.1px] relative rounded-lg"
            >
              <Skeleton className="sm:w-[229.73px] sm:h-[439px] w-[157.5px] h-[309.1px] left-0 top-0 absolute bg-background-bg-muted rounded-lg bg-black dark:bg-white" />
            </div>
          ))}
        </div>
      </div>
      {/* Top Rated */}
      <div className="sm:px-20 px-5 inline-flex flex-col justify-start items-start sm:gap-8 gap-5">
        <div className="w-[1277px] inline-flex justify-between items-start">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-64 h-8 relative rounded-full "
          >
            <Skeleton className="w-64 h-8 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-black dark:bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-40 h-9 relative rounded-full "
          >
            <Skeleton className="w-40 h-9 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-black dark:bg-white" />
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start sm:gap-8 gap-5 flex-wrap content-start">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              data-shape="Line"
              data-style="Default"
              className="sm:w-[229.73px] sm:h-[439px] w-[157.5px] h-[309.1px] relative rounded-lg"
            >
              <Skeleton className="sm:w-[229.73px] sm:h-[439px] w-[157.5px] h-[309.1px] left-0 top-0 absolute bg-background-bg-muted rounded-lg bg-black dark:bg-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
