import React from "react";

import { List, Separator, SiteContainer, Avatar, SiteTitle } from "./styles";

const Footer: React.FC = () => {
  const SiteItem = () => (
    <>
      <SiteContainer>
        <Avatar />
      </SiteContainer>
      <SiteTitle>Github: @Plrns</SiteTitle>
    </>
  );

  return (
    <List>
      <Separator />
      <SiteItem />
      <SiteItem />
    </List>
  );
};

export default Footer;
