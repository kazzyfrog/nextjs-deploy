"use client";

import { svgDesign1 } from "@/utils/svg";
import { useState } from "react";
import satori from "satori";

type Props = {
  user: string;
};

const Svg = (props: Props) => {
  const [svg, setSvg] = useState<undefined | string>(undefined);
  const [msg, setMsg] = useState<string>("Hello World!");

  const element = svgDesign1({ user: props.user, msg: msg });
  const handleClick = () => {
    (async () => {
      const fontData = await fetch(
        "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf"
      ).then((resp) => resp.arrayBuffer());

      const svg = await satori(
        // 第一引数に SVG に変換したい要素を渡す
        element,
        // 第二引数に幅、高さ、フォントなどのオプションを指定する
        {
          width: 600,
          height: 400,
          fonts: [
            {
              name: "Roboto",
              data: fontData,
              weight: 400,
              style: "normal",
            },
          ],
        }
      );
      setSvg(svg);
    })();
  };
  return (
    <>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={() => handleClick()}>click</button>
      {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
    </>
  );
};

export default Svg;
