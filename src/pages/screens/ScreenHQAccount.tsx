import HQLayout, { HQContent } from "../../components/hq/HQLayout";

export default function ScreenHQAccount() {
  return (
    <HQLayout>
      <HQContent narrow>
        <h1 className="text-xl font-semibold text-[var(--color-text-heading)]">계정 설정</h1>
        <p className="pt-1 text-sm text-[var(--color-text-body)]">비밀번호 변경</p>
        <div className="flex flex-col pt-8">
          {["현재 비밀번호", "새 비밀번호", "새 비밀번호 확인"].map((label) => (
            <label key={label} className="flex flex-col pt-4 first:pt-0">
              <span className="pb-1.5 text-xs text-[var(--color-text-body)]">{label}</span>
              <input type="password" className="h-[38px] rounded border border-[var(--color-border)] bg-[var(--color-bg-input)] px-3 text-sm text-[var(--color-text-heading)] outline-none" />
            </label>
          ))}
          <button type="button" className="mt-4 h-10 rounded bg-[var(--color-accent)] text-sm font-medium text-white">변경</button>
        </div>
      </HQContent>
    </HQLayout>
  );
}
