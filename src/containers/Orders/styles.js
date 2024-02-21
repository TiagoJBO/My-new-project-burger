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

export const Button = styled.button`
  width: 342px;
  height: 68px;
  padding: 0px, 113px, 0px, 113px;
  background: #ffffff24;
  width: 342px;
  height: 68px;
  margin-top: 85px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
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

  width: 342px;
  height: 101px;
  border-radius: 14px;
  flex-flow: nowrap;

  border: none;
  outline: none;

  padding-left: 10px;

  background: #ffffff40;

  p {
    width: 188px;
    height: 21px;
    margin-top: 9px;
    margin-left: -58px;

    font-size: 12px;
    font-weight: 300;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;

    color: #ffffff;
  }
  .pName {
    width: 90px;
    height: 21px;
    margin-top: 77px;
    margin-left: 27px;

    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
  }

  button {
    margin-left: 112px;
    margin-right: 43px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;
