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
            <DialogContent className="max-w-screen max-h-screen sm:max-w-[98vw] sm:max-h-[98vh] w-auto h-auto flex flex-col bg-white rounded-lg">
                <div className="flex-1 min-h-0 p-2 sm:p-1 flex items-center justify-center overflow-hidden">
                    <img 
                        src={imageUrl} 
                        alt={altText} 
                        className="max-w-[70vw] max-h-[70vh] sm:max-w-[70vw] object-contain"
                    />
                </div>
                
                <div className="border-t border-gray-200 p-4 sm:p-6 flex-shrink-0 text-center bg-gray-50/50 backdrop-blur-sm">
                    <DialogTitle className="text-xl sm:text-2xl text-gray-800 mb-3 title-style">{title}</DialogTitle>
                    <DialogDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</DialogDescription>
                </div>
            </DialogContent>
        </Dialog>
    );
}