// Styles
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

const theme = {
  colors: {
    black: "#26272C",
    white: "#A8A7A9",
  },
};

const Main = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    padding: 30px;
    height: 100%;

    h1 {
      text-transform: uppercase;
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <div className="container">
          <h1>Base React</h1>
        </div>
      </Main>
    </ThemeProvider>
  );
}

export default App;
