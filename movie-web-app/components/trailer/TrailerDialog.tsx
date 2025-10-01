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

      <DialogContent className="p-0 max-w-[997px] sm:max-w-[997px] max-h-[561px] ">
        <DialogTitle className="hidden"></DialogTitle>

        <iframe
          width={997}
          height={561}
          src={`https://www.youtube.com/embed/${YTkey}`}
          title="Youtube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};
