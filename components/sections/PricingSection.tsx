import type { PricingPlan } from "@/lib/config";

interface PricingSectionProps {
  plans: PricingPlan[];
  title?: string;
  subtitle?: string;
}

export function PricingSection({
  plans,
  title = "定价方案",
  subtitle = "选择最适合你的方案，随时升级或降级。",
}: PricingSectionProps) {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section 头部 */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
        </div>

        {/* 定价卡片网格 */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** 单张定价卡片 */
function PricingCard({ plan }: { plan: PricingPlan }) {
  const isHighlighted = plan.highlighted ?? false;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-lg ${
        isHighlighted
          ? "border-brand-300 bg-white shadow-xl shadow-brand-100 ring-2 ring-brand-500 scale-[1.03]"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      {/* 推荐标签 */}
      {isHighlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-5 py-1.5 text-sm font-bold text-white shadow-md">
          🔥 最受欢迎
        </span>
      )}

      {/* 方案名 */}
      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>

      {/* 价格 */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight text-gray-900">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-lg text-gray-400">{plan.period}</span>
        )}
      </div>

      {/* 描述 */}
      <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

      {/* 分隔线 */}
      <hr className="my-6 border-gray-200" />

      {/* 功能列表 */}
      <ul className="flex-1 space-y-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3 text-sm text-gray-600">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA 按钮 */}
      <a
        href={plan.ctaLink}
        className={`mt-8 block rounded-xl px-6 py-3.5 text-center text-base font-semibold transition-all ${
          isHighlighted
            ? "bg-brand-600 text-white shadow-md shadow-brand-200 hover:bg-brand-700 hover:shadow-lg"
            : "border-2 border-gray-200 text-gray-700 hover:border-brand-300 hover:text-brand-600"
        }`}
      >
        {plan.ctaText}
      </a>
    </div>
  );
}
