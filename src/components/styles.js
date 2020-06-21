import styled from "styled-components";

export const SubscribeForm = styled.div`
  position: relative;
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 12px;

  @media(min-width: 670px) {
    margin-bottom: 0;
  }

  &.left {
    @media(min-width: 670px) {
      padding-right: 6px;
    }
  }

  &.right {
    @media(min-width: 670px) {
      padding-left: 6px;
      padding-right: 12px;
    }
  }

  input {
    width: 100%;
    background: #EBEBEB;
    border: none;
    outline: none;
    font-size: 13px;
    padding: 12px;
    border-radius: 2px;
  }
`;

export const InputError = styled.div`
  position: relative;
  color: red;
  font-size: 12px;
  background: #f5f5f5;
  padding: 5px 12px;
`;

export const Button = styled.button`
  border: none;
  background: #000;
  color: #fff;
  text-align: center;
  font-weight: 500;
  outline: none;
  width: 30%;
  padding: 12px;
  border-radius: 3px;
  cursor: pointer;
  letter-spacing: 1px;
`;

export const HorizontalForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0;

  ${InputBox} {
    width: 100%;

    @media(min-width: 670px) {
      width: 35%;
    }
  }
`;

export const SuccessMessage = styled.div`
  position: relative;
  padding: 20px 0 15px 0;
  color: #14C74A;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 18px;
    height: 18px;
    verticle-align: middle;
    margin-right: 15px;
  }
`
