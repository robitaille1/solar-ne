require("@babel/register");

const router = require("./src/router").default;
const Sitemap = require("react-router-sitemap").default;

const paramsConfig = {
  "/blogs/:blogSlug": [
    {
      blogSlug: [
        "Other-Ways-You-Can-Be-Sustainable",
        "solar-incentives-in-maine",
        "Plug-In-Electric-Vehicle-Rebates",
        "SPNE-Makes-Solar-More-Affordable",
      ],
    },
  ],
  "/partners/:partnerSlug": [
    {
      partnerSlug: ["span", "lg-solar"],
    },
  ],
};

new Sitemap(router)
  .applyParams(paramsConfig)
  .build("https://www.solarpowernewengland.com/")
  .save("./sitemap.xml");
