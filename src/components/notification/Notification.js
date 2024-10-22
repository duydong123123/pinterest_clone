// Notification.js
import React, { useState } from 'react';
import { NotificationIcon, DropdownIcon } from "../Icons.style";
import profilePicture from "../../images/avatar-cute-vui-nhon.jpg"; // Đường dẫn đến ảnh đại diện người dùng

const Notification = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [showDropdownMenu, setShowDropdownMenu] = useState(false); // State cho menu nhỏ trong thông báo

    // Toggle thông báo
    const toggleNotification = () => {
        setShowNotification(!showNotification);
    };

    // Toggle menu nhỏ trong thông báo
    const toggleDropdownMenu = (e) => {
        e.stopPropagation();
        setShowDropdownMenu(!showDropdownMenu);
    };

    return (
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
                    <div style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign:'center' }}>
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
    );
};

export default Notification;
