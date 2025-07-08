import { Phone } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { useQuoteNavigation } from "../utils/navigation";

export const CtaBanner = () => {
    
    const styles = {
        container: "p-16 lg:p-20 text-white flex flex-row text-center items-center justify-center",
        icon: "w-6 h-6 fill-current",
        text: "text-lg md-text-xl lg:text-2xl font-black uppercase tracking-wider ml-2 md:ml-3",
        leftAnimation: "animate-on-scroll-left",
        rightAnimation: "animate-on-scroll-right",
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            })
        })
        document.querySelectorAll('.animate-on-scroll-left, .animate-on-scroll-right').forEach(el => observer.observe(el))
        return () => observer.disconnect();
    }, []);

    const navigateToQuoteForm = useQuoteNavigation();

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                <div className={`bg-sky-400 ${styles.container}`}>
                    <div className={`${styles.leftAnimation} flex items-center`}>
                        <Phone className={`${styles.icon} rotate-260`}/>
                        <h2 className={`${styles.text}`}>Call Us at 07391 853 506</h2>
                    </div>
                </div>
                <a onClick={navigateToQuoteForm} className={`bg-sky-700 ${styles.container} cursor-pointer block`}>
                    <div className={`${styles.rightAnimation} flex items-center`}>
                        <MessageCircle className={`${styles.icon}`}/>
                        <h2 className={`${styles.text}`}>Send Us a Message</h2>
                    </div>
                </a>
            </div>
        </section>
    );
}