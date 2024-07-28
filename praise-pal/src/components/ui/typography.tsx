import * as React from "react"
import { cn } from "@/lib/utils"

const TypographyH1: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({ className, ...props }) => (
  <h1 
    className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
    {...props}
  />
);

const TypographyH2: React.FC<React.HTMLAttributes<HTMLHeadElement>> = (({ className, ...props}) => (
  <h2
    className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
    {...props}
  />
));

const TypographyH4: React.FC<React.HTMLAttributes<HTMLHeadElement>> = (({ className, ...props}) => (
  <h2
    className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
    {...props}
  />
));

export {
  TypographyH1,
  TypographyH2,
  TypographyH4
}