import * as React from "react";

import { Heading } from "./Heading";

export const About = () => {
  return (
    <div className="px-3 pb-32 pt-20">
      <Heading title="About" id="area-about" />
      <div className="flex w-full justify-center gap-10">
        <div className="py-2">
          <img
            src="/static/pic/profile-pic.jpeg"
            className="w-24 h-auto min-w-[5rem]"
          ></img>
        </div>
        <div className="text-sm max-w-md">
          <p className="pb-3">lilycoco / Ryoko</p>
          <p className="pb-3">
            Joined a credit card company as a new graduate. For about four
            years, I was engaged in a variety of work including media review,
            sales promotion planning, and customer support. One day, while on my
            way to work, I was injured in a traffic accident which tooks five
            months for recovery and decided to live my life that I would not
            regret no matter when I died. After that, I went to the Philippines
            and Australia to study English for about a year. After returning to
            Japan, I started working for a foreign PR company and enrolled in a
            programming school at the same time, then I kept studying 40 hours a
            week for 6 months and graduated with the highest score in technical
            skills. I'm currently working as a front-end engineer and product
            owner at Givery Inc.
          </p>
          <p>
            新卒でクレジットカード会社へ入社。約４年間媒体の校閲、販売促進企画、カスタマーサポートなど様々な業務に従事する。ある日出勤途中に交通事故で全治5ヶ月の怪我を負い、「いつ死んでも後悔しない人生にしよう」と決意。
            その後はフィリピン、オーストラリアへ留学し約1年で英会話を習得。
            帰国後は外資PR会社へ就職すると共にプログラミングスクールへ入学し、週40時間の学習を半年間続けた末技術力1位の成績で卒業。
            現在は株式会社Giveryにてフロントエンドエンジニア、プロダクトオーナーを勤める。
          </p>
        </div>
      </div>
    </div>
  );
};
