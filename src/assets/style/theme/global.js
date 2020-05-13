import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 200ms ease-in-out;
}

.navbar {
  background: ${({ theme }) => theme.elements}
}

.country-card {
  background: ${({ theme }) => theme.elements}
}
`;
