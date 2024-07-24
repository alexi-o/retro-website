import React from "react";
import { Container, NavLogo, NavItem, Navbar, Text } from "retro-react";
import PageContent from "./components/PageContent";
import TextBox from "./components/TextBox";
const App = () => {
  return (
    <div>
      <Container fluid sx={{}}>
        <TextBox />
      </Container>
    </div>
  );
};

export default App;
