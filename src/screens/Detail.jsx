import { useDispatch } from "react-redux";
import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import actions from "../store/action";
import Center from "../components/Center";
import Container from "../components/Container";
import Spacer from "../components/Spacer";
import Title from "../components/Title";
import useApi from "../hooks/use-api";
import Icon from "../components/Icon";

const path = process.env.PUBLIC_URL;

const Detail = () => {
    const { t } = useTranslation();
    const { city } = useParams();
    const [fetchedCity, setFetchedCity] = useState();
    const [error, setError] = useState(false);
    const api = useApi();
    const dispatch = useDispatch();

    useEffect(() => {
        api.get(`/weather?q=${city}`)
            .then((res) => setFetchedCity(res.data))
            .catch(() => setError(true))
            .finally(() => dispatch({ type: actions.SET_LOADING, value: false }));
    }, [city]);

    if (!error && !fetchedCity) {
        return null;
    }

    if (error) {
        return (
            <Container>
                <Center>
                    <div>{t("app.detail.not_found")}</div>
                    <Spacer spaceTop={16}>
                        <Link to="/">{t("app.detail.back")}</Link>
                    </Spacer>
                </Center>
            </Container>
        );
    }

    if (fetchedCity) {
        const { name, sys, weather } = fetchedCity;
        const currentWeather = weather[0];

        return (
            <Fragment>
                <Container>
                    <Center>
                        <div>
                            <Title>
                                {name} ({sys.country})
                            </Title>
                            <Spacer spaceTop={16}>
                                <div>{currentWeather.description}</div>
                                <Spacer spaceTop={16}>
                                    <Icon src={`${path}/images/weather/${currentWeather.icon}.svg`} alt="" />
                                </Spacer>
                            </Spacer>
                        </div>
                        <Spacer spaceTop={16}>
                            <Link to="/">{t("app.detail.back")}</Link>
                        </Spacer>
                    </Center>
                </Container>
            </Fragment>
        );
    }
};

export default Detail;
