import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

type TagProps = {
  children?: ReactNode;
  className?: string;
};

export default function Tag({ children, className }: TagProps) {
  const label = String(children).toLowerCase();

  return (
    <div
      className={cn(
        "rounded-xl px-2 py-1 text-sm",
        label === "webflow" && "bg-blue-600",
        label === "custom design" && "bg-yellow-600",
        className
      )}
    >
      {children}
    </div>
  );
}
