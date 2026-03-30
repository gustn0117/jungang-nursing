import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "진심 어린 돌봄",
    desc: "어르신 한 분 한 분을 가족처럼 진심으로 모시며, 존엄하고 따뜻한 케어를 실천합니다.",
  },
  {
    title: "전문 의료 서비스",
    desc: "간호사, 물리치료사 등 전문 인력이 24시간 체계적으로 건강을 관리합니다.",
  },
  {
    title: "프리미엄 시설",
    desc: "전면 리모델링한 9층 건물에서 호텔급 편의시설과 쾌적한 생활 환경을 제공합니다.",
  },
  {
    title: "영적 돌봄",
    desc: "매주 일요일 자체 예배를 통해 어르신의 마음에 평안과 위로를 전합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_6898.JPG" alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-neutral-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-36">
          <p className="font-display text-accent text-sm tracking-[0.3em] uppercase mb-6 italic" style={{ fontWeight: 300 }}>About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">요양원 소개</h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-xl leading-[1.7]">
            어르신의 일상에 품격과 안정을 더하는 공간,
            <br />중앙요양원이 곁에서 지켜드립니다.
          </p>
          <div className="w-16 h-px bg-accent/40 mt-8" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200">
                <Image src="/IMG_4956.JPG" alt="중앙요양원 외관" fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-44 h-44 rounded-2xl overflow-hidden border-4 border-warm shadow-xl hidden md:block">
                <Image src="/IMG_6984.JPG" alt="카페형 면회실" fill className="object-cover" />
              </div>
            </div>

            <div>
              <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>Our Story</p>
              <h2 className="section-title mt-4">
                가족처럼 진심으로,
                <br />품위 있는 노후를 함께
              </h2>
              <div className="gold-line" />
              <p className="mt-8 text-neutral-600 text-[15px] leading-[1.9]">
                중앙요양원은 대전역 바로 앞, 교통이 가장 편리한 곳에 위치해 있습니다.
                최근 전면 리모델링을 마친 9층 대형 건물에서 호텔처럼 품격 있는
                요양 서비스를 제공하고 있습니다.
              </p>
              <p className="mt-4 text-neutral-600 text-[15px] leading-[1.9]">
                전문 간호 인력이 24시간 상주하며, 물리치료·운동재활·인지치료 등
                체계적인 프로그램을 통해 어르신의 신체적·정서적 건강을 모두 돌봅니다.
              </p>

              <div className="mt-10 flex gap-10">
                {[
                  { num: "9", unit: "층", label: "대형 건물" },
                  { num: "24", unit: "h", label: "전문 간호" },
                  { num: "365", unit: "일", label: "연중무휴" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl text-primary" style={{ fontWeight: 500 }}>
                      {s.num}<span className="text-accent text-base ml-0.5">{s.unit}</span>
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>Our Values</p>
            <h2 className="section-title mt-4">핵심 가치</h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className="p-8 md:p-10 rounded-2xl border border-neutral-100 hover:border-accent/30 hover:shadow-lg transition-all duration-500">
                <span className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-display flex items-center justify-center mb-5" style={{ fontWeight: 500 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{v.title}</h3>
                <p className="text-sm text-neutral-500 leading-[1.8]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-28 bg-warm">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <svg className="w-8 h-8 mx-auto text-accent/20 mb-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-neutral-800" style={{ lineHeight: 1.8 }}>
            가족처럼 진심으로 모시며,
            <br />품위 있고 따뜻한 노후를 함께 가꾸어갑니다.
          </p>
          <div className="w-10 h-px bg-accent mx-auto mt-8" />
          <p className="mt-6 text-sm text-neutral-500 tracking-wide">중앙요양원</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_6898.JPG" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-white">상담이 필요하신가요?</h3>
          <p className="mt-4 text-neutral-400">부담 없이 연락주세요. 친절히 안내해드립니다.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">상담 문의하기</Link>
            <a href="tel:042-000-0000" className="btn-outline">전화 상담</a>
          </div>
        </div>
      </section>
    </>
  );
}
