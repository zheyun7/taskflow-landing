"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/config";

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQSection({
  items,
  title = "常见问题",
  subtitle = "还有其他疑问？联系我们的支持团队。",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section 头部 */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
        </div>

        {/* FAQ 列表 */}
        <div className="mt-14 divide-y divide-gray-200 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="group">
                {/* 问题按钮 */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50/60"
                >
                  <span className="text-base font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* 答案面板 — 带动画展开 */}
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-base leading-relaxed text-gray-500">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
