import contributors from "../../dummy.json";
import { basePath } from "../../next.config.js";
import { ReactNode } from "react";
import Anime from "@/components/anime";
import Hero from "@/components/hero";
import GradientBackground from "@/components/gradient-background";
const BASE_PATH = basePath || "";

const mainColor: string = contributors[0].favoriteColor;
// const mainColor = "#000";
// const mainColor = "#ddcfb1";
// const mainColor = "#fff";

type contributors = {
  name: string;
  github: string;
  favoriteStack: string;
  favoriteColor: string;
  favoriteEmoji: string;
}[];

const groupContributorsBySection = (
  contributors: contributors,
  numSections: number,
) => {
  const contributorsToDisplay = contributors.slice(0, 10 * numSections);
  const groups = [];
  const contributorsPerSection = 10;

  for (let i = 0; i < numSections; i++) {
    const start = i * contributorsPerSection;
    const end = start + contributorsPerSection;
    const group = contributorsToDisplay.slice(start, end);
    groups.push(group);
  }

  return groups;
};

export default function Home() {
  const contributorsBySection = groupContributorsBySection(contributors, 3);
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

      <Hero />

      <GradientBackground mainColor={mainColor}>
        <Anime contributors={contributorsBySection[0]} isTopSction />
        <section className="mx-auto max-w-screen-xl h-screen">
          セクション１
        </section>

        {/* <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-center">
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
                First Contributions
                JAは、初学者歓迎のオープンなプロジェクトです。
                <br />
                チュートリアルを通じて、実際に共同開発を体験しGitHubを学べます！
              </Content>
            </div>
          </div> */}

        <Anime contributors={contributorsBySection[1]} />
        <section className="mx-auto max-w-screen-xl h-screen">
          セクション2
        </section>
        {/* <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
          </section> */}

        <Anime contributors={contributorsBySection[2]} />
        <section className="mx-auto max-w-screen-xl h-screen">
          セクション3
        </section>
        {/* <section>
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
          </section> */}
      </GradientBackground>
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
