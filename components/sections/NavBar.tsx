"use client";

import { useState } from "react";
import type { SiteConfig } from "@/lib/config";

interface NavBarProps {
  config: Pick<SiteConfig, "name" | "url">;
}

const NAV_LINKS = [
  { label: "功能特性", href: "#features" },
  { label: "定价方案", href: "#pricing" },
  { label: "常见问题", href: "#faq" },
] as const;

export function NavBar({ config }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/60 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 rounded-lg transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-base font-extrabold text-white">
            T
          </span>
          <span className="text-xl font-bold text-gray-900">{config.name}</span>
        </a>

        {/* 桌面端导航链接 */}
        <nav className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 桌面端 CTA */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/signup"
            className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-200 transition-all hover:bg-brand-700 hover:shadow-md"
          >
            开始使用
          </a>
        </div>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-brand-50 sm:hidden"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      <div
        className={`overflow-hidden transition-all duration-200 sm:hidden ${
          menuOpen ? "max-h-64 border-t border-brand-100/60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-white px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-xl bg-brand-600 px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-brand-700"
          >
            开始使用
          </a>
        </nav>
      </div>
    </header>
  );
}
