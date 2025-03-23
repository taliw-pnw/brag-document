import { defineConfig } from "vitepress";

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
      { text: "Examples", link: "/markdown-examples" },
      { text: "2023", link: "/2023" },
    ],

    sidebar: [
      {
        text: "2023",
        base: "/2023",
        link: "/",
        items: [
          { text: "September 2023", link: "/september" },
          { text: "November 2023", link: "/november"},
          { text: "December 2023", link: "/december"},
          { text: "End of 2023", link: "/end-of-2023"},
          { text: "More in 2023", link: "/more-in-2023" }
        ],
      },
      {
        text: "2024",
        base: "/2024",
        link: "/",
        items: [
          { text: "January 2024", link: "/january" },
          { text: "February 2024", link: "/february" },
          { text: "April 2024", link: "/april" },
          { text: "August 2024", link: "/august" },
          { text: "September 2024", link: "/september" },
          { text: "More in 2024", link: "/more-in-2024" }
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/taliw-pnw" }],
  },
});
