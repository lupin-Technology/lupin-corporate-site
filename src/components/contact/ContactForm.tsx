"use client";

import { useState } from "react";

import { ViewMoreButton } from "@/components/common";

export function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className="mb-[40px] text-[15px] leading-[2] tracking-[0.04em] text-[#333]">
        下記のフォームをご記入の上、お問い合わせください。
      </p>

      <div className="pt-[50px] text-base leading-[2] tracking-[0.08em]">
        <label
          className="block pb-5 text-base leading-[1.6] font-medium text-[#333]"
          htmlFor="contact-type"
        >
          お問い合わせの種類
          <span className="ml-1.5 text-xs text-[#dc6e87]">*</span>
        </label>
        <div className="relative">
          <select
            id="contact-type"
            className="h-[70px] w-full appearance-none border border-[#e4e4e4] bg-white px-[18px] text-[15px] leading-[1.6] text-[#333] transition-colors outline-none focus:border-[#333]"
            defaultValue=""
            required
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="business">新規お取り引きに関して</option>
            <option value="press">広報・取材</option>
            <option value="speaking">講演・執筆・イベント登壇</option>
            <option value="other">その他</option>
          </select>
          <span className="pointer-events-none absolute top-1/2 right-12 h-0 w-0 -translate-y-1/2 border-t-[7px] border-r-[4px] border-l-[4px] border-t-[#222] border-r-transparent border-l-transparent" />
        </div>
      </div>

      <div className="pt-[50px] text-base leading-[2] tracking-[0.08em]">
        <label className="block pb-5 text-base leading-[1.6] font-medium text-[#333]">
          お名前
          <span className="ml-1.5 text-xs text-[#dc6e87]">*</span>
        </label>
        <div className="flex justify-between gap-10 max-md:flex-col max-md:gap-4">
          <input
            type="text"
            className="h-[70px] w-full border border-[#e4e4e4] bg-white px-[18px] text-[15px] leading-[1.6] text-[#333] transition-colors outline-none focus:border-[#333]"
            placeholder="姓"
            required
          />
          <input
            type="text"
            className="h-[70px] w-full border border-[#e4e4e4] bg-white px-[18px] text-[15px] leading-[1.6] text-[#333] transition-colors outline-none focus:border-[#333]"
            placeholder="名"
            required
          />
        </div>
      </div>

      <div className="pt-[50px] text-base leading-[2] tracking-[0.08em]">
        <label
          className="block pb-5 text-base leading-[1.6] font-medium text-[#333]"
          htmlFor="company"
        >
          会社名・学校名
        </label>
        <input
          id="company"
          type="text"
          className="h-[70px] w-full border border-[#e4e4e4] bg-white px-[18px] text-[15px] leading-[1.6] text-[#333] transition-colors outline-none focus:border-[#333]"
          placeholder="〇〇株式会社"
        />
      </div>

      <div className="pt-[50px] text-base leading-[2] tracking-[0.08em]">
        <label
          className="block pb-5 text-base leading-[1.6] font-medium text-[#333]"
          htmlFor="email"
        >
          メールアドレス
          <span className="ml-1.5 text-xs text-[#dc6e87]">*</span>
        </label>
        <input
          id="email"
          type="email"
          className="h-[70px] w-full border border-[#e4e4e4] bg-white px-[18px] text-[15px] leading-[1.6] text-[#333] transition-colors outline-none focus:border-[#333]"
          placeholder="xxx@example.com"
          required
        />
      </div>

      <div className="pt-[50px] text-base leading-[2] tracking-[0.08em]">
        <label
          className="block pb-5 text-base leading-[1.6] font-medium text-[#333]"
          htmlFor="message"
        >
          お問い合わせ内容
          <span className="ml-1.5 text-xs text-[#dc6e87]">*</span>
        </label>
        <textarea
          id="message"
          className="h-[350px] w-full resize-none border border-[#e4e4e4] bg-white px-[18px] py-[18px] text-[15px] leading-[1.6] text-[#333] transition-colors outline-none focus:border-[#333]"
          placeholder="お問い合わせ内容を入力してください"
          required
        />
      </div>

      <div className="pt-[50px] text-base leading-[2] tracking-[0.08em]">
        <label className="flex cursor-pointer items-center gap-[10px] text-sm text-[#333]">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="size-[18px] cursor-pointer"
            required
          />
          <span>
            <a
              href="/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-[#8e8e8e]"
            >
              個人情報の取り扱い
            </a>
            に同意する
            <span className="ml-1.5 text-xs text-[#dc6e87]">*</span>
          </span>
        </label>
      </div>

      <div className="mt-[40px]">
        <ViewMoreButton label="確認画面へ" />
      </div>
    </form>
  );
}
