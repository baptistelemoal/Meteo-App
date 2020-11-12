import React from "react";
import styled from "styled-components";

const SeparatorContainer = styled.hr`
    border: none;
    height: 1px;
    background-color: ${({ theme }) => theme.primary};
`;

const Separator = () => <SeparatorContainer />;

export default Separator;
