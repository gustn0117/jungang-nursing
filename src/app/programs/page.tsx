import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    name: "운동재활치료",
    color: "bg-emerald-500/20 text-emerald-100",
    desc: "워크메이트, 기립훈련기 등 전문 장비로 신체 기능을 회복합니다.",
    image: "/IMG_6946.JPG",
  },
  {
    name: "족욕 프로그램",
    color: "bg-blue-500/20 text-blue-100",
    desc: "아로마 족욕으로 혈액순환을 촉진하고 편안한 휴식을 드립니다.",
    image: "/IMG_6967.JPG",
  },
  {
    name: "인지향상치료",
    color: "bg-purple-500/20 text-purple-100",
    desc: "퍼즐, 그리기 등 다양한 활동으로 인지 기능을 유지합니다.",
    image: "/IMG_6959.JPG",
    objectPos: "object-top",
  },
  {
    name: "미술치료",
    color: "bg-amber-500/20 text-amber-100",
    desc: "그림과 색채 활동을 통한 정서 표현과 심리 안정을 돕습니다.",
    image: "/IMG_5399.JPG",
  },
  {
    name: "문화 프로그램",
    color: "bg-rose-500/20 text-rose-100",
    desc: "옥상 공연, 노래교실 등 즐거운 문화 활동으로 활력을 드립니다.",
    image: "/IMG_6990.JPG",
  },
  {
    name: "생일잔치",
    color: "bg-pink-500/20 text-pink-100",
    desc: "매월 생일을 맞이한 어르신을 위한 특별한 축하 행사입니다.",
    image: "/IMG_6917.JPG",
    objectPos: "object-top",
  },
];

const subPrograms = [
  { name: "노래교실", desc: "노래와 음악으로 정서적 안정과 즐거움을 선사" },
  { name: "취미교실", desc: "수공예와 창작 활동으로 일상의 활력을 제공" },
  { name: "색종이만들기", desc: "소근육 운동 및 집중력 향상" },
  { name: "자체 예배", desc: "매주 일요일 목사님 방문 예배, 영적 평안" },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_6990.JPG" alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-neutral-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-36">
          <p className="font-display text-accent text-sm tracking-[0.3em] uppercase mb-6 italic" style={{ fontWeight: 300 }}>Programs</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">프로그램 안내</h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-xl leading-[1.7]">
            다양한 프로그램으로 어르신의
            <br />신체, 정서, 인지 건강을 균형 있게 돌봅니다.
          </p>
          <div className="w-16 h-px bg-accent/40 mt-8" />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.name} className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${p.objectPos || 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${p.color}`}>
                      {p.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-neutral-600 leading-[1.7]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Programs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-display text-accent text-sm tracking-[0.3em] uppercase italic" style={{ fontWeight: 300 }}>More Activities</p>
            <h2 className="section-title mt-4">그 외 프로그램</h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {subPrograms.map((p) => (
              <div key={p.name} className="flex items-start gap-4 p-6 rounded-2xl hover:bg-warm transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-neutral-500 leading-[1.7]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_5399.JPG" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-white">프로그램이 궁금하신가요?</h3>
          <p className="mt-4 text-neutral-400">방문 상담을 통해 프로그램을 자세히 안내해드립니다.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">상담 문의하기</Link>
            <a href="tel:042-000-0000" className="btn-outline">전화 문의</a>
          </div>
        </div>
      </section>
    </>
  );
}
