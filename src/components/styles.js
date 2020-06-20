import styled from "styled-components";

export const SubscribeForm = styled.form`
  position: relative;
`;

export const InputBox = styled.div`
  position: relative;

  &.left {
    padding-right: 6px;
  }

  &.right {
    padding-left: 6px;
    padding-right: 12px;
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
  padding: 12px 0;
  ${InputBox} {
    width: 50%;
  }
`;
