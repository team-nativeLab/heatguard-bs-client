const records = [
  ["온도계", "3층 외벽", "36°", "65%", "36.2°C", "09:02", "orange"],
  ["작업사진", "지하 배관", "34°", "72%", "34.5°C", "10:30", "orange"],
  ["휴식사진", "옥상 그늘막", "38°", "80%", "38.7°C", "12:05", "red"],
  ["온도계", "3층 외벽", "35°", "60%", "35.1°C", "14:00", "orange"],
];

export const siteGroups = [
  { name: "인천 복합물류센터 신축", temp: "36.2°C", status: "폭염 경보", count: "12건", tone: "orange" },
  { name: "울산 석유화학 플랜트 증설", temp: "38.7°C", status: "폭염 중대경보", count: "8건", tone: "red" },
  { name: "부산항 3부두 확장", temp: "33.1°C", status: "폭염 주의보", count: "5건", tone: "yellow" },
];

function toneClass(tone: string) {
  if (tone === "red") return "bg-[var(--color-heat-red-bg)] text-[var(--color-heat-red-fg)]";
  if (tone === "yellow") return "bg-[var(--color-heat-yellow-bg)] text-[var(--color-heat-yellow-fg)]";
  return "bg-[var(--color-heat-orange-bg)] text-[var(--color-heat-orange-fg)]";
}

function valueTone(tone: string) {
  if (tone === "red") return "text-[var(--color-heat-red-fg)]";
  if (tone === "yellow") return "text-[var(--color-heat-yellow-fg)]";
  return "text-[var(--color-heat-orange-fg)]";
}

export default function RecordTable() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]">
      <div className="grid h-[35px] grid-cols-[142px_127px_150px_90px_90px_126px_1fr] items-center border-b border-[var(--color-border)] px-4 font-['JetBrains_Mono',monospace] text-[10px] font-bold tracking-[0.5px] text-[var(--color-text-faint)]">
        <span>사진</span><span>유형</span><span>장소</span><span>온도</span><span>습도</span><span>체감온도</span><span>시간</span>
      </div>
      {records.map((r, i) => (
        <div key={i} className="grid min-h-[53px] grid-cols-[142px_127px_150px_90px_90px_126px_1fr] items-center border-b border-[var(--color-border)] px-4 text-[12px] last:border-b-0">
          <div className="flex gap-2">
            <div className="flex size-8 items-center justify-center rounded bg-[var(--color-bg-tile)] text-[var(--color-text-faint)]">▧</div>
            <div className="flex size-8 items-center justify-center rounded bg-[var(--color-bg-tile)] text-[var(--color-text-faint)] opacity-40">▧</div>
          </div>
          <span className="text-[var(--color-text-label)]">{r[0]}</span>
          <span className="text-[var(--color-text-label)]">{r[1]}</span>
          <span className="font-['JetBrains_Mono',monospace] text-[var(--color-text-value)]">{r[2]}</span>
          <span className="font-['JetBrains_Mono',monospace] text-[var(--color-text-value)]">{r[3]}</span>
          <span className={`font-['JetBrains_Mono',monospace] font-medium ${valueTone(r[6])}`}>{r[4]}</span>
          <span className="font-['JetBrains_Mono',monospace] text-[var(--color-text-body)]">{r[5]}</span>
        </div>
      ))}
    </div>
  );
}

export function HeatBadge({ temp, status, tone = "orange" }: { temp: string; status: string; tone?: string }) {
  return (
    <span className={`${toneClass(tone)} inline-flex items-center gap-1.5 rounded px-2 py-0.5 font-['JetBrains_Mono',monospace] text-[10px] font-medium whitespace-nowrap`}>
      {temp}<span className="opacity-70">·</span>{status}
    </span>
  );
}
