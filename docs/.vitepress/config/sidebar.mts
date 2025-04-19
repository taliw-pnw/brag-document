import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "Who is Taliw?",
    link: "/introduce",
  },
  {
    text: "2023",
    base: "/2023",
    link: "/",
    items: [
      { text: "September 2023", link: "/september" },
      { text: "November 2023", link: "/november" },
      { text: "December 2023", link: "/december" },
      { text: "End of 2023", link: "/end-of-2023" },
      { text: "More in 2023", link: "/more-in-2023" },
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
      { text: "July 2024", link: "/july" },
      { text: "August 2024", link: "/august" },
      { text: "September 2024", link: "/september" },
      { text: "November 2024", link: "/november" },
      { text: "December 2024", link: "/december" },
      { text: "More in 2024", link: "/more-in-2024" },
    ],
  },
  {
    text: "2025",
    base: "/2025",
    link: "/",
    items: [
      { text: "January 2025", link: "/january" },
      { text: "February 2025", link: "/february" },
      // { text: "March 2025", link: "/march" },
      // { text: "April 2025", link: "/april" },
      // { text: "May 2025", link: "/may" },
      // { text: "June 2025", link: "/june" },
      // { text: "July 2025", link: "/july" },
      // { text: "August 2025", link: "/august" },
      // { text: "September 2025", link: "/september" },
    ],
  },
];
