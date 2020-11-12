import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    background-color: ${(props) => (props.variant === "initial" ? ({ theme }) => theme.primary : ({ theme }) => theme.sun)};
    color: ${(props) => (props.variant === "initial" ? ({ theme }) => theme.snow : ({ theme }) => theme.primary)};
    font-size: inherit;
    font-family: inherit;
    border: none;
    width: 100%;
    padding: 16px;
    border-radius: 6px;
    cursor: pointer;
`;

const Button = ({ children, variant = "initial", type, onClick }) => (
    <ButtonContainer variant={variant} type={type} onClick={onClick}>
        {children}
    </ButtonContainer>
);

Button.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["initial", "outlined"]),
};

export default Button;
