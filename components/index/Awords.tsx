/* eslint-disable no-irregular-whitespace */
import * as React from "react";

import { Heading } from "./Heading";

export const Awords = () => {
  return (
    <div className="pb-40">
      <Heading title="Awords" id="area-awords" />
      <div className="flex w-full justify-center gap-10">
        <div className="text-sm text-center">
          <p className="pb-3">
            2019/11 Epson Hack Trek
            ハッカソン優秀賞　https://routexstartups.com/event-report/epsonhacktrek1/
          </p>
          <p>
            2019/02 G's Academy Tokyo 卒業制作発表会4位 （サービス点 6位、技術点
            1位） チーム開発でバックエンド、フロントエンド、一部デザインを担当
            https://mugensweeper.netlify.app/
          </p>
        </div>
      </div>
    </div>
  );
};
