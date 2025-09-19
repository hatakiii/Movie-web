import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

export const TrailerDialog = ({ YTkey }: { YTkey: string | undefined }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="w-[174px] h-[40px] absolute left-6 bottom-6 flex justify-between items-center"
          aria-controls="radix-_R_kpbn5ritqlb_"
        >
          <MdOutlinePlayCircleFilled className="w-10 h-10" />
          <p className="w-20 h-6 text-white text-base font-normal align-middle justify-center">
            Play trailer
          </p>
          <p className="w-7.5 h-5 text-white text-sm font-normal align-middle justify-center"></p>
        </button>
      </DialogTrigger>

      <DialogContent className="p-0 max-w-[1080px] sm:max-w-[1080px]">
        <DialogTitle></DialogTitle>
        <iframe
          width={1080}
          height={600}
          src={`https://www.youtube.com/embed/${YTkey}`}
          title="Youtube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};
