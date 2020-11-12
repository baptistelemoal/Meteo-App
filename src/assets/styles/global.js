import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        color: ${({ theme }) => theme.primary};
    }

    a {
        color: ${({ theme }) => theme.primary};
    }
`;
