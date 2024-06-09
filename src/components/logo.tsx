"use client";

import { siteConfig } from "@/site.config";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={cn(
        "p-2 border-2 border-dashed border-yellow-400 inline-block text-yellow-400 hover:text-yellow-400/70 hover:border-yellow-400/70 transition-colors",
        pathname === "/resume" &&
          "text-green-400 border-green-400 hover:text-green-400/70 hover:border-green-400/70"
      )}
    >
      <p className="text-xl font-bold tracking-wide">{siteConfig.siteTitle}</p>
    </Link>
  );
}
