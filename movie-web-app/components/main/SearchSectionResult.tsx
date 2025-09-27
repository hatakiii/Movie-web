type MovieType = {
  title: string;
  score: number | string;
  releaseYear: string;
  image: string;
};
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
export const SearchSectionResult = ({
  title,
  score,
  releaseYear,
  image,
}: MovieType) => {
  const [imgSrc, setImgSrc] = useState(
    `https://image.tmdb.org/t/p/w500${image}`
  );
  return (
    <div className="flex flex-col">
      <div className="w-[533px] h-[116px] flex items-center justify-center gap-4 ">
        <div className="bg-red-400 w-[67px] h-25">
          <Image
            src={imgSrc || "/fallback.png"}
            alt=""
            className="w-full h-full"
            width={67}
            height={100}
            onError={() => setImgSrc("/fallback.png")}
          />
        </div>
        <div className="w-[454px] h-[99px]">
          <div className="w-[454px] h-[51px]">
            <div className="w-full h-[28px] text-text-text-foreground text-xl font-semibold leading-7 truncate">
              {title}
            </div>
            <div className="w-full h-[23px] flex gap-1">
              <IoStar className="text-amber-300" />
              <p className="text-[14px] ">
                {score}
                <span className="text-[12px]">/10</span>
              </p>
            </div>
            <div className="flex mt-3 justify-between">
              <p className="text-text-text-foreground text-sm font-medium leading-tight">
                {releaseYear}
              </p>
              <div className="flex items-center justify-center gap-2 px-4 py-2">
                <div>See more</div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[533px] h-[17px]"></div>
    </div>
  );
};
