import { Link, useNavigate } from "react-router-dom";
import AuthSplitLayout from "../../components/auth/AuthSplitLayout";

export default function ScreenHQSignup({ validation = false }: { validation?: boolean }) {
  const navigate = useNavigate();
  const error = validation;
  return (
    <AuthSplitLayout
      eyebrow="본사 회원가입"
      titleLines={["가입 즉시", "현장 관리가 시작됩니다"]}
      titleClassName="text-[24px] leading-[33px]"
      description="본사 계정 생성 후, 현장관리자 계정을 추가하고 소속 현장을 등록할 수 있습니다."
    >
      <h1 className="font-semibold text-[var(--color-text-heading)] text-xl">본사 회원가입</h1>
      <p className="text-[var(--color-text-body)] text-sm pt-1">가입 시 회사와 본사 계정이 함께 생성됩니다</p>
      <form className="flex flex-col w-full pt-7" onSubmit={(e) => { e.preventDefault(); navigate("/hq/login"); }}>
        {[
          ["본사(회사) 이름", "탑세이프티컨설팅"],
          ["담당자 이름", "홍길동"],
          ["이메일", "hq@example.com"],
        ].map(([label, placeholder]) => (
          <div key={label} className="pt-3.5 first:pt-0">
            <label className="block text-[var(--color-text-label)] text-xs pb-1.5">{label}</label>
            <input placeholder={placeholder} className={`bg-[var(--color-bg-input)] border ${error ? "border-[var(--color-border)]" : "border-[var(--color-border)]"} rounded-lg h-[42px] px-3 w-full text-[var(--color-text-heading)] text-sm placeholder:text-[var(--color-text-faint)] outline-none`} />
            {error && <p className="text-[#dc2626] text-[11px] leading-[16.5px] pt-1">필수 항목입니다</p>}
          </div>
        ))}
        <div className="grid grid-cols-2 gap-3 py-3.5">
          <div>
            <label className="block text-[var(--color-text-label)] text-xs pb-1.5">비밀번호</label>
            <input type="password" className="bg-[var(--color-bg-input)] border border-[var(--color-border)] rounded-lg h-[42px] px-3 w-full outline-none" />
            {error && <p className="text-[#dc2626] text-[11px] leading-[16.5px] pt-1">필수 항목입니다</p>}
          </div>
          <div>
            <label className="block text-[var(--color-text-label)] text-xs pb-1.5">비밀번호 확인</label>
            <input type="password" className="bg-[var(--color-bg-input)] border border-[var(--color-border)] rounded-lg h-[42px] px-3 w-full outline-none" />
          </div>
        </div>
        <button type="submit" className="bg-[var(--color-accent)] rounded-lg h-10 text-sm font-medium text-white">가입하기</button>
      </form>
      <p className="text-[var(--color-text-body)] text-xs text-center w-full pt-6">이미 계정이 있으신가요? <Link to="/hq/login" className="text-[var(--color-accent)]">로그인</Link></p>
    </AuthSplitLayout>
  );
}
