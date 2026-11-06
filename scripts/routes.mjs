/* The route table the prerender step works from. */
const origin = "https://rent.dawidolko.pl";

export const site = {
  origin,
  name: "Rent App",
  locale: "en_US",
  image: "/og-image.jpg",
  imageAlt: "Rent App website with apartment listings",
  outDir: "dist",
  rootId: "app",
  heroSelector: ".slider__image",
};

export const routes = [
  {
    path: "/",
    title: "Rent App | Apartment and Flat Rental Listings",
    description:
      "Rent App is a demo rental website: browse apartment and flat listings, filter by price and area, and compare projects. Built with Vue.js.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Rent App",
        url: `${origin}/`,
        description: "Demo website for browsing apartment and flat rental listings.",
        author: { "@type": "Person", name: "Dawid Olko", url: "https://dawidolko.pl" },
      },
    ],
  },
];

export const notFound = null;
