import { Facebook, Instagram } from "lucide-react"
import { Button } from "../ui/button"

interface SocialIconProps {
    title: "facebook" | "instagram" | "tiktok",
    background?: boolean
}

export const SocialIcons = ({ title, background }: SocialIconProps) => {

    const socialLinks = {
        facebook: "https://www.facebook.com/C.Lewis.pws/",
        instagram: "https://www.instagram.com/c-lewis-exterior-cleaning",
        tiktok: "https://www.tiktok.com/@c-lewis-exterior-cleaning",
    }

    const getIcon = () => {
        switch (title) {
            case "facebook":
                return <Facebook size={5}/>
            case "instagram":
                return <Instagram size={5}/>
            case "tiktok":
                return (
                    <svg 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                )
        }
    }

    const handleClick = () => {
        window.open(socialLinks[title], "_blank", "noopener, noreferrer");
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className={`rounded-full scale-90 sm:scale-100 ${background ? "bg-slate-50" : ""} hover:bg-sky-500 hover:text-white transition-colors`}
            onClick={handleClick}
            aria-label={`Visit our ${title} Page`}
        >
            {getIcon()}
        </Button>
    );
}