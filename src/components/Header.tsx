"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "요양원소개", href: "/about" },
  { label: "시설안내", href: "/facilities" },
  { label: "프로그램", href: "/programs" },
  { label: "이용후기", href: "/reviews" },
  { label: "오시는길", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
            isTransparent ? "text-white" : "text-neutral-900"
          }`}>
            중앙요양원
          </span>
          <span className={`text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 font-display italic ${
            isTransparent ? "text-white/50" : "text-accent"
          }`} style={{ fontWeight: 300 }}>
            Jungang Nursing Home
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-[13px] tracking-wide transition-all duration-300 rounded-full ${
                  isActive
                    ? isTransparent
                      ? "text-accent bg-white/10"
                      : "text-accent bg-accent/5"
                    : isTransparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`ml-4 px-5 py-2.5 text-[12px] tracking-wider rounded-full transition-all duration-300 ${
              isTransparent
                ? "bg-white/15 text-white hover:bg-accent hover:text-white backdrop-blur-sm"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            상담문의
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 relative z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-y-[6.5px] bg-neutral-800"
                  : isTransparent ? "bg-white" : "bg-neutral-700"
              }`}
            />
            <span
              className={`h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : isTransparent ? "bg-white" : "bg-neutral-700"
              }`}
            />
            <span
              className={`h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[6.5px] bg-neutral-800"
                  : isTransparent ? "bg-white" : "bg-neutral-700"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-white transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-2xl transition-all duration-300 ${
                pathname === item.href ? "text-accent font-medium" : "text-neutral-700 hover:text-accent"
              }`}
              style={{ animationDelay: `${i * 0.05}s`, fontWeight: 300 }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="w-8 h-px bg-accent/30 my-2" />
          <Link
            href="/contact"
            className="btn-primary text-sm"
            onClick={() => setMobileOpen(false)}
          >
            상담 문의하기
          </Link>
        </nav>
      </div>
    </header>
  );
}
