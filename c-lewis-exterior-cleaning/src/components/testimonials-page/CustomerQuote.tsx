import { Quote } from "lucide-react";

interface CustomerQuoteProps {
    quote: string;
    author: string;
}

export const CustomerQuote = ({quote, author} : CustomerQuoteProps) => {
    return (
        <header className="max-w-6xl mx-auto pt-26 px-4">
            <div className="relative">
                <Quote className="absolute -top-8 -left-8 w-32 h-32 text-sky-200 fill-current opacity-30 rotate-180" />                    
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif italic text-center text-gray-800 leading-relaxed mb-6">
                        {quote}
                    </h2>                    
                    <p className="text-xl text-sky-600 font-semibold text-center mt-6">
                        {author}
                    </p>
                </div>
            </div>
        </header>
    )
}