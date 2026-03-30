export async function GET() {
  const base = "https://중앙요양원.kr";
  const now = new Date().toUTCString();

  const pages = [
    { title: "중앙요양원 - 대전 프리미엄 요양원", url: base, desc: "대전역 앞, 9층 리모델링 건물에서 호텔급 요양 서비스를 제공합니다." },
    { title: "요양원 소개", url: `${base}/about`, desc: "가족처럼 진심으로, 품위 있는 노후를 함께 가꿉니다." },
    { title: "시설 안내", url: `${base}/facilities`, desc: "전면 리모델링한 프리미엄 시설을 소개합니다." },
    { title: "프로그램", url: `${base}/programs`, desc: "물리치료, 운동재활, 인지치료 등 체계적인 프로그램을 운영합니다." },
    { title: "이용 후기", url: `${base}/reviews`, desc: "중앙요양원을 경험하신 분들의 이야기입니다." },
    { title: "오시는 길", url: `${base}/contact`, desc: "대전시 동구 중동 태전로 5, 대전역 도보 3분." },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>중앙요양원</title>
    <link>${base}</link>
    <description>대전 중앙요양원 - 프리미엄 요양 서비스</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
${pages.map((p) => `    <item>
      <title>${p.title}</title>
      <link>${p.url}</link>
      <description>${p.desc}</description>
      <pubDate>${now}</pubDate>
      <guid>${p.url}</guid>
    </item>`).join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
