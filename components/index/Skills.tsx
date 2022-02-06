import * as React from "react";

import { Heading } from "./Heading";

export const Skills = () => {
  return (
    <div className="pb-32">
      <Heading title="Skills" id="area-skills" />
      <div className="flex w-full justify-center gap-10">
        <div className="text-sm text-center">
          <p className="pb-3">Web Frontend Development, Product Owner</p>
          <p>
            HTML / CSS/JavaScript / TypeScript / PHP / jQuery / React.js /
            Vue.js / Figma / Storybook / Styleguidist
          </p>
        </div>
      </div>
    </div>
  );
};
