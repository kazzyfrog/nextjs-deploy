import { Noto_Emoji } from "next/font/google";

const emoji = Noto_Emoji({
  weight: "300",
  subsets: ["emoji"],
});

type contributors = {
  name: string;
  github: string;
  favoriteStack: string;
  favoriteColor: string;
  favoriteEmoji: string;
}[];

type P = {
  contributors: contributors;
  isTopSction?: boolean;
};

const Anime = ({ contributors, isTopSction }: P) => {
  return (
    <>
      <div className={`relative ${emoji.className}`}>
        {contributors.map((contributor, index) => (
          <EmojiComponent
            key={index}
            index={index}
            contributor={contributor}
            isTopSction={isTopSction}
          />
        ))}
      </div>
    </>
  );
};

export default Anime;

type Props = {
  index: number;
  contributor: contributors[number];
  size?: "small" | "medium" | "large";
  isTopSction?: boolean;
};

const getAnimationDirection = (index: number) =>
  (index + 1) % 2 === 0 ? "vertical" : "horizontal";
const getAnimationAlternate = (index: number) =>
  index < 5 ? "alternate-reverse" : "alternate";

const getEmojiSize = (size: Props["size"]) => {
  switch (size) {
    case "small":
      return "text-xl";
    case "medium":
      return "text-7xl";
    case "large":
      return "text-9xl";
  }
};

const getAnimationStyles = (
  index: number,
  animationDirection: string,
  speed: number,
) => {
  // const animationDirection = (index: number) =>
  //   index < 5 ? "horizontal" : "vertical";
  const isHorizontal = animationDirection === "horizontal";
  const alternate = getAnimationAlternate(index);
  const left = isHorizontal ? 0 : `calc(100vw / 10 * ${index})`;
  const top = isHorizontal ? `calc(80vh / 10 * ${index})` : 0;

  return {
    animation: `${animationDirection} ${speed}s ease-in-out infinite ${alternate} both`,
    left,
    top,
  };
};

const EmojiComponent = ({ index, contributor, isTopSction = false }: Props) => {
  const animationDirection = getAnimationDirection(index);
  const speed = Math.floor(Math.random() * 65 + 35) / 10;
  const styles = getAnimationStyles(index, animationDirection, speed);
  // isTopSctionかつ、indexが０の場合、絵文字サイズを大きくする
  const emojiSize = getEmojiSize(
    isTopSction && index === 0 ? "large" : "medium",
  );

  return (
    <>
      {/* tailwind のclassをCSSに含める */}
      <div className="animate-[horizontal_3s_ease-in-out_infinite_alternate_both] hidden">
        horizontal
      </div>
      <div className="animate-[vertical_3s_ease-in-out_infinite_alternate_both] hidden">
        vertical
      </div>

      <div
        className={` absolute w-20 h-20 rounded-full bg-transparent group cursor-pointer [perspective:1000px] flex items-center justify-center`}
        style={styles as React.CSSProperties}
      >
        <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
          <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full">
            <div
              className={`flex flex-col items-center text-black justify-center h-full w-full gap-0.5 ${emojiSize}`}
            >
              {contributor.favoriteEmoji}
            </div>
          </div>
          <div
            style={{ borderColor: contributor.favoriteColor }}
            className="absolute w-full h-full rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] border-4 shadow-xl"
          >
            <img
              src={`${contributor.github}.png`}
              loading="lazy"
              alt="contributor's icon"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </>
  );
};
