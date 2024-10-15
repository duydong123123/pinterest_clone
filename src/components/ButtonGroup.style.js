// ButtonGroup.style.js
import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

export const CustomButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  border: none;
  color: #333;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease,color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;
