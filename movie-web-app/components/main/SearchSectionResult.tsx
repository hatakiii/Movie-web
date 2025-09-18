type MovieType = {
  title: string;
  score: number | string;
  releaseYear: string;
  image: string;
};

export const SearchSectionResult = ({
  title,
  score,
  releaseYear,
  image,
}: MovieType) => {
  return (
    <div className="flex flex-col">
      <div className="w-[533px] h-[116px] flex items-center justify-center gap-4 ">
        <div className="bg-red-400 w-[67px] h-25">
          <img
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="w-[454px] h-[99px]">
          <div className="w-[454px] h-[51px]">
            <div className="w-full h-[28px] text-text-text-foreground text-xl font-semibold leading-7">
              {title}
            </div>
            <div className="w-full h-[23px] flex">
              <img src="star.svg" className="w-4 h-4" />
              <p className="text-[14px] ">
                {score}
                <span className="text-[12px]">/10</span>
              </p>
            </div>
            <p className="text-text-text-foreground text-sm font-medium leading-tight mt-3">
              {releaseYear}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[533px] h-[17px]"></div>
    </div>
  );
};
