import { Button } from "../ui/button";

interface ResponsiveButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit";
}

export const ResponsiveButton = ({ text, className, onClick, disabled }: ResponsiveButtonProps) => {
    return (
        <Button 
                size='lg'
                className={`${className} flex justify-center hover:bg-primary/90 hover:scale-105 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12`} 
                onClick={onClick}
                disabled={disabled}
            >
            {text}
        </Button>
    );
}