"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function Anchor({
  href,
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "hover:text-yellow-400 transition-colors",
        href === "/resume" && "hover:text-green-400",
        pathname === "/resume" && "hover:text-green-400",
        className
      )}
      {...props}
    />
  );
}
