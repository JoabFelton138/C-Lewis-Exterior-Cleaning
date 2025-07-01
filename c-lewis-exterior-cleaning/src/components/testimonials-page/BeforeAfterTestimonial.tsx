import { BeforeAfter } from "./BeforeAfter";
import { SpeechBubble } from "./SpeechBubble";

interface BeforeAfterTestimonialProps {
    layout: "left-to-right" | "right-to-left";
    beforeImage: string;
    afterImage: string;
    beforeAlt: string;
    afterAlt: string;
    text: string;
    author: string;
}

export const BeforeAfterTestimonial = ({ layout, beforeImage, afterImage, beforeAlt, afterAlt, text, author }: BeforeAfterTestimonialProps) => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            {layout === 'left-to-right' ? (
                <>
                    <BeforeAfter 
                        beforeImage={beforeImage}
                        afterImage={afterImage}
                        beforeAlt={beforeAlt}
                        afterAlt={afterAlt}
                    />
                    <SpeechBubble
                        text={text}
                        author={author}
                        size="large"
                        direction="left"
                    />
                </>
                ) : 
                <>
                    <SpeechBubble
                        text={text}
                        author={author}
                        size="large"
                        direction="right"
                    />
                    <BeforeAfter 
                        beforeImage={beforeImage}
                        afterImage={afterImage}
                        beforeAlt={beforeAlt}
                        afterAlt={afterAlt}
                    />
                </>
        }
        </div>
    )
}