import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

      <DialogContent className="p-0  sm:max-w-[997px] sm:max-h-[561px] w-[100vw] max-h-[100vh]">
        <DialogTitle className="hidden"></DialogTitle>

        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${YTkey}`}
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full rounded-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
