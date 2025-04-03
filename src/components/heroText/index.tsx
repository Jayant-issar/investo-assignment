import React from 'react'

const HeroText = () => {
  return (
    <div className="relative">
        <div className='relative z-10 flex flex-col items-center gap-3 pt-15 p-4 mt-14'>
            <h2 className=" text-[color:hsl(227,35%,25%)] text-3xl font-bold">
                Simple, traffic-based pricing 
            </h2>
            <h5 className="relative z-10 text-[#858aa0] font-medium">
                Sign-up for our 30-day trail. No credit card required.
            </h5>
        </div>
        <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="146"
        height="145"
        >
        <g fill="none" fillRule="evenodd" className="stroke-[#CFD8EF] dark:stroke-[#2A3344]">
            <circle cx="63" cy="82" r="62.5"/>
            <circle cx="105" cy="41" r="40.5"/>
        </g>
        </svg>
    </div>
    
  )
}

export default HeroText