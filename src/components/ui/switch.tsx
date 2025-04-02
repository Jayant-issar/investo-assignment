"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer cursor-pointer py-1 px-1 data-[state=unchecked]:hover:bg-[color:hsl(174,86%,45%)] data-[state=checked]:bg-[color:hsl(174,86%,45%)] data-[state=unchecked]:bg-[hsl(223,50%,87%)] focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-[hsl(223,50%,87%)] inline-flex h-[1.3rem] w-10 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[8px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-[0.85rem] rounded-full ring-0 transition-transform data-[state=checked]:translate-x-4.5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }