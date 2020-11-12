import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { vocalLanguages } from "../services/utils";
import actions from "../store/action";
import annyang from "annyang";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import Spacer from "../components/Spacer";
import Title from "../components/Title";

const mapState = (state) => ({ lang: state.lang });

const Home = () => {
    const { lang } = useSelector(mapState);
    const { t } = useTranslation();
    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const onVocalResult = (city) => {
        setCity(city);
    };

    const onVocalSearch = () => {
        if (annyang) {
            let commands;
            const language = vocalLanguages[lang];
            annyang.setLanguage(language);
            if (language === vocalLanguages["fr"]) {
                commands = { "Ok google affiche la météo de *city": onVocalResult };
            } else if (language === vocalLanguages["en"]) {
                commands = { "Ok google displays the weather forecast for *city": onVocalResult };
            }
            annyang.addCommands(commands);
            annyang.start();
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onRedirect();
    };

    const onRedirect = () => {
        dispatch({ type: actions.SET_LOADING, value: true });
        history.push(`/weather/${city}`);
    };

    return (
        <Container>
            <form onSubmit={onSubmit}>
                <Title>{t("app.home.title")}</Title>
                <p>{t("app.home.description")}</p>
                <Spacer spaceTop={50}>
                    <Input type="text" placeholder={t("app.home.title")} value={city} onChange={(e) => setCity(e.target.value)} />
                </Spacer>
                <Spacer spaceTop={50}>
                    <Button type="submit">{t("app.home.search")}</Button>
                </Spacer>
                <Spacer spaceTop={16}>
                    <Button variant="outlined" type="button" onClick={onVocalSearch}>
                        {t("app.home.vocal")}
                    </Button>
                </Spacer>
            </form>
        </Container>
    );
};

export default Home;
