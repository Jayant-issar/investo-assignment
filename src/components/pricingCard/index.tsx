"use client"
import React, { useEffect, useState } from 'react'
import { Card,CardContent,CardFooter, } from '../ui/card'
import { Slider } from '../ui/slider'
import { Switch } from '../ui/switch'
import { Check } from 'lucide-react'
import CtaButton from '../ctaButton'

type Props = {}

const PricingCard = (props: Props) => {
  const [isYearly, setIsYearly] = useState(false);
  const [pageViews, setPageViews] = useState(100);
  const [price, setPrice] = useState<string>("16.00");
  const [finalPrice, setFinalPrice] = useState<string>("16.00");
  

  useEffect(()=>{
    const newPrice = pageViews >= 990 ? "36.00" : pageViews >= 500 ? "24.00" : pageViews >= 100 ? "16.00" :pageViews>50 ? "12.00" : "8.00";
    setPrice(newPrice);
    setFinalPrice(isYearly ? (Number(newPrice) * 0.75).toString()+".00" : newPrice);
    
  },[pageViews,isYearly])

  return (
    <div className=''>
      <Card className='shadow-2xl'>
        <CardContent className=' flex flex-col gap-4 md:gap-10'>
          {/* card data */}
          <div className='flex flex-col gap-y-6 justify-between items-center text-sm md:flex-row '>
            <div className='text-[color:hsl(225,20%,60%)] tracking-[0.13rem] font-semibold flex items-center gap-1'>
              <span className=' flex'>{pageViews<1000 ? pageViews : "1"} <span>{pageViews<1000 ? "k" : "M"}</span></span>
              <span>PAGEVIEWS</span>
            </div>
            
            {/* slider, when view port is less than md */}
              <div className='w-full px-2'>
                <Slider
                value={[pageViews]}
                onValueChange={(value) => setPageViews(value[0])}
                max={1000}
                min={10}
                step={10}
                className='w-full md:hidden'
                />
              </div>
            <span className=' flex items-center '>
              <span className='font-bold text-5xl text-[color:hsl(227,35%,25%)]'>${finalPrice}
              </span>
              <span className='text-[color:hsl(225,20%,60%)] font-extralight ml-3'>/month</span>
            </span>
          </div>

          {/* slider when view port is more than md */}
          <div className='w-full'>
            <Slider
            value={[pageViews]}
            onValueChange={(value) => setPageViews(value[0])}
            max={1000}
            min={10}
            step={10}
            className='w-full hidden md:flex'
            />
          </div>

          {/* biling toggle */}
          <div className="flex items-center justify-center gap-4 text-[color:hsl(225,20%,60%)] ">
            <div className='flex items-center gap-x-2 ml-6'>
              <span className="text-xs ">Monthly Billing</span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className=''
              />
              <div className="flex items-center gap-1">
                <span className="text-xs ">Yearly Billing</span>
                <span className="hidden md:block text-[0.63rem] py-1 px-2 rounded-full bg-[color:hsl(14,92%,95%)] text-[color:hsl(15,100%,70%)]">
                  25% discount
                </span>
                <span className="md:hidden text-[0.63rem] py-1 px-2 rounded-full bg-[color:hsl(14,92%,95%)] text-[color:hsl(15,100%,70%)]">
                  -25%
                </span>
              </div>
            </div>
            
          </div>
          
        </CardContent>

        <CardFooter className=' flex-col md:flex-row items-center justify-between border-t-2 '>
        <div className=" pt-8 p-4 ">
            <div className="gap-3 text-sm text-[color:hsl(225,20%,60%)] font-medium flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-500" />
                <span className="">Unlimited websites</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-500" />
                <span className="">100% data ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-500" />
                <span className="">Email reports</span>
              </div>
            </div>
        </div>

        <CtaButton/>
        </CardFooter>
        
      </Card>
    </div>
  )
}

export default PricingCard