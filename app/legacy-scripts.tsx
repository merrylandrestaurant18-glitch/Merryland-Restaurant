"use client";

import { useEffect } from "react";

export default function LegacyScripts() {
  useEffect(() => {
    const ionicons = document.createElement("script");
    ionicons.type = "module";
    ionicons.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    document.body.appendChild(ionicons);

    const legacyIcons = document.createElement("script");
    legacyIcons.noModule = true;
    legacyIcons.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    document.body.appendChild(legacyIcons);

    const interactions = document.createElement("script");
    interactions.src = "/assets/js/script.js";
    document.body.appendChild(interactions);

    return () => {
      ionicons.remove();
      legacyIcons.remove();
      interactions.remove();
    };
  }, []);

  return null;
}