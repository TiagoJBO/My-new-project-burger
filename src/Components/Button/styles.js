import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: ${(props) => (props.isBack ? "#ffffff24" : "#d93856")};
  margin-top: 85px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  font-size: 17px;
  font-weight: 900;
  line-height: 76px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`;
