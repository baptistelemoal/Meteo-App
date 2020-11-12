import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import Title from "../components/Title";

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Title>{t("app.not_found")}</Title>
        </Container>
    );
};

export default NotFound;
