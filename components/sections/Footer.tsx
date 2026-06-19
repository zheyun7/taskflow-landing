import type { FooterData } from "@/lib/config";

interface FooterProps {
  data: FooterData;
  /** 产品名称，用于左侧品牌展示 */
  brandName?: string;
}

export function Footer({ data, brandName = "TaskFlow" }: FooterProps) {
  return (
    <footer className="bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* 左侧品牌 */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-base font-extrabold text-white">
              T
            </div>
            <span className="text-lg font-bold text-white">{brandName}</span>
          </div>

          {/* 中间链接 */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {data.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 底部分隔 + 版权 */}
        <hr className="mt-10 border-gray-800" />
        <p className="mt-6 text-center text-sm text-gray-500 sm:text-left">
          {data.copyright}
        </p>
      </div>
    </footer>
  );
}
