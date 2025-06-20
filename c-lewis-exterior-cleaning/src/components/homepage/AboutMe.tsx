import { Button } from "../ui/button";
import { SocialIcons } from "../shared/SocialIcons";
import { SectionTitle } from "../shared/SectionTitle";
import { useQuoteNavigation } from "../utils/navigation";

export const AboutMe = () => {
  const navigateToQuoteForm = useQuoteNavigation();
  
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Us" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-xl">
              <video
                src={"/src/assets/vid.mp4"}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                controls
              />
            </div>
          </div>
          <div className="order-2 space-y-8">
            <div className="space-y-6 text-gray-600 text-[16px] text-justify sm:text-lg">
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
                <SocialIcons title="twitter" />
              </div>
              <Button 
                  className="bg-primary hover:bg-primary/90 hover:scale-105 text-lg px-8 transition-all duration-300"
                  onClick={navigateToQuoteForm}>
                GET A FREE QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
