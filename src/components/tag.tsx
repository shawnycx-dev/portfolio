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
        "rounded-xl px-2 py-1 text-sm font-semibold",
        "bg-gray-200 text-gray-800",
        label === "webflow" && "bg-blue-200 text-blue-800",
        label === "custom design" && "bg-yellow-200 text-yellow-800",
        className
      )}
    >
      {children}
    </div>
  );
}
