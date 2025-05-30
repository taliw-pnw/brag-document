import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Taliw's Brag Document",
  description:
    "A curated collection of my work, projects, and proudest accomplishments. This brag document is written and maintained by Taliw — Phanuwat Phoowichai.",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;200;300;400;500;600;700&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "/og-image.png",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: "Taliw - Phanuwat Phoowichai",
      },
    ],
  ],
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      dark: "/assets/taliwhub-mini-dark.png",
      light: "/assets/taliwhub-mini-light.png",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Taliw?", link: "/introduce" },
      {
        text: "Documents",
        items: [
          {
            items: [
              { text: "2023", link: "/2023" },
              { text: "2024", link: "/2024" },
              { text: "2025", link: "/2025" },
            ],
          },
        ],
      },
    ],
    sidebar: sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/taliw-pnw" }],
    footer: {
      message: "Taliw PNW's Brag Document",
      copyright: "Copyright © 2023-present Taliw PNW",
    },
    search: {
      provider: "local",
    },
  },
});
