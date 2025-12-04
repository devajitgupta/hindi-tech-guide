import { TLocale } from "./i18n-config";

let customJson;
// customJson = cookies().get("customJson");
if (typeof window !== "undefined") {
   customJson = localStorage.getItem("customJson");
}

let dictionaries: any;

if (customJson) {
   dictionaries = {
      en: () =>
         import("./app/dictionaries/en.json").then((module) => module.default),
      hi: () =>
         import("./app/dictionaries/hi.json").then((module) => module.default),
   };
} else {
   dictionaries = {
      en: () =>
         import("./app/dictionaries/en.json").then((module) => module.default),
      hi: () =>
         import("./app/dictionaries/hi.json").then((module) => module.default),

   };
}

export const getDictionary = async (locale: TLocale) =>
   dictionaries[locale]?.() ?? dictionaries.en();
