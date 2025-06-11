import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
    return (
        <div className={cn('text-center px-4 mb-16', className)}>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
                {title}
            </h2>
            <div className='w-24 h-1 bg-primary mx-auto rounded-full'/>
        </div>
    );
}; 