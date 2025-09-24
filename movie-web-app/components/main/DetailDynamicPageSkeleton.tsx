import React from "react";
import { Skeleton } from "../ui/skeleton";

export const DetailDynamicPageSkeleton = () => {
  return (
    <div className="w-[1440px] h-full mt-13 bg-background-bg-background flex flex-col items-center">
      <div className="w-[1080px] left-[180px] top-[191px] inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch pr-3 inline-flex justify-between items-center">
          <div className="w-52 inline-flex flex-col justify-start items-start gap-1">
            <div
              data-shape="Line"
              data-style="Default"
              className="self-stretch h-10  "
            >
              <Skeleton className="w-52 h-10 left-0 top-0  bg-background-bg-muted rounded-full bg-white " />
            </div>
            <div data-shape="Line" data-style="Default" className="w-60 h-7 ">
              <Skeleton className="w-60 h-7 left-0 top-0 bg-background-bg-muted rounded-full bg-white " />
            </div>
          </div>
          <div className="inline-flex flex-col justify-start items-start">
            <div className="self-stretch justify-start text-text-text-foreground text-xs font-medium leading-none">
              Rating
            </div>
            <div className="self-stretch h-12 pt-1 inline-flex justify-start items-center gap-1">
              <div className="w-20 self-stretch inline-flex flex-col justify-between items-start">
                <div
                  data-shape="Line"
                  data-style="Default"
                  className="self-stretch h-5"
                >
                  <Skeleton className="w-20 h-5 left-0 top-0  bg-background-bg-muted rounded-full bg-white " />
                </div>
                <div
                  data-shape="Line"
                  data-style="Default"
                  className="self-stretch h-4 "
                >
                  <Skeleton className="w-20 h-4 left-0 top-0  bg-background-bg-muted rounded-full bg-white " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-8">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-72 h-96  rounded"
          >
            <Skeleton className="w-72 h-96 left-0 top-0 bg-background-bg-muted rounded-lg bg-white " />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-[760px] h-96 rounded"
          >
            <Skeleton className="w-[760px] h-96 left-0 top-0  bg-background-bg-muted rounded-lg bg-white " />
          </div>
        </div>
      </div>
      <div className="w-[1080px] mt-8 flex flex-col gap-8">
        {/* <!-- tags row --> */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-2.5 py-0.5 rounded-full outline outline-border-border-border flex items-center gap-2.5">
            <span className="text-text-text-foreground text-xs font-semibold leading-none">
              Fairy Tale
            </span>
          </div>
          <div className="px-2.5 py-0.5 rounded-full outline  outline-border-border-border flex items-center gap-2.5">
            <span className="text-text-text-foreground text-xs font-semibold leading-none">
              Pop Musical
            </span>
          </div>
          <div className="px-2.5 py-0.5 rounded-full outline outline-border-border-border flex items-center gap-2.5">
            <span className="text-text-text-foreground text-xs font-semibold leading-none">
              Fantasy
            </span>
          </div>
          <div className="px-2.5 py-0.5 rounded-full outline  outline-border-border-border flex items-center gap-2.5">
            <span className="text-text-text-foreground text-xs font-semibold leading-none">
              Musical
            </span>
          </div>
          <div className="px-2.5 py-0.5 rounded-full outline  outline-border-border-border flex items-center gap-2.5">
            <span className="text-text-text-foreground text-xs font-semibold leading-none">
              Romance
            </span>
          </div>
        </div>

        {/* <!-- progress bars --> */}
        <div className="flex flex-col gap-1">
          <Skeleton className="h-5 w-full bg-background-bg-muted rounded-full bg-white" />
          <Skeleton className="h-5 w-[699px] bg-background-bg-muted rounded-full bg-white" />
        </div>

        {/* <!-- detail rows --> */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-14">
              <Skeleton className="h-7 w-16 bg-background-bg-muted rounded-full bg-white" />
              <Skeleton className="h-7 w-36 bg-background-bg-muted rounded-full bg-white" />
            </div>
            <div className="border-t border-border-border-border"></div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-14">
              <Skeleton className="h-7 w-16 bg-background-bg-muted rounded-full bg-white" />
              <Skeleton className="h-7 w-96 bg-background-bg-muted rounded-full bg-white" />
            </div>
            <div className="border-t border-border-border-border"></div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-14">
              <Skeleton className="h-7 w-16 bg-background-bg-muted rounded-full bg-white" />
              <Skeleton className="h-7 w-96 bg-background-bg-muted rounded-full bg-white" />
            </div>
            <div className="border-t border-border-border-border"></div>
          </div>
        </div>
      </div>

      <div className="w-[1080px] left-[180px] top-[1050px] inline-flex flex-col justify-start items-start gap-8 mt-8 overflow-hidden">
        <div className="self-stretch inline-flex justify-between items-start">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-64 h-8  rounded-full  "
          >
            <Skeleton className="w-64 h-8 left-0 top-0  bg-background-bg-muted rounded-full bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-40 h-9  rounded-full  "
          >
            <Skeleton className="w-40 h-9 left-0 top-0 bg-background-bg-muted rounded-full bg-white" />
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-7.5">
          <div
            data-shape="Line"
            data-style="Default"
            className="w-48 h-96  rounded-lg "
          >
            <Skeleton className="w-48 h-96 left-0 top-0 bg-background-bg-muted rounded-lg  bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-48 h-96  rounded-lg"
          >
            <Skeleton className="w-48 h-96 left-0 top-0  bg-background-bg-muted rounded-lg  bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-48 h-96  rounded-lg  "
          >
            <Skeleton className="w-48 h-96 left-0 top-0  bg-background-bg-muted rounded-lg  bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-48 h-96  rounded-lg  "
          >
            <Skeleton className="w-48 h-96 left-0 top-0  bg-background-bg-muted rounded-lg  bg-white" />
          </div>
          <div
            data-shape="Line"
            data-style="Default"
            className="w-48 h-96  rounded-lg  "
          >
            <Skeleton className="w-48 h-96 left-0 top-0 bg-background-bg-muted rounded-lg  bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
