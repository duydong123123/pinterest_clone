import styled from "styled-components";
// chỉnh top giữa header và body
export const PinGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, ${(props) => props.pinWidth}px);
  grid-auto-rows: 10px;
  column-gap: 1.25rem;
  justify-content: center;
  padding-top: 6em; /* Thêm khoảng cách bằng với chiều cao của MenuBar */
`;
