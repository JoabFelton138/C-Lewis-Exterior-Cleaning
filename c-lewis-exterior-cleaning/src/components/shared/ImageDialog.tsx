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
            <DialogContent className="max-w-fit max-h-screen sm:max-h-[98vh] w-auto h-auto flex flex-col bg-white rounded-lg">
                <div className="flex-1 min-h-0 p-0 sm:p-2 flex items-center justify-center overflow-hidden">
                    <img 
                        src={imageUrl} 
                        alt={altText} 
                        className="max-w-[80vw] max-h-[65vh] sm:max-w-[80vw] sm:max-h-[70vh] lg:max-w-[75vw] lg:max-h-[75vh] object-contain"
                    />
                </div>
                
                <div className="border-t border-gray-200 p-2 sm:p-3 lg:p-4 flex-shrink-0 text-center bg-gray-50/50 backdrop-blur-sm">
                    <DialogTitle className="text-base sm:text-lg lg:text-xl text-gray-800 mb-2 title-style sm:whitespace-nowrap max-w-[280px] sm:max-w-none mx-auto text-center">{title}</DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</DialogDescription>
                </div>
            </DialogContent>
        </Dialog>
    );
}