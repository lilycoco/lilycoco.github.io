/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const fs = require("fs");

const readFile = (path: string, opts = "utf8") => {
  return new Promise((res, rej) => {
    fs.readFile(path, opts, (err: any, data: any) => {
      if (err) {
        console.log(err);
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

const getBlogListsFromFs = async () => {
  const json: any = await readFile("static/blog.json");
  return JSON.parse(json);
};

const getBlogListsFromServer = async () => {
  const res = await fetch("/static/blog.json");
  return await res.json();
};

export async function getBlogLists() {
  if (typeof window !== "undefined") {
    return getBlogListsFromServer();
  } else {
    return getBlogListsFromFs();
  }
}

const getBlogContentFromFs = async (fname: string) => {
  return await readFile(`static/blog/${fname}`);
};

const getBlogContentFromServer = async (fname: string) => {
  const res = await fetch(`/static/blog/${fname}`);
  return await res.text();
};

export async function getBlogContent(fname: string) {
  if (typeof window !== "undefined") {
    return getBlogContentFromServer(fname);
  } else {
    return getBlogContentFromFs(fname);
  }
}
