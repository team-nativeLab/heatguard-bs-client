import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { DashboardIcon, SiteManageIcon, AccountIcon, PrintIcon } from "../icons/Icons";
import ThemeToggleButton from "../ui/ThemeToggleButton";

const NAV_ITEMS = [
  { label: "대시보드", Icon: DashboardIcon, to: "/hq/dashboard" },
  { label: "현장 관리", Icon: SiteManageIcon, to: "/hq/sites" },
  { label: "전체 기록", Icon: PrintIcon, to: "/hq/records" },
  { label: "계정 설정", Icon: AccountIcon, to: "/hq/account" },
];

export default function HQLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-[var(--color-bg-app)] text-[var(--color-text-body)]">
      <aside className="flex h-screen w-[208px] shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-bg-surface)]">
        <div className="flex w-full flex-col items-start border-b border-[var(--color-border)] p-5">
          <div className="flex w-full items-center gap-2.5">
            <div className="flex size-6 shrink-0 items-center justify-center overflow-hidden rounded bg-[#0f172a]">
              <img alt="폭염가드 로고" className="size-[25px] object-cover" src={logo} />
            </div>
            <p className="whitespace-nowrap text-sm font-semibold leading-5 text-[var(--color-text-heading)]">폭염가드</p>
          </div>
          <p className="pl-8 pt-0.5 font-['JetBrains_Mono',monospace] text-[10px] leading-[15px] tracking-[0.5px] text-[var(--color-accent)]">본사</p>
        </div>

        <nav className="flex w-full flex-1 flex-col items-start px-3 py-4">
          {NAV_ITEMS.map(({ label, Icon, to }) => {
            const active = to === "/hq/dashboard"
              ? location.pathname === "/hq/dashboard"
              : location.pathname.startsWith(to);

            return (
              <Link
                key={label}
                to={to}
                className={`flex w-[183px] items-center gap-2.5 rounded px-3 py-2 ${
                  active
                    ? "bg-[var(--color-bg-tile)] text-[var(--color-text-heading)]"
                    : "text-[var(--color-text-body)]"
                }`}
              >
                <Icon className="size-4 shrink-0" />
                <span className="whitespace-nowrap text-sm leading-5">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex w-full flex-col items-start border-t border-[var(--color-border)] p-4">
          <div className="w-full rounded border border-[var(--color-danger-border)] bg-[var(--color-danger-soft-bg)] px-3 py-2">
            <p className="text-center text-[11px] font-medium leading-[16.5px] text-[var(--color-danger-text)]">긴급호출 1건</p>
          </div>
          <p className="pt-3 text-xs leading-4 text-[var(--color-text-body)]">탑세이프티컨설팅</p>
          <p className="pt-0.5 font-['JetBrains_Mono',monospace] text-[11px] leading-[16.5px] text-[var(--color-text-faint)]">hq@example.com</p>
        </div>
      </aside>

      <main className="h-screen min-w-0 flex-1 overflow-y-auto">{children}</main>
      <ThemeToggleButton className="absolute right-4 top-4 z-40" />
    </div>
  );
}

export function HQContent({ children, narrow = false }: { children: ReactNode; narrow?: boolean }) {
  return <div className={`mx-auto w-full p-8 ${narrow ? "max-w-[448px]" : "max-w-[1024px]"}`}>{children}</div>;
}
