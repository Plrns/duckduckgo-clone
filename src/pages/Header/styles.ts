import styled from "styled-components";

import { SiDuckduckgo } from "react-icons/si";
import { FiSearch } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const DuckLogo = styled(SiDuckduckgo)`
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  margin-bottom: 5px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  input {
    background: #333333;
    outline: 0;
    border-radius: 4px;
    height: 2.8em;
    margin-top: 40px;
    width: 350px;
    padding-left: 16px;
  }
`;

export const SearchLogo = styled(FiSearch)`
  color: #999;

  width: 20px;
  height: 20px;

  position: absolute;
  right: 25px;
  bottom: 235px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    right: 240px;
    bottom: 373px;
  }

  @media (min-width: 1440px) {
    right: 795px;
    bottom: 370px;
  }
`;
