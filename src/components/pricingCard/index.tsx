"use client"
import React, { useState } from 'react'
import { Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from '../ui/card'
import ToogleSwitch from '../toogleSwitch'
import { Slider } from '../ui/slider'
import { Switch } from '../ui/switch'
import { Check } from 'lucide-react'
import { Button } from '../ui/button'

type Props = {}

const PricingCard = (props: Props) => {
  const [isYearly, setIsYearly] = useState(false);
  const [pageViews, setPageViews] = useState(100);
  const basePrice = "16.00";
  const finalPrice = isYearly ? Number(basePrice) * 0.8 : basePrice;
  return (
    <div className=''>
      <Card>
        <CardContent className=' flex flex-col gap-4 md:gap-8'>
          {/* card data */}
          <div className='flex flex-col gap-y-6 justify-between items-center text-sm md:flex-row '>
            <span className='text-[color:hsl(225,20%,60%)] tracking-[0.15rem] font-semibold'>{pageViews}K PAGEVIEWS</span>
            {/* slider, when view port is less than md */}
              <div className='w-full px-2'>
                <Slider
                value={[pageViews]}
                onValueChange={(value) => setPageViews(value[0])}
                max={200}
                min={10}
                step={1}
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
            max={200}
            min={10}
            step={1}
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

        <CardFooter className=' flex-col md:flex-row items-center justify-between border-t-2 mt-12'>
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

        <Button className='w-36 rounded-full bg-[color:hsl(227,35%,25%)] text-[color:hsl(226,100%,87%)]
        cursor-pointer
        '>Start my trial</Button>
        </CardFooter>
        
      </Card>
    </div>
  )
}

export default PricingCard