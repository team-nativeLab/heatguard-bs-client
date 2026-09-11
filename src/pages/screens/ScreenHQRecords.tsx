import HQLayout, { HQContent } from "../../components/hq/HQLayout";
import RecordTable, { HeatBadge } from "../../components/hq/RecordTable";

const groups = [
  ["인천 복합물류센터 신축", "36.2°C", "폭염 경보", "12건", "orange"],
  ["울산 석유화학 플랜트 증설", "38.7°C", "폭염 중대경보", "8건", "red"],
  ["부산항 3부두 확장", "33.1°C", "폭염 주의보", "5건", "yellow"],
];

export default function ScreenHQRecords() {
  return (
    <HQLayout>
      <HQContent>
        <h1 className="text-xl font-semibold text-[var(--color-text-heading)]">전체 기록</h1>
        <p className="pt-1 text-sm text-[var(--color-text-body)]">소속 현장 전체 · 오늘 기준 · 최근 활동 순</p>
        <div className="flex flex-col gap-10 pt-8">
          {groups.map((g) => (
            <section key={g[0]}>
              <div className="flex items-center gap-3">
                <h2 className="text-sm font-medium text-[var(--color-text-heading)]">{g[0]}</h2>
                <HeatBadge temp={g[1]} status={g[2]} tone={g[4]} />
                <span className="font-['JetBrains_Mono',monospace] text-xs text-[var(--color-text-faint)]">{g[3]}</span>
              </div>
              <div className="pt-3"><RecordTable /></div>
            </section>
          ))}
        </div>
      </HQContent>
    </HQLayout>
  );
}
