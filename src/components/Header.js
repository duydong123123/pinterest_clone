// components/Header.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo.style";
import { Form } from "./Form.style";
import { SearchBar } from "./SearchBar.style";
import { ButtonGroup, CustomButton } from "./ButtonGroup.style";
import { NotificationIcon, MessageIcon, UserIcon, DropdownIcon, NotificationDropdown, MessageDropdown, UserDropdown, DropdownItem } from "./Icons.style";
import profilePicture from "../images/avatar-cute-vui-nhon.jpg"; // Đường dẫn đến ảnh đại diện người dùng
import logo from "../images/logo.png";


const Header = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    navigate("/user-profile");  // Điều hướng đến trang UserProfilePage
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1001, backgroundColor: '#fff' }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px", borderBottom: "1px solid #ddd" }}>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
        <ButtonGroup>
          <CustomButton onClick={() => navigate("/")}>Trang Chủ</CustomButton>
          <CustomButton onClick={() => navigate("/create")}>Tạo</CustomButton>
        </ButtonGroup>

        <Form style={{ display: "flex", alignItems: "center" }}>
          <SearchBar placeholder="Tìm kiếm" />

          <div style={{ display: "flex", alignItems: "center", marginLeft: "20px", position: "relative" }}>
            {/* Icon Thông báo */}
            <div
              onMouseEnter={() => setShowNotification(true)}
              onMouseLeave={() => setShowNotification(false)}
              style={{ position: "relative" }}
            >
              <NotificationIcon />
              {showNotification && <NotificationDropdown>Thông báo</NotificationDropdown>}
            </div>

            {/* Icon Tin nhắn */}
            <div
               onMouseEnter={() => setShowMessagePopup(true)}
               onMouseLeave={() => setShowMessagePopup(false)}
              style={{ marginLeft: "10px", position: "relative" }}
            >
              <MessageIcon />
              {showMessagePopup && <MessageDropdown>Hộp tin nhắn</MessageDropdown>}
            </div>

            {/* Icon User: Điều hướng đến trang cá nhân */}
            <div
              onClick={handleUserIconClick}
              style={{ marginLeft: "20px", cursor: 'pointer' }}
            >
              <UserIcon />
            </div>

            {/* Icon Dropdown: Hiển thị menu dropdown */}
            <div
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              style={{ marginLeft: "10px", cursor: 'pointer' }}
            >
              <DropdownIcon />
              {showUserDropdown && (
                                <UserDropdown>
                                    <DropdownItem> 
                                        <img src={profilePicture} alt="Profile" width="40" height="40" />
                                        <div>
                                            <strong>Sin ツ</strong>
                                            <br />
                                            admin2002@gmail.com
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>Thêm tài khoản</DropdownItem>
                                    <DropdownItem>Chuyển đổi thành tài khoản doanh...</DropdownItem>
                                    <DropdownItem>Cài đặt</DropdownItem>
                                    <DropdownItem>Bộ điều chỉnh bảng tin nhà</DropdownItem>
                                    <DropdownItem>Cài đặt ứng dụng Windows</DropdownItem>
                                    <DropdownItem>Cổng thông tin báo cáo vi phạm</DropdownItem>
                                    <DropdownItem>Quyền riêng tư của bạn</DropdownItem>
                                    <DropdownItem>Trung tâm trợ giúp</DropdownItem>
                                    <DropdownItem>Điều khoản Dịch vụ</DropdownItem>
                                    <DropdownItem>Chính sách quyền riêng tư</DropdownItem>
                                    <DropdownItem>Làm người thử nghiệm beta</DropdownItem>
                                    <DropdownItem>Đăng xuất</DropdownItem>
                                </UserDropdown>
                            )}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Header;
