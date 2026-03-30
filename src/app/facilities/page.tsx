import Image from "next/image";
import Link from "next/link";

const facilities = [
  {
    title: "운동재활치료 시설",
    desc: "최신 워크메이트를 비롯한 전문 재활·운동 장비로 어르신의 신체 기능 회복을 체계적으로 돕습니다.",
    image: "/IMG_5381.JPG",
    features: ["최신 워크메이트", "전동 기립 훈련기", "상·하지 재활 장비"],
  },
  {
    title: "물리치료 시설",
    desc: "첨단 물리치료실에서 전문 치료사가 어르신 한 분 한 분의 건강을 세심히 돌봅니다.",
    image: "/IMG_6987.JPG",
    features: ["전문 물리치료사 상주", "개인별 맞춤 치료", "첨단 치료 장비"],
  },
  {
    title: "족욕 시설",
    desc: "골드 수전의 프리미엄 족욕 시설에서 혈액순환을 촉진하고 편안한 휴식을 선사합니다.",
    image: "/footbath.jpg",
    features: ["골드 수전 족욕 장비", "아로마 입욕제", "혈액순환 촉진"],
  },
  {
    title: "옥상 정원",
    desc: "햇살 가득한 옥상에서 공연, 산책 등 자연과 함께하는 시간을 보낼 수 있습니다.",
    image: "/IMG_6990.JPG",
    features: ["인조 잔디 공간", "차양 시설 완비", "문화 공연 가능"],
  },
  {
    title: "카페형 면회 공간",
    desc: "넓고 쾌적한 카페 같은 면회 공간에서 가족과 따뜻한 시간을 함께합니다.",
    image: "/IMG_6984.JPG",
    features: ["카페형 인테리어", "편안한 좌석 배치", "가족 면회 최적화"],
  },
  {
    title: "간호 스테이션",
    desc: "각 층별로 간호스테이션이 있어 언제든 필요한 도움을 즉시 받을 수 있습니다.",
    image: "/IMG_6982.JPG",
    objectPos: "object-top",
    features: ["층별 간호 스테이션", "24시간 간호사 상주", "응급 대응 시스템"],
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_6984.JPG" alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-neutral-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-36">
          <p className="font-display text-accent text-sm tracking-[0.3em] uppercase mb-6 italic" style={{ fontWeight: 300 }}>Facilities</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">시설 안내</h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-xl leading-[1.7]">
            전면 리모델링한 9층 건물,
            <br />최고의 시설로 최상의 편안함을 제공합니다.
          </p>
          <div className="w-16 h-px bg-accent/40 mt-8" />
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-20">
            {facilities.map((f, i) => (
              <div key={f.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                    <Image src={f.image} alt={f.title} fill className={`object-cover ${f.objectPos || 'object-center'}`} />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-2xl md:text-3xl text-neutral-900">{f.title}</h3>
                  <div className="w-10 h-px bg-accent mt-4" />
                  <p className="mt-6 text-neutral-600 text-[15px] leading-[1.8]">{f.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/footbath.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-white">시설을 직접 확인하세요</h3>
          <p className="mt-4 text-neutral-400">방문 상담을 통해 시설을 직접 둘러보실 수 있습니다.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">방문 상담 신청</Link>
            <a href="tel:042-000-0000" className="btn-outline">전화 문의</a>
          </div>
        </div>
      </section>
    </>
  );
}
