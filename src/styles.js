import styled from "styled-components";

export const Container = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 342px;
  height: 354px;
  margin-top: 11px;
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
  padding-top: 25px;
`;
export const InputLabel = styled.p`
  width: 318px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: #eeeeee;
  padding-top: 53px;
`;
export const Input = styled.input`
  width: 342px;
  height: 58px;
  border-radius: 14px;
  border: none;
  outline: none;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 10px;
  color: #ffffff;
  background: #ffffff40;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  padding: 0px, 113px, 0px, 113px;
  background: #d93856;
  width: 342px;
  height: 68px;
  margin-top: 50px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 900;
  line-height: 3px;
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
export const Order = styled.li`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 338px;
  height: 63px;
  border-radius: 14px;

  border: none;
  outline: none;

  padding-left: 10px;

  background: #ffffff40;

  p {
    font-size: 10px;
    font-weight: 300;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
  }

  button {
    margin-right: 17px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;
