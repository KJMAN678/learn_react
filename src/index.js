import React from "react";
import ReactDOM from "react-dom";
import 'minireset.css';
import "./index.css";
import App from "./App";

const posts = [
  {
    title:
      "Next.js 9.4 Fast Refresh と Incremental Static Regeneration等のアップデート",
    date: "2020.10.23",
    url: "https://qita.com",
  },
  {
    title: "Next.js 9.3: 新世代の静的サイト生成、Built-in Saasのサポート",
    date: "2020.3.10",
    url: "https://qiita.com",
  },
  {
    title: "Serverless Next.jsをCloud Functionsにデプロイする",
    date: "2019.4.28",
    url: "https://qiita.com",
  },
];

ReactDOM.render(
  <App posts={posts} />,
  document.getElementById("root")
);
