import type { VariantProps } from "tailwind-variants";
import { flexVariants } from "./variants";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Flex = ({ children,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  wrap,
  padding,
  margin,
  className,
  ...props }: FlexProps) => {
  return (
    <div className={flexVariants({
      flexDirection,
      justifyContent,
      alignItems,
      gap,
      wrap,
      padding,
      margin,
      className
    })} {...props}>
      {children}
    </div>
  )
}
