import type { HowItWorksStep } from "@/lib/config";

interface HowItWorksSectionProps {
  steps: HowItWorksStep[];
  title?: string;
  subtitle?: string;
}

export function HowItWorksSection({
  steps,
  title = "如何使用",
  subtitle = "三步启动，比泡一杯咖啡还快。",
}: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section 头部 */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
        </div>

        {/* 步骤列表 */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.step} step={step} isLast={step.step === steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** 单个步骤卡片 */
function StepCard({
  step,
  isLast,
}: {
  step: HowItWorksStep;
  isLast: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* 桌面端连接线 (箭头) — 在卡片之间 */}
      {!isLast && (
        <div className="absolute left-[calc(50%+3rem)] top-12 hidden h-0.5 w-[calc(100%-6rem)] bg-gradient-to-r from-brand-300 to-brand-100 sm:block" />
      )}

      {/* 步骤编号圆圈 */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand-600 text-3xl font-black text-white shadow-lg shadow-brand-200 ring-8 ring-brand-50">
        {step.step}
      </div>

      {/* 标题 */}
      <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>

      {/* 描述 */}
      <p className="mt-3 max-w-xs text-base leading-relaxed text-gray-500">
        {step.description}
      </p>
    </div>
  );
}
