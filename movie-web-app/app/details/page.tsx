import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MovieCard } from "@/components/myComponents/MovieCard";
import { MovieDetailsPageSkeleton } from "@/components/main/MovieDetailsPageSkeleton";

const MovieDetails = () => {
  return (
    <div>
      <div className="max-w-[1080px] min-h-[524px] flex flex-col mt-[52px]">
        <div className="min-w-[100%] min-h-[72px] flex justify-between">
          <div className="min-w-[211px] min-h-[72px]">
            <p className="text-text-text-foreground text-4xl font-bold leading-10">
              Wicked
            </p>
            <h1 className="text-text-text-foreground text-lg font-normal leading-7">
              2024.11.26 · PG · 2h 40m
            </h1>
          </div>
          <div className="min-w-[83px] min-h-[64px]">
            <p className="w-[83px] h-[16px] text-text-text-foreground text-xs font-medium">
              Rating
            </p>
            <div className="w-[83px] h-[48px] flex">
              <img
                src="./star.svg"
                alt=""
                width={28}
                height={28}
                className="w-[28px] h-[48px]"
              />
              <div>
                <p className="text-text-text-muted-foreground text-base font-normal ">
                  <span className="text-text-text-foreground text-lg font-semibold leading-7 ">
                    6.9
                  </span>
                  /10
                </p>
                <h1 className="text-text-text-muted-foreground text-xs font-normal text/text-muted-foreground">
                  37k
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Movie posters */}
        <div className="w-full h-[428px] flex justify-between mt-6">
          <div className="w-[290px] h-[428px] bg-red-500"></div>
          <div className="w-[760px] h-[428px] bg-yellow-600 relative">
            <button className="w-[174px] h-[40px] absolute left-6 bottom-6 flex justify-between items-center">
              <img src="./Icon Button.svg" alt="" />
              <p className="w-20 h-6 text-white text-base font-normal align-middle justify-center">
                Play trailer
              </p>
              <p className="w-7.5 h-5 text-white text-sm font-normal align-middle justify-center">
                2:35
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* Description section */}
      <div className="max-w-[1080px] min-h-[271px] mt-8">
        <div className="w-full h-5 flex gap-3">
          <Badge>Fairy Tale</Badge>
          <Badge>Pop musical</Badge>
          <Badge>Fantasy</Badge>
          <Badge>Musical</Badge>
        </div>
        <p
          className="w-full h-12 mt-5 text-text-text-foreground text-base font-normal
"
        >
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        <div className="w-full h-[41px] mt-5 flex">
          <h1 className="w-[64px] h-full mr-[53px] text-text-text-foreground text-base font-bold leading-7">
            Director
          </h1>
          <p className="w-full h-full text-text-text-foreground text-base font-normal">
            Names
          </p>
        </div>
        <div className="w-full h-[9px] flex">
          <DropdownMenuSeparator className="w-[100%]" />
        </div>
        <div className="w-full h-[41px] mt-5 flex">
          <h1 className="w-[64px] h-full mr-[53px] text-text-text-foreground text-base font-bold leading-7 ">
            Director
          </h1>
          <p className="w-full h-full text-text-text-foreground text-base font-normal">
            Names
          </p>
        </div>
        <div className="w-full h-[9px] flex">
          <DropdownMenuSeparator className="w-[100%]" />
        </div>
        <div className="w-full h-[41px] mt-5 flex">
          <h1 className="w-[64px] h-full mr-[53px] text-text-text-foreground text-base font-bold leading-7 ">
            Director
          </h1>
          <p className="w-full h-full text-text-text-foreground text-base font-normal">
            Names
          </p>
        </div>
        <div className="w-full h-[9px] flex">
          <DropdownMenuSeparator className="w-[100%]" />
        </div>
      </div>
      {/* More Like This */}
      <div className="max-w-[1080px] min-h-[440px] mt-8">
        <div className="w-full h-[36px] flex place-content-between items-center mb-[32px]">
          <span className="w-full h-[32px] justify-start text-text-text-foreground text-2xl font-semibold leading-loose flex items-center">
            More like this
          </span>
          <button className="w-[120px] h-[36px] gap-2 flex justify-start text-text-text-foreground text-sm font-medium leading-tight">
            See more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Movie Card Section */}
        <div className="max-w-[1080px] min-h-[372px] gap-8 flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <MovieCard
              key={index}
              title="Gladiator"
              score={12}
              image="some"
              classStyle={"w-[190px] h-[372px]"}
            />
          ))}
        </div>
      </div>
      <MovieDetailsPageSkeleton />
    </div>
  );
};

export default MovieDetails;
