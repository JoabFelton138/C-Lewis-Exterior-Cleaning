import { useNavigate } from "react-router-dom";

export const useQuoteNavigation = () => {
    const navigate = useNavigate();
    
    const navigateToQuoteForm = () => {
        navigate('/#quote-form');
        setTimeout(() => {
            const element = document.getElementById('quote-form');
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };
    
    return navigateToQuoteForm;
};