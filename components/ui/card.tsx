import * as React from "react"
import { cn } from "@/lib/utils"

/* ================= CARD ================= */

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        `
        group relative flex h-full flex-col overflow-hidden
        rounded-2xl border bg-card text-card-foreground
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        `,
        className
      )}
      {...props}
    />
  )
}

/* ================= HEADER ================= */

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        `
        grid gap-2 px-5 pt-5
        `,
        className
      )}
      {...props}
    />
  )
}

/* ================= TITLE ================= */

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        `
        text-lg font-semibold leading-snug
        tracking-tight
        line-clamp-2
        `,
        className
      )}
      {...props}
    />
  )
}

/* ================= DESCRIPTION ================= */

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        `
        text-sm text-muted-foreground
        leading-relaxed
        line-clamp-3
        `,
        className
      )}
      {...props}
    />
  )
}

/* ================= ACTION ================= */

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        `
        absolute right-4 top-4
        `,
        className
      )}
      {...props}
    />
  )
}

/* ================= CONTENT ================= */

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        `
        flex flex-1 flex-col gap-4 px-5 pb-5
        `,
        className
      )}
      {...props}
    />
  )
}
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        `
        mt-auto flex items-center justify-between
        border-t px-5 py-4 text-sm text-muted-foreground
        `,
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
