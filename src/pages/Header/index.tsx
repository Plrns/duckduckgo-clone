import React from "react";

import { Container, DuckLogo, SearchForm, SearchLogo } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <DuckLogo />
      <h1>DuckDuckGo</h1>

      <SearchForm>
        <input />
        <SearchLogo />
      </SearchForm>
    </Container>
  );
};

export default Header;
