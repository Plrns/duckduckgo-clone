import styled from "styled-components";

import { BiWorld } from "react-icons/bi";

export const List = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;

  margin-top: -190px;

  @media (min-width: 1440px) {
    margin-top: -320px;
  }
`;

export const Separator = styled.div`
  border-top: 0.5px solid #e5e5e5;
  width: 350px;
  margin-left: 13px;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    margin-left: 785px;
  }
`;

export const SiteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 64px;
  width: 64px;
  border-radius: 10px;

  background-color: #333;
  padding: 10px 16px;
  margin-left: 160px;

  cursor: pointer;
  &:hover {
      opacity: 0.8;
  }

  @media (min-width: 1440px) {
    margin-left: 930px;
  }
`;

export const Avatar = styled(BiWorld)`
  color: #5f6368;
  width: 32px;
  height: 32px;
`;

export const SiteTitle = styled.div`
  margin-left: 140px;
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    margin-left: 905px;
  }
`;
