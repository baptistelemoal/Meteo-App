import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
    font-weight: 300;
    font-size: inherit;
    font-family: inherit;
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
`;

const Input = (props) => <InputContainer {...props} />;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
