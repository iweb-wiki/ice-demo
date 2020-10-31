import React, { useEffect } from "react";
import { Button, Table } from "antd";
import styles from "./index.module.less";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>主题切换</h2>
      <Button onClick={() => onChange("dust")}>dust</Button>
      <Button onClick={() => onChange("purple")}>purple</Button>
      <Button onClick={() => onChange("volcano")}>volcano</Button>
    </div>
  );
}

function onChange(color) {
  const theme = {
    dust: "https://preview.pro.ant.design/theme/dust.css",
    volcano: "https://preview.pro.ant.design/theme/volcano.css",
    purple: "https://preview.pro.ant.design/theme/purple.css",
  };
  const href = theme[color];
  let styleLink = document.getElementById("theme-style");
  let body = document.getElementsByTagName("body")[0];
  if (styleLink) {
    // 假如存在id为theme-style 的link标签，直接修改其href
    styleLink.href = href; // 切换 antd 组件主题
    // body.className = 'body-wrap-theme1'; // 切换自定义组件的主题
  } else {
    // 不存在的话，则新建一个
    styleLink = document.createElement("link");
    styleLink.type = "text/css";
    styleLink.rel = "stylesheet";
    styleLink.id = "theme-style";
    styleLink.href = href;
    document.body.append(styleLink);
  }
}
