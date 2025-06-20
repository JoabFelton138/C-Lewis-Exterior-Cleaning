import { useLocation, useNavigate } from "react-router-dom";

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

export const useLogoNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === '/'){
            const element = document.getElementById('home-main');
            if (element){
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            navigate('/');
        }
    };

    return handleLogoClick;
}