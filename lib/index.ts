import { ProductConstructor } from "../models/Index";

const productList: ProductConstructor[] = [
  {
    id: 0,
    name: "Space Invaders",
    text:
      "I developed this using jQuery and Canvas over about a week, 1 months later since when I started learning programming \n\n 私が初めて作ったゲームです。音も出ます。",
    url: "//lilycoco-spaceinvaders.netlify.com/",
    imgSrc: "/static/pic/invaders.png",
    heart: 0,
    like: 0,
    iconImg: "/static/icon/invaders.png",
    date: "20180801",
  },
  {
    id: 1,
    name: "Tetris (jQuery)",
    text:
      "I learned a lot through developing Tetris, such as algorithm, functional, and basic design. 私にプログラミングの楽しさを教えてくれた思い出のテトリスです。",
    url: "//lilycoco-tetris.netlify.com/",
    imgSrc: "/static/pic/tetris.png",
    heart: 0,
    like: 0,
    iconImg: "/static/icon/tetris3.png",
    date: "20181001",
  },
  {
    id: 2,
    name: "Mugen Sweeper",
    text:
      "This is unusual minesweeper which has unlimited field and enable to play with multiple players, developed with Node.js, Nuxt.js and Vue.js. \n\n G's Academyの卒業制作で作成した無限に画面が広がるマインスイーパーです。",
    url: "//mugensweeper.netlify.com/",
    imgSrc: "/static/pic/mugen.png",
    heart: 0,
    like: 0,
    iconImg: "/static/icon/bomb.png",
    date: "20190201",
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    text:
      "Actually it was just a tutorial of React, but I added TypeScript and Hooks for practice. \n React、TypeScriptを習得するために作ったゲームです。",
    url: "/tictac/",
    imgSrc: "/static/pic/tictac.png",
    heart: 0,
    like: 0,
    iconImg: "/static/icon/tictac.png",
    date: "20190701",
  },
  {
    id: 4,
    name: "Tetris (React)",
    text:
      "I redeveloped Tetris using React and TypeScript 1 year after I developed Tetris with jQuery. Found out how I was wrong before and lots of improvement. \n 以前jQueryで作ったテトリスをReact, TypeScriptで書き直しました。",
    url: "/tetris/",
    imgSrc: "/static/pic/tetris2.png",
    heart: 0,
    like: 0,
    iconImg: "/static/icon/tetris.png",
    date: "20190801",
  },
  {
    id: 5,
    name: "Cup Ramen Timer",
    text:
      "This is a fun game to play while waiting for your cup noodles to be ready! \n 六本木にあるライブコーディングが楽しめるBar、Hacker's Barでアルバイトしていた時にお客さんからリクエストされて作ったスマホ用ゲームです。※商用利用でないため著作権の許可は頂いておりません。怒られたら消します。",
    url: "//lilycoco-minigames.netlify.app",
    imgSrc: "/static/pic/cup_ramen.png",
    heart: 0,
    like: 0,
    iconImg: "/static/icon/noodles.png",
    date: "20191101",
  },
  {
    id: 6,
    name: "Happy dog devices for Happy dogs",
    text:
      "This is my first product using Unity. I created it with amazing team mates at Gloval Game Jam 2020. \n Gloval Game Jam という国際的なゲーム開発イベントで海外のメンバーと2日間で開発したゲームです。",
    url: "//josiahp.itch.io/happy-dog-devices-for-happy-dogs",
    imgSrc: "/static/pic/happy_dog.png",
    heart: 0,
    like: 0,
    iconImg: "/static/icon/balloon-dog.png",
    date: "20200201",
  },
  {
    id: 7,
    name: "Track Test",
    text:
      "現在フロントエンジニアとして、エンジニアのプログラミングスキルを測るWebアプリの開発をしています。",
    url: "//tracks.run/products/test/",
    imgSrc: "/static/pic/track-test.png",
    heart: 0,
    like: 0,
    iconImg: "/static/icon/balloon-dog.png",
    date: "20220101",
  },
];

export const reversedProductList = productList.reverse();

export const addPoint = (
  content: ProductConstructor[],
  icon: string,
  i: number,
) =>
  content.map((c) => {
    if (c.id === i) {
      switch (icon) {
        case "like":
          c.like += 1;
          break;
        case "heart":
          c.heart += 1;
          break;
      }
    }
    return c;
  });

export const countLikePoint = (content: ProductConstructor, icon: string) => {
  switch (icon) {
    case "like":
      return content.like;
    case "heart":
      return content.heart;
  }
  return 0;
};
