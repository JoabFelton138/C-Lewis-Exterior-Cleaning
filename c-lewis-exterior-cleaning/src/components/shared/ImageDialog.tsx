import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";

interface ImageDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    imageUrl: string;
    altText: string;
    title: string;
    description: string;
}

export const ImageDialog = ({open, onOpenChange, imageUrl, altText, title, description} : ImageDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto bg-transparent border-0 shadow-none p-0">
                <div className="relative flex items-center justify-center">
                    <img 
                        src={imageUrl} 
                        alt={altText} 
                        className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 rounded-b-lg">
                        <DialogTitle className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-1 sm:mb-2 title-style">{title}</DialogTitle>
                        <DialogDescription className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed">{description}</DialogDescription>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}