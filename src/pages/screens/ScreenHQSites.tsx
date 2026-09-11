import { Link } from "react-router-dom";
import HQLayout, { HQContent } from "../../components/hq/HQLayout";
import { HeatBadge } from "../../components/hq/RecordTable";

const sites = [
  ["울산 석유화학 플랜트 증설", "이민준 · minjun@ex.com · 팀 5개", "38.7°C", "폭염 중대경보", "오늘 8건", "red"],
  ["인천 복합물류센터 신축", "김철수 · chulsoo@ex.com · 팀 3개", "36.2°C", "폭염 경보", "오늘 12건", "orange"],
  ["부산항 3부두 확장", "박지현 · jihyun@ex.com · 팀 2개", "33.1°C", "폭염 주의보", "오늘 5건", "yellow"],
  ["경기 북부 산단 기반시설", "최도현 · dohyun@ex.com · 팀 4개", "", "미입력", "오늘 0건", "none"],
];

export default function ScreenHQSites() {
  return (
    <HQLayout>
      <HQContent>
        <h1 className="text-xl font-semibold text-[var(--color-text-heading)]">현장 관리</h1>
        <p className="pt-1 text-sm text-[var(--color-text-body)]">현장 목록 및 계정 생성</p>

        <div className="flex flex-col gap-2 pt-8">
          {sites.map((s) => (
            <div key={s[0]} className="flex min-h-[74px] items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="whitespace-nowrap text-sm font-medium text-[var(--color-text-heading)]">{s[0]}</p>
                  {s[3] === "폭염 중대경보" && <span className="rounded border border-[var(--color-danger-border)] bg-[var(--color-danger-soft-bg)] px-1.5 py-0.5 text-[10px] text-[var(--color-danger-text)]">긴급</span>}
                </div>
                <p className="pt-1 text-xs text-[var(--color-text-body)]">{s[1]}</p>
              </div>
              {s[2] ? <HeatBadge temp={s[2]} status={s[3]} tone={s[5]} /> : <span className="rounded bg-[var(--color-heat-none-bg)] px-2 py-0.5 text-[10px] text-[var(--color-heat-none-fg)]">미입력</span>}
              <p className="w-20 text-right font-['JetBrains_Mono',monospace] text-xs text-[var(--color-text-body)]">{s[4]}</p>
              <div className="flex gap-2">
                <Link to={s[0] === "울산 석유화학 플랜트 증설" ? "/hq/site/ulsan" : "/hq/site/ulsan"} className="rounded border border-[var(--color-checkbox-border)] px-3 py-1.5 text-xs text-[var(--color-text-label)]">상세</Link>
                <button type="button" className="rounded border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-text-body)]">삭제</button>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-10 border-t border-[var(--color-border)] pt-8">
          <h2 className="text-sm font-medium text-[var(--color-text-heading)]">현장 추가</h2>
          <div className="grid max-w-[576px] grid-cols-2 gap-4 py-5">
            {["현장 이름", "현장관리자 이름", "이메일", "초기 비밀번호"].map((label) => (
              <label key={label} className="flex flex-col gap-1.5">
                <span className="text-xs text-[var(--color-text-body)]">{label}</span>
                <input className="h-[38px] rounded border border-[var(--color-border)] bg-[var(--color-bg-app)] px-3 text-sm text-[var(--color-text-heading)] outline-none" />
              </label>
            ))}
          </div>
          <button type="button" className="rounded bg-[var(--color-accent)] px-3 py-1.5 text-[11px] font-medium text-white">현장 ・ 계정 생성</button>
        </section>
      </HQContent>
    </HQLayout>
  );
}
