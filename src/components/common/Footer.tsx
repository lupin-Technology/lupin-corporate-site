import Link from "next/link";

import { footerNavItems } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="relative z-[1] bg-[#222] pt-[120px] text-white">
      <div className="mx-auto w-full max-w-[84vw]">
        <div className="mb-[80px] flex justify-between gap-10">
          <div className="w-[200px] font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif] tracking-[0.08em]">
            <Link href="/" className="block">
              <span className="text-[22px] font-light tracking-[0.12em] text-white">
                Lupin
              </span>
            </Link>
          </div>

          <nav>
            <ul className="flex flex-wrap font-[futura-pt,yakuhanjp_narrow,var(--font-noto-sans-jp),sans-serif]">
              {footerNavItems.map((item) => (
                <li
                  key={item.href}
                  className="ml-10 text-lg leading-[1.6] font-medium"
                >
                  <Link href={item.href} className="text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex justify-end pt-[100px] pb-[100px]">
          <div className="text-xs font-normal">
            <Link
              href="/docs/privacypolicy.pdf"
              target="_blank"
              className="text-white"
            >
              Policy
            </Link>
          </div>
          <div className="ml-10 text-xs font-normal">
            © {new Date().getFullYear()} Lupin Technology, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
