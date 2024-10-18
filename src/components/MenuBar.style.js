
import styled from "styled-components";

// Styled Component cho MenuBar
export const MenuBar = styled.div`
  width: 100%; /* Chiều rộng đầy đủ */
  height: 5em; /* Chiều cao của thanh MenuBar */
  padding: 0.75em; /* Khoảng đệm */
  display: flex; /* Định dạng flex để bố trí các thành phần */
  flex-direction: row; /* Xếp theo hàng ngang */
  align-items: center; /* Canh giữa các thành phần theo chiều dọc */
  position: fixed; /* Cố định trên đầu trang */
  top: 0; /* Căn trên cùng của trang */
  left: 0; /* Căn trái của trang */
  right: 0; /* Căn phải của trang */
  background-color: white; /* Màu nền */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Đổ bóng cho thanh */
  z-index: 1000; /* Giữ thanh này ở trên cùng so với các thành phần khác */
`;



