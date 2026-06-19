import type { CTAData } from "@/lib/config";

interface CTASectionProps {
  data: CTAData;
}

export function CTASection({ data }: CTASectionProps) {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-purple-700 py-20 sm:py-28">
      {/* 装饰光斑 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[36rem] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-brand-400/20 rounded-full blur-3xl" />

      {/* 内容 */}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* 标题 */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {data.heading}
        </h2>

        {/* 副标题 */}
        <p className="mt-6 text-lg leading-relaxed text-brand-100 sm:text-xl">
          {data.subheading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        {/* CTA 按钮 */}
        <a
          href={data.buttonLink}
          className="mt-10 inline-flex items-center rounded-xl bg-white px-10 py-5 text-lg font-bold text-brand-700 shadow-2xl shadow-black/20 transition-all hover:bg-brand-50 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-100"
        >
          {data.buttonText}
        </a>

        {/* 底部提示 */}
        <p className="mt-6 text-sm text-brand-200">
          {data.trustNote}
        </p>
      </div>
    </section>
  );
}
