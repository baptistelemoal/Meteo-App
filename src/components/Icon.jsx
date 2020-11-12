import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const IconContainer = styled.img`
    width: 50px;
    height: 50px;
`;

const Icon = (props) => <IconContainer {...props} />;

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Icon;
