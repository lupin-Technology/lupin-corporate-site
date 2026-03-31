"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Mail } from "lucide-react";

import { cn } from "@/lib/utils";

export function ContactButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (pathname.startsWith("/contact")) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-10 left-10 z-[1000] flex items-center transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <Link
        href="/contact/"
        className="group flex h-[60px] w-[60px] items-center overflow-hidden rounded-[60px] border border-white/15 bg-[#222] text-white transition-[width] duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:w-[140px]"
      >
        <span className="flex h-[60px] min-w-[60px] items-center justify-center">
          <Mail size={20} strokeWidth={1.5} />
        </span>
        <span className="w-[80px] text-base font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-200">
          Contact
        </span>
      </Link>
    </div>
  );
}
