import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
    return (
        <div className={cn('text-center px-4 mb-16', className)}>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-800 uppercase tracking-wider'>
                {title}
            </h2>
        </div>
    );
}; 