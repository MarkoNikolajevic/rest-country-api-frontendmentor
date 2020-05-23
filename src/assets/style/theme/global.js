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
  transition: all 100ms linear;
}

.navbar {
  background: ${({ theme }) => theme.elements};
}

.search-by-name {
  background: ${({ theme }) => theme.elements};
  height: ${({ theme }) => theme.inputHeight}
}

.search-by-name::placeholder {
  opacity: 1;
  color: ${({ theme }) => theme.text};
}

.search-icon {
  position: absolute;
  transform: translate(20px, 15px);
}

.search-by-region {
  background: ${({ theme }) => theme.elements};
  height: ${({ theme }) => theme.inputHeight};
}

.country-card {
  background: ${({ theme }) => theme.elements};
}
`;
