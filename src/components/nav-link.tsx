"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function NavLink({
  href,
  className,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "group capitalize tracking-wide hover:text-yellow-300",
        pathname === href && "font-bold text-yellow-300",
        pathname === "/resume" && href === "/resume" && "text-green-400",
        href ==="/resume" && "hover:text-green-400",
        className
      )}
      href={href}
      {...props}
    >
      [
      <span
        className={cn(
          "invisible group-hover:visible",
          pathname === href && "visible"
        )}
      >
        X
      </span>
      ] {children}
    </Link>
  );
}
