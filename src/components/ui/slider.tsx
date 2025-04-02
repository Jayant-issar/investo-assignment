"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-[color:hsl(224,65%,95%)] relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-[color:hsl(174,86%,45%)] absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className=" border-primary flex justify-center items-center bg-[color:hsl(174,86%,45%)] ring-ring/50 data-[state=active]:bg-[color:hsl(174,86%,45%)] size-8 shrink-0 rounded-full transition-[color,box-shadow] in-focus:cursor-pointer hover:cursor-pointer focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 active:cursor-grabbing
          shadow-[0_12px_24px_-2px_rgba(16,185,129,0.5)] hover:shadow-[0_20px_24px_-2px_rgba(16,185,129,0.6)]
          "
        >
        <div className=" flex gap-1.5">
          <Triangle direction="left" color="#ffffff" />
          <Triangle direction="right" color="#ffffff" />
        </div>
         
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  )
}

const Triangle = ({ w = 6, h = 10, direction = 'right', color = '#44a6e8' }) => {
  const points = {
    top: [`${w / 2},0`, `0,${h}`, `${w},${h}`],
    right: [`0,0`, `0,${h}`, `${w},${h / 2}`],
    bottom: [`0,0`, `${w},0`, `${w / 2},${h}`],
    left: [`${w},0`, `${w},${h}`, `0,${h / 2}`],
  }

  return (
    <svg width={w} height={h}>
      
      <polygon points={
        //@ts-ignore
        points[direction]
        .join(' ')} fill={color} />
      Sorry, your browser does not support inline SVG.
    </svg>
  )
}

export { Slider }
