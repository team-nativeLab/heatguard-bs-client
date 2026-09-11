import { Link } from "react-router-dom";
import HQLayout, { HQContent } from "../../components/hq/HQLayout";
import { HeatBadge } from "../../components/hq/RecordTable";

const sites = [
  { name: "울산 석유화학 플랜트 증설", manager: "이민준 · 팀 5개", temp: "38.7°C", status: "폭염 중대경보", tone: "red", done: "4/6 완료", count: "오늘 8건" },
  { name: "인천 복합물류센터 신축", manager: "김철수 · 팀 3개", temp: "36.2°C", status: "폭염 경보", tone: "orange", done: "5/6 완료", count: "오늘 12건" },
  { name: "부산항 3부두 확장", manager: "박지현 · 팀 2개", temp: "33.1°C", status: "폭염 주의보", tone: "yellow", done: "6/6 완료", count: "오늘 5건" },
  { name: "경기 북부 산단 기반시설", manager: "최도현 · 팀 4개", temp: "", status: "미입력", tone: "none", done: "0/6 완료", count: "오늘 0건" },
];

function doneClass(tone: string) {
  if (tone === "red") return "text-[var(--color-heat-red-fg)]";
  if (tone === "orange") return "text-[var(--color-heat-orange-fg)]";
  if (tone === "yellow") return "text-[var(--color-heat-yellow-fg)]";
  return "text-[var(--color-success)]";
}

export default function ScreenHQDashboard() {
  return (
    <HQLayout>
      <HQContent>
        <h1 className="text-xl font-semibold text-[var(--color-text-heading)]">대시보드</h1>
        <p className="pt-1 text-sm text-[var(--color-text-body)]">소속 현장 4개 · 실시간 모니터링</p>

        <div className="grid grid-cols-4 gap-3 pt-8">
          {[["4", "관리 현장", false], ["2", "폭염경보 이상", true], ["25", "오늘 기록", false], ["1", "긴급호출", true]].map(([value, label, danger]) => (
            <div key={label as string} className={`h-[86px] rounded-lg border p-4 ${danger ? "border-[var(--color-danger-border)] bg-[var(--color-danger-soft-bg)]" : "border-[var(--color-border)] bg-[var(--color-bg-card)]"}`}>
              <p className={`text-[30px] font-medium leading-[30px] ${danger ? "text-[var(--color-danger-text)]" : "text-[var(--color-text-heading)]"}`}>{value}</p>
              <p className="pt-1.5 text-xs text-[var(--color-text-body)]">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex h-[52px] items-center justify-between pt-8">
          <h2 className="text-sm font-medium text-[var(--color-text-label)]">현장 현황 · 위험도 순</h2>
          <Link to="/hq/sites" className="text-xs text-[var(--color-text-body)]">전체 관리 →</Link>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          {sites.map((site) => (
            <Link key={site.name} to="/hq/site/ulsan" className="flex min-h-[74px] items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="whitespace-nowrap text-sm font-medium text-[var(--color-text-heading)]">{site.name}</p>
                  {site.status === "폭염 중대경보" && <span className="rounded border border-[var(--color-danger-border)] bg-[var(--color-danger-soft-bg)] px-1.5 py-0.5 text-[10px] text-[var(--color-danger-text)]">긴급</span>}
                </div>
                <p className="pt-1 text-xs text-[var(--color-text-body)]">{site.manager}</p>
              </div>
              {site.temp ? <HeatBadge temp={site.temp} status={site.status} tone={site.tone} /> : <span className="rounded bg-[var(--color-heat-none-bg)] px-2 py-0.5 text-[10px] text-[var(--color-heat-none-fg)]">미입력</span>}
              <div className="w-16 text-right">
                <p className={`font-['JetBrains_Mono',monospace] text-xs ${doneClass(site.tone)}`}>{site.done}</p>
                <p className="pt-0.5 text-[11px] text-[var(--color-text-faint)]">{site.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </HQContent>
    </HQLayout>
  );
}
