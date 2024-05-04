import Image from "next/image";

import { basePath } from "../../next.config.js";
import { ReactNode } from "react";
import Anime from "@/components/anime";
const BASE_PATH = basePath || "";

const mainColor: string = "#ddcfb1";

type rgb = {
  [k: string]: number;
};

const hexToRgb = (color = "000", transparency = 1) => {
  const rgbValues = Object.fromEntries(
    (
      (color.match(/^#?[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/) ? color : "000")
        .replace(/^#?(.*)$/, (_, hex) =>
          hex.length == 3 ? hex.replace(/./g, "$&$&") : hex,
        )
        .match(/../g) ?? []
    ).map((c, i) => ["rgb".charAt(i), parseInt("0x" + c)]),
  );

  return `rgb(${rgbValues.r} ${rgbValues.g} ${rgbValues.b} / ${transparency})`;
};

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 border-gray-200 border-y px-4 py-3">
        <p className="text-center text-sm font-medium">
          このプロジェクトが気に入りましたか？
          <a href="#" className="inline-block underline">
            GitHubからスターを付けてください 🤩
          </a>
        </p>
      </div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-24 ">
          <div className="mx-auto">
            <h1 className="text-3xl pt-4 font-extrabold sm:text-6xl">
              オープンソース
              <span className="font-extrabold text-red-600">プロジェクト</span>
              <br />
              に参加しよう
            </h1>
            <p className="mt-16 sm:text-xl/relaxed">
              日本語のチュートリアルでGitHubの使い方を学び、
              <br />
              共同開発を体験しましょう。思ったより簡単です。
            </p>
            <div className="mt-16 flex flex-wrap gap-4">
              <a
                className="block w-full rounded-full bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                GitHub
              </a>
              <a
                className="block w-full rounded-full px-12 py-3 text-sm font-medium text-red-600 border border-zinc-800 hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* 動的なカラーを、既存のグラデーションに追加する
      <main className=" bg-gradient-to-b from-red-200 via-amber-400 to-purple-500"> */}

      <main
        className="bg-gradient-to-b from-[var(--background-start-rgb)] via-[var(--background-middle-rgb)] to-[var(--background-end-rgb)]"
        style={
          {
            "--background-start-rgb": hexToRgb(mainColor, 0.1),
            "--background-middle-rgb": hexToRgb(mainColor, 0.5),
            "--background-end-rgb": hexToRgb(mainColor),
          } as React.CSSProperties
        }
      >
        <div className=" top-0">
          <div className=" inset-0">
            <SvgComponent />
          </div>
        </div>
        <Anime />

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-center">
          <div className="relative">
            <Content
              label="concept"
              headline="実際の共同作業で、GitHubに慣れる"
            >
              Git/ GitHubは、一人では学びづらいものです。 <br />
              1人で学習・開発している時は、 <br />
              バージョン管理や、適切なメッセージを書く必要性を実感しにくい。{" "}
              <br />
              <br />
              First Contributions JAは、初学者歓迎のオープンなプロジェクトです。
              <br />
              チュートリアルを通じて、実際に共同開発を体験しGitHubを学べます！
            </Content>
          </div>
        </div>
        <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative">
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 bg-white p-8">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="lg:py-16">
                <article className="space-y-4 text-gray-600">
                  <Content
                    label="Help Wanted"
                    headline="このWebサイトを、もっとPOPにしよう"
                  >
                    チュートリアルは、実際にJSONファイルに変更を加えるシンプルな作業です。{" "}
                    <br />
                    <br />
                    すると、あなたが入力した絵文字がこのサイト上に表示され、賑やかになります。
                  </Content>
                </article>
                <Button href="#" className="mt-8">
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 bg-white p-8">
              <div className="lg:py-16">
                <article className="space-y-4 text-gray-600">
                  <Content
                    label="concept"
                    headline="初めてのOSS
                    コントリビューションを体験する"
                  >
                    First Contributions
                    JAに貢献（コントリビュート）したら、コントリビューターとして、個別ページとオリジナルのLGTM画像が生成されます。
                    <br />
                    <br />
                    GitHub上のテキストコミュニケーションを、少しでも楽しいものにするために、ぜひ使ってみてください！
                  </Content>
                </article>
                <Button href="#" className="mt-8">
                  GitHub
                </Button>
              </div>
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className=""></div>
    </>
  );
}

type Props = {
  label: string;
  headline: string;
  children?: ReactNode;
};
function Content(props: Props) {
  return (
    <>
      <p className=" uppercase text-red-600">{props.label}</p>
      <h2 className="text-3xl font-bold sm:text-4xl mt-4">{props.headline}</h2>
      <p className="mt-4 text-lg text-gray-800">{props.children}</p>
    </>
  );
}

// button component
function Button(props: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <button
      className={`inline-block rounded-full bg-red-600 px-8 py-3 text-center text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 ${props.className}`}
    >
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    </button>
  );
}

function SvgComponent() {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: "#ffffff",
        width: "106%",
        height: 137,
        transform: "scaleX(-1)",
      }}
    >
      <path
        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
        opacity=".25"
      />
      <path
        d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
        opacity=".5"
      />
      <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
    </svg>
  );
}
