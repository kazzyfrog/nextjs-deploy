import { Metadata } from "next";
import users from "../../../test.json";
import { basePath } from "../../../next.config";
import Svg from "@/components/svg";
const BASE_PATH = basePath || "";

export default function UserPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Hi there 👋 I am @{params.slug}</h1>
      <Svg user={params.slug} />
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
      images: `/${BASE_PATH}/${params.slug}/og.png`,
    },
  };
}
