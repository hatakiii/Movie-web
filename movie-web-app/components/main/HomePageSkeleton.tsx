import { Loader2 } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export const HomePageSkeleton = () => {
  return (
    <div className="">
      <div className="w-full h-[600px] bg-background-bg-muted" />
      {/* Upcoming */}
      <div className="px-20 inline-flex flex-col justify-start items-start gap-8">
        <div className="w-[1277px] inline-flex justify-between items-start">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-64 h-8 relative rounded-full "
          >
            <div className="w-64 h-8 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-40 h-9 relative rounded-full "
          >
            <div className="w-40 h-9 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-white" />
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-8 flex-wrap content-start">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              data-shape="Line"
              data-style="Default"
              className="w-56 h-96 relative rounded-lg"
            >
              <div className="w-56 h-96 left-0 top-0 absolute bg-background-bg-muted rounded-lg bg-white" />
            </div>
          ))}
        </div>
      </div>
      {/* Popular */}
      <div className="px-20 inline-flex flex-col justify-start items-start gap-8">
        <div className="w-[1277px] inline-flex justify-between items-start">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-64 h-8 relative rounded-full "
          >
            <div className="w-64 h-8 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-40 h-9 relative rounded-full "
          >
            <div className="w-40 h-9 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-white" />
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-8 flex-wrap content-start">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              data-shape="Line"
              data-style="Default"
              className="w-56 h-96 relative rounded-lg"
            >
              <div className="w-56 h-96 left-0 top-0 absolute bg-background-bg-muted rounded-lg bg-white" />
            </div>
          ))}
        </div>
      </div>
      {/* Top Rated */}
      <div className="px-20 inline-flex flex-col justify-start items-start gap-8">
        <div className="w-[1277px] inline-flex justify-between items-start">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-64 h-8 relative rounded-full "
          >
            <div className="w-64 h-8 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-40 h-9 relative rounded-full "
          >
            <div className="w-40 h-9 left-0 top-0 absolute bg-background-bg-muted rounded-full bg-white" />
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-8 flex-wrap content-start">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              data-shape="Line"
              data-style="Default"
              className="w-56 h-96 relative rounded-lg"
            >
              <div className="w-56 h-96 left-0 top-0 absolute bg-background-bg-muted rounded-lg bg-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
