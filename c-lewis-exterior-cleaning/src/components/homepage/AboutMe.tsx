import { ResponsiveButton } from "../shared/ResponsiveButton";
import { SocialIcons } from "../shared/SocialIcons";
import { SectionTitle } from "../shared/SectionTitle";
import { useQuoteNavigation } from "../utils/navigation";
import vid from '../../assets/vid.mp4';

export const AboutMe = () => {
  const navigateToQuoteForm = useQuoteNavigation();
  
  return (
    <section id="about" className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Us" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <video
                src={vid}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                controls
              />
            </div>
          </div>
          <div className="order-2 space-y-4 sm:space-y-8">
            <div className="space-y-4 text-gray-600 text-sm text-justify sm:text-base xl:text-lg px-4">
              <p>Hi! I'm Chad, the owner of C.Lewis Exterior Cleaning.</p>
              <p>
                In early 2021, I embarked on my journey in the exterior cleaning business. 
                My unwavering mission has been to provide the local community with a professional,
                dependable, and high-quality service. 
                </p>
                <p>
                I take immense pride in delivering exceptional results and cultivating a stellar reputation within my vicinity and beyond. 
                Recognizing the significance of customer satisfaction, I've grown my business 
                through word-of-mouth recommendations. This commitment fuels my determination
                to consistently offer the finest services possible.
                </p>
              
              <p>
                If you have any questions on what I do, feel free to get in touch. You can call me, drop me an email or even get at me on Facebook, I'd love to hear from you!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <div className="flex gap-4">
                <SocialIcons title="facebook" />
                <SocialIcons title="instagram" />
                <SocialIcons title="tiktok" />
              </div>
              <ResponsiveButton text="GET A FREE QUOTE" onClick={navigateToQuoteForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
