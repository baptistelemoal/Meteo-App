import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
    font-weight: 700;
    font-size: 40px;
`;

const Title = ({ children }) => <TitleContainer>{children}</TitleContainer>;

Title.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Title;
