"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Review {
  id: number;
  title: string;
  thumbnail: string | null;
  link: string;
  created_at: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-36">
          <p
            className="font-display text-accent text-sm tracking-[0.3em] uppercase mb-6 italic"
            style={{ fontWeight: 300 }}
          >
            Reviews
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white"
            style={{ fontWeight: 400 }}
          >
            이용 후기
          </h1>
          <p
            className="mt-6 text-neutral-400 text-lg max-w-xl"
            style={{ lineHeight: 1.7 }}
          >
            중앙요양원을 경험하신 분들의 이야기입니다.
          </p>
          <div className="w-16 h-px bg-accent/40 mt-8" />
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-neutral-400">불러오는 중...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-400">아직 등록된 후기가 없습니다.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <a
                  key={review.id}
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-accent/30 hover:shadow-lg transition-all duration-500"
                >
                  <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden">
                    {review.thumbnail ? (
                      <img
                        src={review.thumbnail}
                        alt={review.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-300">
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-accent transition-colors line-clamp-2">
                      {review.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2">
                      {new Date(review.created_at).toLocaleDateString("ko-KR")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
