type Props = {};

const Hero = () => {
  return (
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
  );
};

export default Hero;
