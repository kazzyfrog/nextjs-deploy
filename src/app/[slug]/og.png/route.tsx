import { ImageResponse } from "next/og";
import users from "../../../../test.json";

import fs from "fs/promises";
import path from "path";

const size = {
  width: 1200,
  height: 630,
};

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const user = params.slug;

  const assetsDirectory = process.cwd() + "/assets";

  const fontData = fs.readFile(path.join(assetsDirectory, "kongtext.ttf"));

  return new ImageResponse(
    (
      // ImageResponse JSX element
      //   <div
      //     style={{
      //       fontSize: 128,
      //       background: "white",
      //       width: "100%",
      //       height: "100%",
      //       display: "flex",
      //       alignItems: "center",
      //       justifyContent: "center",
      //     }}
      //   >
      //     About Acme
      //   </div>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: "black",
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            Hi there 👋 Im {user}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            lineHeight: 1.4,
          }}
        >
          Looks Good To Me.
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}

export async function generateStaticParams() {
  return users.map((user) => ({
    slug: user.name,
  }));
}
