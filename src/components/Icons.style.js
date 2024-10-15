// Icons.style.js
import styled from "styled-components";
import { FiBell, FiMessageSquare, FiUser, FiChevronDown } from "react-icons/fi"; // Import các icon từ react-icons

export const NotificationIcon = styled(FiBell)`
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #333;
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #333;
  }
`;

export const UserIcon = styled(FiUser)`
  font-size: 24px;
  cursor: pointer;
  color: #333;
  margin-right: 10px; /* Khoảng cách giữa icon user và mũi tên */
  &:hover {
    color: #333;
  }
`;

export const DropdownIcon = styled(FiChevronDown)`
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #333;
  }
`;

export const NotificationDropdown = styled.div`
  position: absolute;
  top: 40px;
  background-color: black;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 30px;
  width: 110px;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const MessageDropdown = styled.div`
  position: absolute;
  top: 40px;
  background-color: black;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 30px;
  width: 90px;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

// CSS cho dropdown user
export const UserDropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd; /* Đổi thành viền nhạt hơn */
  padding: 10px;
  border-radius: 12px; /* Bo góc mềm hơn */
  width: 350px;
  color: #333;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15); /* Thêm bóng mềm mại */
  z-index: 100;
  animation: fadeIn 0.3s ease-in-out; /* Hiệu ứng mờ dần khi xuất hiện */

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownItem = styled.div`
  padding: 12px 15px; /* Tăng khoảng cách padding */
  border-bottom: 1px solid #eee; /* Viền phân cách nhạt */
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease-in-out; /* Hiệu ứng chuyển đổi màu nền */
  
  &:hover {
    background-color: #f0f0f0; /* Màu nền nhẹ khi hover */
  }

  &:last-child {
    border-bottom: none; /* Loại bỏ viền cuối cùng */
  }

  & > img {
    border-radius: 50%; /* Avatar tròn */
    margin-right: 10px;
  }

  & > div {
    font-size: 14px; /* Kích thước chữ nhỏ */
  }

  strong {
    font-size: 16px;
  }
`;
