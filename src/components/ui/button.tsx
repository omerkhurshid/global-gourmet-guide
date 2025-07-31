import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase",
          {
            "bg-black text-white hover:bg-gray-800": variant === "default",
            "bg-transparent text-black hover:bg-gray-100": variant === "secondary",
            "border border-black bg-transparent text-black hover:bg-black hover:text-white": variant === "outline",
            "text-black hover:opacity-60": variant === "ghost",
          },
          {
            "h-12 px-8 py-2": size === "default",
            "h-10 px-6 text-xs": size === "sm",
            "h-14 px-10 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }