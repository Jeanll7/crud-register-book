import styled from "styled-components";

export const SaleForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 830px) {
    display: contents;
  }
`;

export const InputInfoSale = styled.input`
  width: 120px;
  height: 30px;
  padding-left: 4px;
  border: none;
  border-bottom: solid 2px #ff6a00;
  outline: none;
  margin: 0 22px;
  @media (max-width: 830px) {
    width: 100%;
    margin: 0 0 22px 0;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100px;
  font-weight: 600;
  letter-spacing: 0.6px;
  height: 30px;
  background-color: #ff6a00;
  border: 1px solid #94430a;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: ease 0.3s;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 830px) {
    width: 100%;
  }
`;
