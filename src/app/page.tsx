import Herotext from "@/components/heroText";
import PricingCard from "@/components/pricingCard";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen ">
      <div className="w-full h-[50vh] overflow-hidden relative">
        {/* SVG Background */}
        <svg 
          className="absolute top-0 left-0 w-full h-full z-0 "
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 449"
          preserveAspectRatio="none"
        >
          <path fill="var(--background-shape-color)" fillRule="evenodd" d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"/>
        </svg>
        
        {/* Text Content */}
        <div className="relative z-10">
          <Herotext/>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 z-20 w-full max-w-xl px-4 sm:px-0 mx-auto animate-in fade-in-20 duration-1000">
        <PricingCard/>
      </div>
    </div>
  );
}
