import { Quote } from "lucide-react"

interface SpeechBubbleProps {
    text: string;
    author: string;
    size?: "small" | "large";
    direction?: "left" | "right" | "up";
}

export const SpeechBubble = ({text, author, size = "small", direction = "left"} : SpeechBubbleProps) => {

    const sizeClass = {
        small: {
            container: "p-6 rounded-2xl shadow-xl max-w-sm mx-auto mb-4 h-[225px]",
            icon: "w-8 h-8 mb-4",
            text: "text-medium",
            leftTriangle: "border-t-[30px] border-b-[30px] border-r-[30px]",
            rightTriangle: "border-t-[30px] border-b-[30px] border-l-[30px]",
            upTriangle: "border-l-[30px] border-r-[30px] border-b-[30px]",
            footer: "text-base md:text-xl font-bold text-center mt-2 md:mt-4"
        },
        large: {
            container: "p-6 md:p-14 rounded-2xl max-w-[350px] md:max-w-[900px] mx-auto h-[300px] md:h-[400px] flex flex-col justify-between",
            icon: `w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-6 ${direction === 'right' ? 'rotate-180' : ''}`,
            text: "text-sm md:text-base text-center",
            leftTriangle: "border-t-[40px] border-b-[40px] border-r-[40px]",
            rightTriangle: "border-t-[40px] border-b-[40px] border-l-[40px]",
            upTriangle: "border-l-[40px] border-r-[40px] border-b-[40px]",
            footer: "text-base md:text-xl font-bold text-center mt-2 md:mt-4"
        }
    }

    const getTriangleClass = (size: "small" | "large") => {
        const classes = sizeClass[size];

        if (direction === "left") {
            return `absolute -left-8 top-1/2 transform -translate-y-1/2 w-0 h-0 ${classes.leftTriangle} border-l-transparent border-t-transparent border-b-transparent border-r-gray-100`;
        }
        
        if (direction === "right") {
            return `absolute -right-8 top-1/2 transform -translate-y-1/2 w-0 h-0 ${classes.rightTriangle} border-r-transparent border-t-transparent border-b-transparent border-l-gray-100`;
        }
    }
    
    const classes = sizeClass[size];
    
    return (
        <div>
            <article className={`relative bg-gray-100 ${classes.container}`}>
                <Quote className={`text-sky-500 mx-auto ${classes.icon}`} />
                <p className={`leading-relaxed text-gray-700 text-center font-medium ${classes.text}`}>
                    {text}
                </p>
                <div className={getTriangleClass(size)}></div>
                <footer className={classes.footer}>
                    - {author}
                </footer>
            </article>
        </div>
    )
}