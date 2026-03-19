import Link from "next/link";

const footerNav = [
  { label: "요양원소개", href: "/about" },
  { label: "시설안내", href: "/facilities" },
  { label: "프로그램", href: "/programs" },
  { label: "오시는길", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-lg font-semibold text-white tracking-tight block">
                중앙요양원
              </span>
              <span className="text-[9px] tracking-[0.2em] text-accent/60 uppercase font-display italic block mt-1" style={{ fontWeight: 300 }}>
                Jungang Nursing Home
              </span>
            </Link>
            <p className="mt-6 text-sm text-neutral-500 max-w-xs" style={{ lineHeight: 1.8 }}>
              대전역 바로 앞, 품격 있는 요양 서비스로
              어르신의 행복한 노후를 함께합니다.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.2em] text-accent/70 uppercase mb-6 font-display italic" style={{ fontWeight: 300 }}>
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-neutral-500 hover:text-white transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] text-accent/70 uppercase mb-6 font-display italic" style={{ fontWeight: 300 }}>
              Contact
            </p>
            <div className="space-y-3 text-sm">
              <p className="text-neutral-500">대전광역시 동구 대전역 앞</p>
              <a
                href="tel:042-000-0000"
                className="block text-white hover:text-accent transition-colors text-lg font-medium"
              >
                042-000-0000
              </a>
              <p className="text-neutral-500">면회 시간: 매일 10:00 ~ 17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">
            &copy; 2026 중앙요양원. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
