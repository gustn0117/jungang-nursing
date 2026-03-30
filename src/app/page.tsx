import Image from "next/image";
import Link from "next/link";

const highlights = [
  { title: "대전역 도보 3분", desc: "기차·지하철·버스 모두 편리" },
  { title: "9층 전면 리모델링", desc: "호텔급 프리미엄 시설" },
  { title: "24시간 전문 간호", desc: "간호사·물리치료사 상주" },
  { title: "매주 자체 예배", desc: "영적 돌봄과 마음의 평안" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 animate-[heroZoom_20s_ease-in-out_infinite_alternate]">
          <Image src="/hero-main.png" alt="중앙요양원 옥상 공연" fill className="object-cover object-[center_60%]" priority />
        </div>
        <div className="absolute inset-0 bg-neutral-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-neutral-900/60" />

        <div className="relative max-w-4xl mx-auto px-6 w-full text-center pt-32 pb-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent/50 mx-auto mb-8 animate-fade-in" />
          <p className="font-display text-accent text-xs md:text-sm tracking-[0.4em] uppercase mb-8 animate-fade-in italic" style={{ fontWeight: 300 }}>
            Jungang Nursing Home
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white animate-fade-in-up" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
            대전의 중심에서,
          </h1>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white/80 mt-3 animate-fade-in-up delay-100 opacity-0" style={{ lineHeight: 1.5 }}>
            <span className="text-accent-light">품격 있는 요양</span>을 약속합니다.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10 animate-fade-in-up delay-200 opacity-0">
            <div className="w-10 h-px bg-accent/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-accent/50" />
            <div className="w-10 h-px bg-accent/40" />
          </div>

          <p className="mt-7 text-neutral-300/70 text-sm md:text-base max-w-md mx-auto animate-fade-in-up delay-300 opacity-0 tracking-wide" style={{ lineHeight: 2, fontWeight: 300 }}>
            대전역 바로 앞, 전면 리모델링한 9층 건물에서
            <br className="hidden md:block" />
            호텔처럼 품격 있는 요양 서비스를 제공합니다.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400 opacity-0">
            <Link href="/contact" className="btn-primary">상담 문의하기</Link>
            <Link href="/about" className="btn-outline">더 알아보기</Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600 opacity-0">
          <span className="text-neutral-400 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-neutral-400 to-transparent animate-[bounce_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ── Highlights Strip ── */}
      <section className="bg-warm border-b border-neutral-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200/60">
            {highlights.map((item) => (
              <div key={item.title} className="py-10 px-6 text-center">
                <h3 className="text-sm font-semibold text-neutral-800 mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Intro ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>About Us</p>
          <h2 className="section-title mt-4">
            품위 있는 노후를
            <br />
            함께 가꿉니다
          </h2>
          <div className="gold-line-center mt-5" />
          <p className="mt-8 text-neutral-600 text-[15px] leading-[1.9]">
            중앙요양원은 대전역 바로 앞, 교통이 가장 편리한 곳에 위치해 있습니다.
            최근 전면 리모델링을 마친 9층 대형 건물에서 호텔처럼 품격 있는
            요양 서비스를 제공합니다.
          </p>
          <p className="mt-4 text-neutral-600 text-[15px] leading-[1.9]">
            전문 간호 인력이 24시간 상주하며, 물리치료·운동재활·인지치료 등
            체계적인 프로그램으로 어르신의 건강을 돌봅니다.
          </p>
          <div className="mt-10 flex justify-center gap-12">
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
          <Link href="/about" className="btn-outline-dark mt-10">더 알아보기</Link>
        </div>
      </section>

      {/* ── Facilities — Bento Grid ── */}
      <section className="py-24 md:py-32 bg-warm-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>Facilities</p>
            <h2 className="section-title mt-4">프리미엄 시설</h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Large left */}
            <div className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto">
              <Image src="/IMG_6984.JPG" alt="카페형 면회 공간" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Visiting Lounge</p>
                <p className="text-white font-medium text-xl md:text-2xl">카페형 면회 공간</p>
                <p className="text-white/60 text-sm mt-1">가족과 함께하는 따뜻한 시간</p>
              </div>
            </div>
            {/* Top right */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/IMG_6976.JPG" alt="족욕 시설" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-medium">프리미엄 족욕</p>
              </div>
            </div>
            {/* Bottom right */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/IMG_6987.JPG" alt="물리치료실" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-medium">물리치료실</p>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/IMG_6982.JPG" alt="간호 스테이션" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-medium">간호 스테이션</p>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/IMG_6990.JPG" alt="옥상 정원" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-medium">옥상 정원</p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center rounded-2xl bg-primary/5 border border-accent/20 p-8">
              <div className="text-center">
                <p className="font-serif text-2xl text-primary">시설이 궁금하신가요?</p>
                <Link href="/facilities" className="inline-flex items-center gap-2 text-accent text-sm tracking-wider mt-4 hover:text-accent-dark transition-colors">
                  시설 더 보기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs Gallery ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>Programs</p>
            <h2 className="section-title mt-4">따뜻한 일상, 활기찬 하루</h2>
            <div className="gold-line-center" />
            <p className="section-subtitle mx-auto">
              재활 운동부터 문화 활동까지, 어르신의 건강하고 즐거운 하루를 만듭니다
            </p>
          </div>

          {/* Varied grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 group relative aspect-[16/10] rounded-2xl overflow-hidden">
              <Image src="/IMG_6946.JPG" alt="워크메이트 재활" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-100 backdrop-blur-sm mb-2">재활치료</span>
                <p className="text-white font-medium text-lg">워크메이트 보행 재활</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden">
              <Image src="/IMG_6967.JPG" alt="족욕 프로그램" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-medium">족욕 프로그램</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden">
              <Image src="/IMG_6959.JPG" alt="인지 활동" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-medium">인지 활동</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/IMG_5399.JPG" alt="미술 활동" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-medium">미술 활동</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/IMG_6917.JPG" alt="생일잔치" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-medium">생일잔치</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/IMG_5378.JPG" alt="기립 훈련" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-medium">기립 훈련</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark text-sm tracking-[0.15em] uppercase transition-colors">
              프로그램 더 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-24 md:py-32 bg-warm-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>Reviews</p>
            <h2 className="section-title mt-4">가족들의 이야기</h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "어머니를 모시고 여러 요양원을 다녀봤지만, 시설이나 간호 수준이 여기만큼 좋은 곳은 없었습니다. 무엇보다 직원분들이 진심으로 대해주셔서 감사합니다.",
                name: "보호자 김○○",
                relation: "어머니 입소 2년차",
              },
              {
                text: "대전역 바로 앞이라 면회 오기 정말 편합니다. 깔끔하게 리모델링된 시설에 족욕, 재활치료까지 체계적으로 해주시니 안심이 됩니다.",
                name: "보호자 박○○",
                relation: "아버지 입소 1년차",
              },
              {
                text: "매주 보내주시는 사진과 영상 덕분에 멀리서도 부모님 상태를 잘 알 수 있어요. 생일잔치도 챙겨주시고, 정말 가족처럼 돌봐주십니다.",
                name: "보호자 이○○",
                relation: "아버지 입소 3년차",
              },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-8 border border-neutral-100">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 text-[15px] leading-[1.9]">{review.text}</p>
                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <p className="text-sm font-semibold text-neutral-800">{review.name}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{review.relation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark text-sm tracking-[0.15em] uppercase transition-colors">
              리뷰 더 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_6990.JPG" alt="옥상 공연" fill className="object-cover" />
          <div className="absolute inset-0 bg-neutral-900/65" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-accent text-sm tracking-[0.3em] uppercase mb-6 italic" style={{ fontWeight: 300 }}>Contact Us</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            어르신의 편안한 내일을
            <br />
            함께 준비하겠습니다.
          </h2>
          <p className="mt-6 text-white/50 text-base max-w-md mx-auto" style={{ lineHeight: 1.8 }}>
            상담은 무료입니다. 부담 없이 연락주세요.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">상담 문의하기</Link>
            <a href="tel:042-226-7575" className="btn-outline">042-226-7575</a>
          </div>
        </div>
      </section>
    </>
  );
}
