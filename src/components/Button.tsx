import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}
export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={clsx(
      "py-4 px-3 bg-red-900 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-red-700 focus:ring-2 ring-red-500",
    )}
    >
      {children}
    </Comp>
  )
}