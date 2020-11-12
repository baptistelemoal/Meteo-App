import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import actions from "../store/action";
import LoadingAnimation from "./LoadingAnimation";
import PropTypes from "prop-types";
import Spacer from "./Spacer";
import styled from "styled-components";
import Center from "./Center";
import Separator from "./Separator";

const ContainerStyle = styled.div`
    padding: 50px 8%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    footer {
        cursor: pointer;
    }
`;

const mapState = (state) => ({ lang: state.lang, loading: state.loading });

const Container = ({ children }) => {
    const { lang, loading } = useSelector(mapState);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const onChangeLang = () => {
        if (lang === "fr") {
            i18n.changeLanguage("en");
            dispatch({ type: actions.SET_LANGUAGE, value: "en" });
            return;
        }

        i18n.changeLanguage("fr");
        dispatch({ type: actions.SET_LANGUAGE, value: "fr" });
    };

    return (
        <Fragment>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <ContainerStyle>
                    {children}
                    <Spacer spaceTop={30} spaceBottom={30}>
                        <Separator />
                    </Spacer>
                    <Center>
                        <footer onClick={onChangeLang}>{lang === "fr" ? t("app.english_version") : t("app.french_version")}</footer>
                    </Center>
                </ContainerStyle>
            )}
        </Fragment>
    );
};

Container.propTypes = { children: PropTypes.any.isRequired };

export default Container;
