import { Link } from "react-router-dom";
import HQLayout, { HQContent } from "../../components/hq/HQLayout";
import { HeatBadge } from "../../components/hq/RecordTable";
import RecordTable from "../../components/hq/RecordTable";

export default function ScreenHQSiteDetail() {
  return (
    <HQLayout>
      <HQContent>
        <Link to="/hq/sites" className="flex items-center gap-1.5 text-sm text-[var(--color-text-body)]">← 현장 목록</Link>
        <div className="flex items-center gap-3 pt-6">
          <h1 className="text-xl font-semibold text-[var(--color-text-heading)]">울산 석유화학 플랜트 증설</h1>
          <HeatBadge temp="38.7°C" status="폭염 중대경보" tone="red" />
        </div>
        <p className="pt-1 text-sm text-[var(--color-text-body)]">이민준 · minjun@ex.com</p>
        <div className="flex gap-2 pt-6">
          {["A팀 4/6 완료", "B팀 5/6 완료", "C팀 2/6 완료"].map((x) => (
            <span key={x} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1 font-['JetBrains_Mono',monospace] text-xs text-[var(--color-text-label)]">{x}</span>
          ))}
        </div>
        <h2 className="pt-8 text-sm font-medium text-[var(--color-text-label)]">오늘 기록 <span className="font-normal text-[var(--color-text-faint)]">(읽기 전용)</span></h2>
        <div className="pt-3"><RecordTable /></div>
      </HQContent>
    </HQLayout>
  );
}
