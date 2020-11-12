import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";
import i18n from "i18next";
import initialState from "./store/state";

const resources = process.env.REACT_APP_AVAILABLE_LANGUAGES.split(",")
    .map((lang) => ({ [lang]: { translation: require(`./assets/messages/${lang}.json`) } }))
    .reduce((acc, val) => ({ ...acc, ...val }));

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: Cookies.get("lang") || initialState.lang,
        fallbackLng: "fr", // use "en" if detected lng is not available
        debug: false,
        react: {
            wait: true,
        },
    });

export default i18n;
