export const StickyHeader = () => (
  <div
    className="w-full justify-end text-sm gap-8 flex px-28 py-10 sticky top-0"
    style={{
      fontFamily: "Lato, sans-serif",
      textShadow:
        "#fff 5px 0 1px, #fff 5px 0 10px, #fff 5px 0 10px, #fff 5px 0 10px, #fff 5px 0 10px",
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
    <div>
      <a target="_blank" href="https://lilycoco.hatenablog.com">
        Blog
      </a>
    </div>
  </div>
);
