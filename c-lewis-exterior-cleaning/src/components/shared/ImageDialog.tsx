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
                
                <div className="border-t p-4 flex-shrink-0 text-left">
                    <DialogTitle className="text-lg font-semibold text-gray-900 mb-2">{title}</DialogTitle>
                    <DialogDescription className="text-sm text-gray-600 leading-relaxed">{description}</DialogDescription>
                </div>
            </DialogContent>
        </Dialog>
    );
}