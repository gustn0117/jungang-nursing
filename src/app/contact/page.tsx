import Image from "next/image";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "주소",
    value: "대전광역시 동구 대전역 앞",
    sub: "대전역 도보 3분",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "전화",
    value: "042-000-0000",
    href: "tel:042-000-0000",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "면회 시간",
    value: "매일 10:00 ~ 17:00",
    sub: "사전 연락 시 시간 조율 가능",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    label: "예배 안내",
    value: "매주 일요일 자체 예배",
    sub: "목사님 방문",
  },
];

const directions = [
  { mode: "기차", desc: "대전역 하차 후 도보 3분" },
  { mode: "지하철", desc: "대전역 1번 출구에서 도보 5분" },
  { mode: "버스", desc: "대전역 앞 정류장 하차" },
  { mode: "자가용", desc: "건물 내 주차 가능" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_4956.JPG" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-neutral-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-36">
          <p className="font-display text-accent text-sm tracking-[0.3em] uppercase mb-6 italic" style={{ fontWeight: 300 }}>Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white" style={{ fontWeight: 400 }}>
            오시는 길
          </h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-xl" style={{ lineHeight: 1.7 }}>
            대전역 바로 앞, 언제든 편하게 방문하세요.
            <br />
            친절하게 안내해드리겠습니다.
          </p>
          <div className="w-16 h-px bg-accent/40 mt-8" />
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>Information</p>
              <h2 className="section-title mt-4">중앙요양원</h2>
              <div className="gold-line" />

              <div className="mt-10 space-y-7">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-semibold text-neutral-900 hover:text-accent transition-colors text-lg">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-neutral-900">{info.value}</p>
                      )}
                      {info.sub && (
                        <p className="text-sm text-neutral-400 mt-0.5">{info.sub}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:042-000-0000"
                className="btn-primary mt-10"
              >
                전화 상담하기
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-3">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] bg-white border border-neutral-100 rounded-2xl flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <svg className="w-12 h-12 mx-auto mb-4 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm font-medium text-neutral-500">지도 영역</p>
                  <p className="text-xs mt-1 text-neutral-400">카카오맵 / 네이버지도 삽입 가능</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>Directions</p>
            <h2 className="section-title mt-4">교통 안내</h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {directions.map((d) => (
              <div key={d.mode} className="text-center p-6 rounded-2xl hover:bg-warm transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent mb-4">
                  <span className="text-sm font-semibold">{d.mode}</span>
                </div>
                <p className="text-sm text-neutral-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 bg-neutral-900 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_6898.JPG" alt="" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6">
          <h3 className="font-serif text-2xl md:text-3xl text-white" style={{ fontWeight: 400 }}>
            어르신의 편안한 내일,
            <br className="sm:hidden" /> 함께 준비하겠습니다.
          </h3>
          <p className="mt-4 text-neutral-400">상담은 무료입니다. 부담 없이 연락주세요.</p>
          <a href="tel:042-000-0000" className="btn-primary mt-10">
            042-000-0000
          </a>
        </div>
      </section>
    </>
  );
}
