import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

export const useQuoteNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const scrollToQuoteForm = () => {
        const element = document.getElementById('quote-form');
        if (element) {
            scroll.scrollTo(element.offsetTop - 40, {
                duration: 1200,
                smooth: true,
                spy: true,
                spyThrottle: 500,
            });
        }
    };

    const navigateToQuoteForm = () => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(scrollToQuoteForm, 100);
        } else {
            scrollToQuoteForm();
        }
    };
    
    return navigateToQuoteForm;
};

export const useLogoNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === '/'){
            const element = document.getElementById('home-main');
            if (element) {
                scroll.scrollTo(element.offsetTop - 20, {
                    duration: 1200,
                    smooth: true,
                    spy: true,
                    spyThrottle: 500,
                });
            }
        } else {
            navigate('/');
        }
    };

    return handleLogoClick;
}