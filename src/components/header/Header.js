import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { MenuBar } from "../MenuBar.style";
import { Logo } from "../Logo.style";
import { Form } from "../Form.style";
import { SearchBar } from "../SearchBar.style";
import { ButtonGroup, CustomButton } from "../ButtonGroup.style";
import { NotificationIcon, MessageIcon, UserIcon, DropdownIcon, UserDropdown, DropdownItem } from "../Icons.style";
import profilePicture from "../../images/avatar-cute-vui-nhon.jpg"; // Đường dẫn đến ảnh đại diện người dùng
import InboxPopup from '../InboxPopup.style';
// import logo from '../../images/logo.png';


const Header = () => {
    const navigate = useNavigate();
    
    // State quản lý các sự kiện của icon
    const [showNotification, setShowNotification] = useState(false);
    const [showDropdownMenu, setShowDropdownMenu] = useState(false); // State cho menu nhỏ trong thông báo
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

    // Toggle thông báo
    const toggleNotification = () => {
        setShowNotification(!showNotification);
    };

    // Toggle menu nhỏ trong thông báo
    const toggleDropdownMenu = () => {
        setShowDropdownMenu(!showDropdownMenu);
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
                        {/* Icon Thông báo */}
                        <div
                            onClick={toggleNotification} // Toggle trạng thái của menu thông báo
                            style={{ cursor: "pointer", position: "relative" }}
                        >
                            <NotificationIcon />
                            {showNotification && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        right: 0,
                                        backgroundColor: "#fff",
                                        border: "1px solid #ddd",
                                        borderRadius: "10px",
                                        width: "300px",
                                        zIndex: 1000,
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                        <strong>Cập nhật</strong>
                                    </div>
                                    <div style={{ padding: "10px", borderBottom: "1px solid #ddd", display: "flex", alignItems: "center", position: "relative" }}>
                                        {/* Hình ảnh trước thông báo */}
                                        <img src={profilePicture} alt="User Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
                                        <div>
                                            <p style={{ margin: 0 }}>Bạn tinh mắt đấy</p>
                                            <small>5 ngày trước</small>
                                        </div>
                                        {/* Icon ba chấm để mở menu */}
                                        <div
                                            onClick={toggleDropdownMenu} // Toggle menu nhỏ
                                            style={{ position: "absolute", right: "10px", cursor: "pointer" }}
                                        >
                                            <DropdownIcon />
                                            {showDropdownMenu && (
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "100%",
                                                        right: 0,
                                                        backgroundColor: "#fff",
                                                        border: "1px solid #ddd",
                                                        borderRadius: "5px",
                                                        padding: "5px 0",
                                                        zIndex: 1000,
                                                        width: "150px",
                                                    }}
                                                >
                                                    <div style={{ padding: "10px", cursor: "pointer" }}>Xóa cập nhật</div>
                                                    <div style={{ padding: "10px", cursor: "pointer" }}>Xem cài đặt thông báo</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{ padding: "10px" }}>
                                        <p>Ý tưởng nào thật sự mang phong cách của bạn? Hãy tạo Ghim đầu tiên của bạn để chia sẻ điều truyền cảm hứng cho bạn.</p>
                                        <small>1 tháng trước</small>
                                    </div>
                                </div>
                            )}
                        </div>

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
        </MenuBar>
    );
};

export default Header;
