import type { HeroData } from "@/lib/config";

interface HeroSectionProps {
  data: HeroData;
  slogan: string;
  /** 次 CTA 按钮文字（非 config 内字段，由 page 传入或 fallback） */
  ctaSecondaryLabel?: string;
}

export function HeroSection({
  data,
  slogan,
  ctaSecondaryLabel = "查看演示 →",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* 背景渐变层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />

      {/* 装饰光斑 */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

      {/* 内容 */}
      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:py-40 text-center">
        {/* 小标签 */}
        <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-200 mb-6">
          {data.badge}
        </span>

        {/* 主标题 */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {data.heading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        {/* 渐变高亮关键词 */}
        <p className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="text-gradient">
            {slogan}
          </span>
        </p>

        {/* 副标题 */}
        <p className="mt-6 text-lg leading-relaxed text-gray-500 sm:text-xl max-w-2xl mx-auto">
          {data.subheading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        {/* CTA 按钮组 */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* 主 CTA */}
          <a
            href={data.ctaLink}
            className="inline-flex items-center rounded-xl bg-brand-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-brand-200 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            {data.ctaText}
          </a>

          {/* 次 CTA */}
          <a
            href="#features"
            className="inline-flex items-center rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur px-8 py-4 text-lg font-medium text-gray-700 transition-all hover:border-brand-300 hover:text-brand-600 hover:shadow-md"
          >
            {ctaSecondaryLabel}
          </a>
        </div>

        {/* 社会证明 */}
        <p className="mt-8 text-sm text-gray-400">
          {data.socialProof}
        </p>
      </div>
    </section>
  );
}
