"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const variants = {
  default:
    "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none",
  destructive:
    "inline-flex items-center justify-center rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50 disabled:pointer-events-none",
  outline:
    "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground disabled:opacity-50 disabled:pointer-events-none",
  secondary:
    "inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:pointer-events-none",
  ghost:
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground disabled:opacity-50 disabled:pointer-events-none",
  link: "text-sm font-medium underline-offset-4 hover:underline text-primary",
} as const

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", loading = false, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(variants[variant], className)}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? "Loading..." : props.children}
      </button>
    )
  }
)
Button.displayName = "Button"
