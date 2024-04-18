import { Metadata } from "next";
import users from "../../../test.json";

export default function UserPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Hi there 👋 I am @{params.slug}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return users.map((user) => ({
    slug: user.name,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  return {
    openGraph: {
      images: `/${params.slug}/og.png`,
    },
  };
}
