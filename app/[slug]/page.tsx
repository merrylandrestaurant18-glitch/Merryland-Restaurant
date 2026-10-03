import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegacyPage, LegacyPage, type LegacyPageName } from "../legacy-page";

const routes: Record<string, LegacyPageName> = {
  menu: "menu",
  "food-menu": "food-menu",
  chefs: "chefs",
  contact: "contact",
};

export function generateStaticParams() {
  return Object.keys(routes).map((slug) => ({ slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageName = routes[slug];
  if (!pageName) return {};

  const { title, description } = getLegacyPage(pageName);
  return { title, description };
}

export default async function SitePage({ params }: PageProps) {
  const { slug } = await params;
  const pageName = routes[slug];
  if (!pageName) notFound();

  return <LegacyPage pageName={pageName} />;
}