import type { Feature } from "@/lib/config";

interface FeaturesSectionProps {
  /** 功能列表，从 config 读取 */
  features: Feature[];
  /** Section 标题 */
  title?: string;
  /** Section 副标题 */
  subtitle?: string;
}

export function FeaturesSection({
  features,
  title = "功能特性",
  subtitle = "每一个功能都为效率而生，开箱即用无需配置。",
}: FeaturesSectionProps) {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section 头部 */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
        </div>

        {/* 功能卡片网格 */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** 单张功能卡片 */
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 hover:-translate-y-1">
      {/* 图标区 */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-3xl ring-1 ring-brand-100 transition-colors group-hover:bg-brand-100">
        {feature.icon}
      </div>

      {/* 标题 */}
      <h3 className="mt-5 text-lg font-bold text-gray-900">
        {/* 如果标题自带 emoji 前缀则直接渲染，否则保留原文 */}
        {feature.title}
      </h3>

      {/* 描述 */}
      <p className="mt-3 text-base leading-relaxed text-gray-500">
        {feature.description}
      </p>
    </div>
  );
}
