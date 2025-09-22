import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

export const TrailerDialog = ({
  YTkey,
  onOpenChange,
  children,
}: {
  YTkey: string | undefined;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

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
