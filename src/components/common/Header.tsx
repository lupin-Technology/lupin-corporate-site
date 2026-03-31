"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import { headerNavItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGnavOpen, setIsGnavOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const isLower = pathname !== "/";

  const normalizePath = (value: string) =>
    value !== "/" ? value.replace(/\/+$/, "") : value;
  const currentPath = normalizePath(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY > lastScrollY.current && currentY > 120) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }
          setIsScrolled(currentY > 0);
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeGnav = () => setIsGnavOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-[10000] h-[120px] w-full bg-[#222] transition-transform duration-300",
          isHidden && "-translate-y-full",
        )}
      >
        <div className="absolute top-12 left-[50px] font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] tracking-[0.08em]">
          <Link href="/" className="block">
            <span className="text-[22px] font-light tracking-[0.12em] text-white">
              Lupin
            </span>
          </Link>
        </div>

        <nav className="absolute top-0 right-[168px] z-[5] hidden h-[120px] items-center justify-center transition-all duration-300 lg:flex">
          <ul className="flex">
            {headerNavItems.map((item) => (
              <li
                key={item.href}
                className="relative text-lg leading-9 font-medium"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block px-5 text-white transition-colors",
                    "hover:animate-[gradient-anim_5s_linear_infinite] hover:bg-[linear-gradient(270deg,#00b6e5,#bc71eb,#dc6e87,#ed957a,#ffe65f,#00d2d0,#00b6e5,#bc71eb)] hover:bg-[length:700%_700%] hover:bg-clip-text hover:text-transparent",
                    currentPath === normalizePath(item.href) &&
                      "animate-[gradient-anim_5s_linear_infinite] bg-[linear-gradient(270deg,#00b6e5,#bc71eb,#dc6e87,#ed957a,#ffe65f,#00d2d0,#00b6e5,#bc71eb)] bg-[length:700%_700%] bg-clip-text text-transparent",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute top-[50px] right-[60px] hidden lg:block">
          <div>
            <Link
              href="/"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-medium text-[#333] transition-colors duration-300"
            >
              JP
            </Link>
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute top-0 left-0 z-[-1] h-[120px] w-full bg-[#222] opacity-100 transition-opacity duration-300",
          )}
        />
      </header>

      <button
        onClick={() => setIsGnavOpen(!isGnavOpen)}
        aria-label="メニュー"
        className={cn(
          "fixed cursor-pointer mix-blend-difference",
          "top-[3.88889vw] right-[4.16667vw]",
          "z-[40000] h-20 w-20 lg:hidden",
        )}
      >
        <div className="flex h-full w-full flex-col justify-center gap-[4px] px-[30px] py-[33px]">
          <div
            className={cn(
              "relative h-[2px] w-full origin-center overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
              isGnavOpen && "translate-y-[6px] rotate-45",
            )}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 bg-white" />
            </div>
          </div>
          <div
            className={cn(
              "relative h-[2px] w-full origin-center overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
              isGnavOpen && "opacity-0",
            )}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 bg-white" />
            </div>
          </div>
          <div
            className={cn(
              "relative h-[2px] w-full origin-center overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
              isGnavOpen && "-translate-y-[6px] -rotate-45",
            )}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 bg-white" />
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isGnavOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.165, 0.84, 0.44, 1] }}
            className="fixed inset-0 z-[20000] overflow-y-auto"
          >
            <div className="absolute inset-0 bg-white" />

            <div className="relative h-full w-full">
              <div className="relative z-[1] px-[8vw] pt-[100px]">
                <div className="mb-8 font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] tracking-[0.08em]">
                  <Link href="/" onClick={closeGnav}>
                    <span className="text-[22px] font-light tracking-[0.12em] text-[#333]">
                      Lupin
                    </span>
                  </Link>
                </div>

                <ul className="border-t border-[#e5e5e5] pt-[30px] pb-[30px]">
                  {headerNavItems.map((item) => (
                    <li
                      key={item.href}
                      className={cn("overflow-hidden text-[20px] font-medium")}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-3 text-[#333]",
                          currentPath === normalizePath(item.href) &&
                            "text-black",
                        )}
                        onClick={closeGnav}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <div>
                    <div>
                      <Link
                        href="/"
                        className="text-sm text-[#333]"
                        onClick={closeGnav}
                      >
                        JP
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
