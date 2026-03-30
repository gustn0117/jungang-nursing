"use client";

import { useState, useEffect, useRef } from "react";

interface Review {
  id: number;
  title: string;
  thumbnail: string | null;
  link: string;
  created_at: string;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [storedPassword, setStoredPassword] = useState("");
  const [error, setError] = useState("");

  const [reviews, setReviews] = useState<Review[]>([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const login = async () => {
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthed(true);
      setStoredPassword(password);
      setError("");
      loadReviews(password);
    } else {
      setError("비밀번호가 틀렸습니다.");
    }
  };

  const loadReviews = async (pw?: string) => {
    const res = await fetch("/api/reviews");
    const data = await res.json();
    setReviews(data);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setThumbnailPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const save = async () => {
    if (!title.trim() || !link.trim()) return;
    setSaving(true);
    await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        thumbnail: thumbnailPreview || null,
        link,
        password: storedPassword,
      }),
    });
    setTitle("");
    setLink("");
    setThumbnailPreview("");
    if (fileRef.current) fileRef.current.value = "";
    await loadReviews();
    setSaving(false);
  };

  const remove = async (id: number) => {
    if (!confirm("삭제하시겠습니까?")) return;
    await fetch("/api/reviews", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, password: storedPassword }),
    });
    await loadReviews();
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm pt-20">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 w-full max-w-sm">
          <h1 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
            관리자 로그인
          </h1>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-accent"
          />
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          <button
            onClick={login}
            className="w-full mt-4 bg-primary text-white py-3 rounded-lg text-sm hover:bg-primary-dark transition-colors"
          >
            로그인
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-8">
          리뷰 관리
        </h1>

        {/* Add Review Form */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-100 mb-10">
          <h2 className="font-semibold text-neutral-800 mb-5">새 리뷰 등록</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">
                제목
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="리뷰 제목을 입력하세요"
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">
                링크 (블로그 URL 등)
              </label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://blog.naver.com/..."
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">
                썸네일 이미지
              </label>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-accent/10 file:text-accent hover:file:bg-accent/20 file:cursor-pointer"
              />
              {thumbnailPreview && (
                <div className="mt-3 w-40 aspect-[16/10] rounded-lg overflow-hidden border border-neutral-100">
                  <img
                    src={thumbnailPreview}
                    alt="미리보기"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <button
              onClick={save}
              disabled={saving || !title.trim() || !link.trim()}
              className="bg-primary text-white px-6 py-3 rounded-lg text-sm hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? "저장 중..." : "저장"}
            </button>
          </div>
        </div>

        {/* Review List */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-100">
          <h2 className="font-semibold text-neutral-800 mb-5">
            등록된 리뷰 ({reviews.length})
          </h2>

          {reviews.length === 0 ? (
            <p className="text-neutral-400 text-sm py-8 text-center">
              등록된 리뷰가 없습니다.
            </p>
          ) : (
            <div className="space-y-3">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors"
                >
                  {review.thumbnail ? (
                    <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={review.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-14 rounded-lg bg-neutral-100 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-900 truncate">
                      {review.title}
                    </p>
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline truncate block"
                    >
                      {review.link}
                    </a>
                  </div>
                  <button
                    onClick={() => remove(review.id)}
                    className="text-neutral-400 hover:text-red-500 transition-colors flex-shrink-0 p-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
