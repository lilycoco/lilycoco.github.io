export const StickyHeader = () => (
  <div
    className="flex sticky top-0 flex-wrap gap-8 justify-end py-10 w-full text-sm sm:px-28"
    style={{
      fontFamily: "Lato, sans-serif",
      textShadow:
        "#fff 5px 0 10px, #fff 5px 0 10px, #fff 5px 0 10px, #fff 5px 0 10px, #fff 5px 0 10px",
    }}
  >
    <div>
      <a href="#area-about">About</a>
    </div>
    <div>
      <a href="#area-skills">Skills</a>
    </div>
    <div>
      <a href="#area-works">Works</a>
    </div>
    <div>
      <a href="#area-awords">Awords</a>
    </div>
    <div className="pr-3">
      <a target="_blank" href="https://lilycoco.hatenablog.com">
        Blog
      </a>
    </div>
  </div>
);
