import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

export const useQuoteNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const scrollToQuoteForm = () => {
        const element = document.getElementById('quote-form');
        if (element) {
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                window.scrollTo({
                    top: element.offsetTop - 40,
                    behavior: 'smooth'
                });
            } else {
                scroll.scrollTo(element.offsetTop - 40, {
                    duration: 1200,
                    smooth: true,
                    spy: true,
                    spyThrottle: 500,
                });
            }
        }
    };

    const navigateToQuoteForm = () => {
        if (location.pathname !== '/') {
            navigate('/');
            const isMobile = window.innerWidth <= 768;
            const delay = isMobile ? 800 : 500;
            setTimeout(scrollToQuoteForm, delay);
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
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
    };

    return handleLogoClick;
}

export const navigatToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
        scroll.scrollTo(element.offsetTop - 20, {
            duration: 1200,
            smooth: true,
            spy: true,
            spyThrottle: 500,
        });
    }
}

export const usePortfolioNavigation = () => {
    const navigate = useNavigate();
    const handlePortfolioClick = () => {
        navigate('/portfolio');
    }
    return handlePortfolioClick;
}