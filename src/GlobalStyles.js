import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 22px;
  margin-top: 2rem;
  gap: 10px;
`;
