import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const CenterContainer = styled.div`
    text-align: center;
`;

const Center = ({ children }) => <CenterContainer>{children}</CenterContainer>;

Center.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Center;
