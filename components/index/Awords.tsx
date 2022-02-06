/* eslint-disable no-irregular-whitespace */
import * as React from "react";

import { Heading } from "./Heading";
import { Nav } from "react-bootstrap";

export const Awords = () => {
  return (
    <div className="pb-40">
      <Heading title="Awords" id="area-awords" />
      <div className="max-w-lg m-auto">
        <Nav.Link
          href="https://routexstartups.com/event-report/epsonhacktrek1/"
          target="_blank"
        >
          <div className="flex gap-3 pb-3 hover:underline">
            <p>2019/11</p>
            <p>エプソン主催ハッカソン「Epson Hack Trek」優秀賞受賞</p>
          </div>
        </Nav.Link>
        <Nav.Link href="https://mugensweeper.netlify.app/" target="_blank">
          <div className="flex gap-3 pb-3 hover:underline">
            <p>2019/02</p>
            <p>
              G's Academy Tokyo 卒業制作発表会4位 （サービス点 6位、技術点 1位）
              チーム開発でバックエンド、フロントエンド、一部デザインを担当
            </p>
          </div>
        </Nav.Link>
      </div>
    </div>
  );
};
