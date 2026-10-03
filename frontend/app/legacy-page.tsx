import { readFileSync } from "node:fs";
import { join } from "node:path";

const pages = {
  home: "index.html",
  menu: "menu.html",
  "food-menu": "food-menu.html",
  chefs: "chefs.html",
  contact: "contact.html",
} as const;

export type LegacyPageName = keyof typeof pages;

export function getLegacyPage(pageName: LegacyPageName) {
  const html = readFileSync(join(process.cwd(), pages[pageName]), "utf8");
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1])
    .join("\n");
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "Merry Land Restaurant";
  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? "";
  const markup = body
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replaceAll("./assets/", "/assets/")
    .replace(/href="(?:\.\/)?(index|food-menu|menu|chefs|contact)\.html(#[^"]*)?"/g, (_match, route: string, hash = "") => {
      const pathname = route === "index" ? "/" : `/${route}`;
      return `href="${pathname}${hash}"`;
    });

  return { title, description, markup, styles };
}

export function LegacyPage({ pageName }: { pageName: LegacyPageName }) {
  const { markup, styles } = getLegacyPage(pageName);

  return (
    <>
      {styles && <style dangerouslySetInnerHTML={{ __html: styles }} />}
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  );
}