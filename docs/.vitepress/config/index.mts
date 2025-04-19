import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Brag Document",
  description: "A collection of my work and accomplishments",
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
  ],
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      dark: "/assets/taliwhub-mini-dark.png",
      light: "/assets/taliwhub-mini-light.png",
    },
    nav: [
      { text: "Home", link: "/" },
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
  },
});
