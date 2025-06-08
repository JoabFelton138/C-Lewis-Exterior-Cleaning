import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "../ui/button"

interface SocialIconProps {
    title: "facebook" | "instagram" | "twitter",
    background?: boolean
}

export const SocialIcons = ({ title, background }: SocialIconProps) => {

    const socialLinks = {
        facebook: "https://www.facebook.com/c-lewis-exterior-cleaning",
        instagram: "https://www.instagram.com/c-lewis-exterior-cleaning",
        twitter: "https://www.twitter.com/c-lewis-exterior-cleaning",
    }

    const getIcon = () => {
        switch (title) {
            case "facebook":
                return <Facebook size={5}/>
            case "instagram":
                return <Instagram size={5}/>
            case "twitter":
                return <Twitter size={5}/>
        }
    }

    const handleClick = () => {
        window.open(socialLinks[title], "_blank", "noopener, noreferrer");
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className={`rounded-full ${background ? "bg-slate-50" : ""} hover:bg-primary hover:text-white transition-colors`}
            onClick={handleClick}
            aria-label={`Visit our ${title} Page`}
        >
            {getIcon()}
        </Button>
    );
}