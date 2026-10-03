import type { Metadata } from "next";
import { getLegacyPage, LegacyPage } from "./legacy-page";

export function generateMetadata(): Metadata {
  const { title, description } = getLegacyPage("home");
  return { title, description };
}

export default function HomePage() {
  return <LegacyPage pageName="home" />;
}