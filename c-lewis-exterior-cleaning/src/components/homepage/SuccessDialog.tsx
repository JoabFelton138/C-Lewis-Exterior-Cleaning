import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

interface SuccessDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const SuccessDialog = ({open, onOpenChange}: SuccessDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                            <svg 
                                className="w-8 h-8 text-green-500 animate-checkmark"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                            </svg>
                        </div>
                    </div>
                    <DialogTitle className="text-2xl font-bold text-center">
                        Thank You!
                    </DialogTitle>
                    <DialogDescription className="text-center space-y-4">
                        <span className="text-lg">
                            I'll get back to you as soon as possible.
                        </span>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}