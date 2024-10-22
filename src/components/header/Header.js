import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { MenuBar } from "../MenuBar.style";
import { Logo } from "../Logo.style";
import { Form } from "../Form.style";
import { SearchBar } from "../SearchBar.style";
import { ButtonGroup, CustomButton } from "../ButtonGroup.style";
import { MessageIcon, UserIcon, DropdownIcon, UserDropdown, DropdownItem } from "../Icons.style";
import profilePicture from "../../images/avatar-cute-vui-nhon.jpg"; // Đường dẫn đến ảnh đại diện người dùng
import InboxPopup from '../inbox/InboxPopup';
import Notification from '../notification/Notification'; // Import component Notification

const Header = () => {
    const navigate = useNavigate();
    
    const [showMessagePopup, setShowMessagePopup] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [input, setInput] = useState(""); 

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log('Tìm kiếm:', input);
    };

    const handleCreateClick = () => {
        navigate("/create");
    };

    const handleUserIconClick = () => {
        navigate("/user-profile");  
    };

    return (
        <MenuBar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1001 }}>
            <Logo>
                <img src={require('../../images/logo.png')} alt="Logo" />
            </Logo>
            <ButtonGroup>
                <CustomButton onClick={() => navigate("/")}>Trang Chủ</CustomButton>
                <CustomButton onClick={handleCreateClick}>Tạo</CustomButton>
            </ButtonGroup>
            <Form onSubmit={onFormSubmit} style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
                <SearchBar
                    placeholder="Search"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    style={{ height: "48px" }}
                />
                <div style={{ display: "flex", alignItems: "center", marginLeft: "20px", position: "relative" }}>
                    {/* Sử dụng component Notification */}
                    <Notification />
                    {/* Icon Tin nhắn */}
                    <div
                        onClick={() => setShowMessagePopup(!showMessagePopup)}
                        style={{ marginLeft: "10px", position: "relative" }}
                    >
                        <MessageIcon />
                        {showMessagePopup && <InboxPopup onClose={() => setShowMessagePopup(false)} />}
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
                                <DropdownItem onClick={() => navigate('/add-account')}>Thêm tài khoản</DropdownItem>
                                <DropdownItem onClick={() => navigate('/upgrade')}>Chuyển đổi thành tài khoản doanh...</DropdownItem>
                                <DropdownItem onClick={() => navigate('/settings')}>Cài đặt</DropdownItem>
                                <DropdownItem onClick={() => navigate('/newsfeed-settings')}>Bộ điều chỉnh bảng tin nhà</DropdownItem>
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
        </MenuBar>
    );
};

export default Header;
