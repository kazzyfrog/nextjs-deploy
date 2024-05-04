type Props = {
  user: string;
};

const Anime = () => {
  return (
    <>
      {/* <div className=" h-screen m-auto overflow-hidden relative w-screen">
        <div className="flex h-screen m-auto relative w-screen"> */}
      {/* <div
            className={`absolute flex items-center justify-center text-7xl ${" animate-[horizontal_4s_ease-in-out_infinite_alternate_both] left-[calc(100vh_/_13/_-1)] top-[calc(100vh_/1/_13_*_0.5)]"}`}
          >
            🥺
          </div> */}
      <div className="relative ">
        <AnimatedText animationDuration={4} animationDelay={0.5} emoji="🐸" />

        <div
          className={`absolute hover:text-9xl flex items-center justify-center text-7xl ${" animate-[horizontal_5.5s_ease-in-out_infinite_alternate_both] left-[calc(100vh_/_13/_-1)] top-[calc(100vh_/1/_13_*_2.5)]"}`}
        >
          😎
        </div>
        <div
          className={`absolute flex items-center justify-center text-7xl ${" animate-[horizontal_6s_ease-in-out_infinite_alternate_both] left-[calc(100vh_/_13/_-1)] top-[calc(100vh_/1/_13_*_4.5)]"}`}
        >
          🌵
        </div>
        <div
          className={`absolute flex items-center justify-center text-7xl ${" animate-[vertical_6s_ease-in-out_infinite_alternate_both] left-[calc(100vw_/_13_*_1)] top-[calc(100vh_/_13_/_-1)]"}`}
        >
          🥰
        </div>
        <div
          className={`absolute flex items-center justify-center text-7xl ${" animate-[vertical_6.5s_ease-in-out_infinite_alternate_both] left-[calc(100vw_/_13_*_3)] top-[calc(100vh_/_13_/_-1)]"}`}
        >
          😍
        </div>
        <div
          className={`absolute flex items-center justify-center text-7xl ${" animate-[vertical_7s_ease-in-out_infinite_alternate_both] left-[calc(100vw_/_13_*_5)] top-[calc(100vh_/_13_/_-1)]"}`}
        >
          🥺
        </div>
        {/* <AnimationReact /> */}
      </div>
      {/* </div>
      </div> */}
      {/* <p className="animate-bounce text-7xl">😈</p>
      <p className="animate-pulse text-7xl">😎</p>
      <p className="animate-pulse text-7xl">😊</p>
      <p className="animate-spin text-7xl">😍</p>
      <p className="animate-[squeeze_0.6s_ease-in-out_infinite] text-7xl">😊</p> */}
    </>
  );
};

export default Anime;

// const AnimatedText = ({ animationDuration, animationDelay, emoji }: any) => {
//   const animationClass = `animate-[horizontal_${animationDuration}s_ease-in-out_infinite_alternate_both]`;

//   return (
//     <div
//       className={`absolute flex items-center justify-center text-7xl ${animationClass} left-[calc(100vh_/_13/_-1)] top-[calc(100vh_/1/_13_*_${animationDelay})]`}
//     >
//       {emoji}
//     </div>
//   );
// };

const AnimatedText = ({ animationDuration, animationDelay, emoji }: any) => {
  const animationClass = `animate-[horizontal_${animationDuration}s_ease-in-out_infinite_alternate_both]`;

  return (
    <>
      {/* <div
        className={`absolute flex items-center justify-center text-7xl ${animationClass} left-[calc(100vh_/_13/_-1)] top-[calc(100vh_/1/_13_*_${animationDelay})]`}
      >
        {emoji}
      </div> */}
      <div
        className={`absolute w-20 h-20 rounded-full bg-transparent group cursor-pointer [perspective:1000px] flex items-center justify-center text-7xl ${animationClass} left-[calc(100vh_/_13/_-1)] top-[calc(100vh_/1/_13_*_${animationDelay})]`}
      >
        <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
          <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full">
            <div className="flex flex-col items-center text-7xl justify-center h-full w-full gap-0.5">
              {emoji}
            </div>
          </div>
          <div className="absolute w-full h-full rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] border-4 border-yellow-500 shadow-xl">
            <img
              src="https://github.com/kazzyfrog.png"
              //   src="https://www.tailwindtap.com/assets/components/team-member/ceo.jpg"
              alt=""
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const AnimationReact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FBFCFF]">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="w-36 h-36 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
          <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
            <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full">
              <div className="flex flex-col items-center text-8xl justify-center h-full w-full gap-0.5">
                🥺
              </div>
            </div>
            <div className="absolute w-full h-full rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] border-4 border-yellow-500 shadow-xl">
              <img
                src="https://www.tailwindtap.com/assets/components/team-member/ceo.jpg"
                alt=""
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="w-40 h-40 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
          <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
            <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full border-4 border-green-500">
              <img
                src="https://www.tailwindtap.com/assets/advocate/customer_one.svg"
                alt=""
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <div className="absolute w-full h-full border-2 rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-green-500 shadow-xl">
              <div className="flex flex-col items-center justify-center h-full w-full gap-2">
                <h1 className="text-2xl">Online</h1>
                <h1 className="text-xl text-white font-medium">JOHN DOE</h1>
                <div className="flex gap-3 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-black fill-white text-white h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.18085 5.42656C1.49757 4.97411 2.1211 4.86408 2.57355 5.18079L12.0001 11.7794L21.4266 5.18079C21.8791 4.86408 22.5026 4.97411 22.8193 5.42656C23.136 5.87901 23.026 6.50254 22.5735 6.81926L12.5735 13.8193C12.2292 14.0603 11.7709 14.0603 11.4266 13.8193L1.42662 6.81926C0.974174 6.50254 0.864139 5.87901 1.18085 5.42656Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    className="hover:fill-black fill-white text-white h-6 w-6"
                  >
                    <path d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="hover:fill-black hover:text-black fill-white text-white h-6 w-6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 10h3m3 0h-3m0 0V7m0 3v3M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="absolute top-1.5 right-4 z-40 w-5 h-5 rounded-full bg-green-500 ring-2 ring-gray-50" />
            <span className="absolute top-1.5 right-4 z-40 w-5 h-5 rounded-full bg-green-500 animate-ping" />
          </div>
        </div>
        <div className="w-48 h-48 rounded-full bg-transparent group cursor-pointer [perspective:1000px]">
          <div className="relative [transform-style:preserve-3d] rounded-full group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
            <div className="absolute [backface-visibility:hidden] rounded-full w-full h-full border-4 border-red-500">
              <img
                src="https://www.tailwindtap.com/assets/components/animation/user.png"
                alt=""
                className="w-full h-full rounded-full object-cover object-right"
              />
            </div>
            <div className="absolute w-full h-full border-2 rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-red-500">
              <div className="flex flex-col items-center justify-center h-full w-full gap-3">
                <h1 className="text-2xl">Absent</h1>
                <h1 className="text-xl text-white font-medium">JOHN DOE</h1>
                <div className="flex gap-5 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-black fill-white text-white h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.18085 5.42656C1.49757 4.97411 2.1211 4.86408 2.57355 5.18079L12.0001 11.7794L21.4266 5.18079C21.8791 4.86408 22.5026 4.97411 22.8193 5.42656C23.136 5.87901 23.026 6.50254 22.5735 6.81926L12.5735 13.8193C12.2292 14.0603 11.7709 14.0603 11.4266 13.8193L1.42662 6.81926C0.974174 6.50254 0.864139 5.87901 1.18085 5.42656Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    className="hover:fill-black fill-white text-white h-6 w-6"
                  >
                    <path d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="hover:fill-black hover:text-black fill-white text-white h-6 w-6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 10h3m3 0h-3m0 0V7m0 3v3M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="absolute top-1.5 right-4 z-40 w-7 h-7 rounded-full bg-red-500 ring-2 ring-gray-50" />
            <span className="absolute top-1.5 right-4 z-40 w-7 h-7 rounded-full bg-red-500 animate-ping" />
          </div>
        </div>
      </div>
    </div>
  );
};
