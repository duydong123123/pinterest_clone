import React, { useState } from "react";
import styled from "styled-components";
import { FiHelpCircle } from "react-icons/fi"; // Import icon chấm hỏi

// Container chính của icon
const HelpIconContainer = styled.div`
    position: fixed;
    bottom: 1px;
    right: 10px;
    font-size: 40px;
    color: #555;
    cursor: pointer;
    z-index: 1000;
    
    &:hover {
        color: #333;
    }
`;

// Tooltip hiển thị chữ "khác"
const Tooltip = styled.div`
    position: absolute;
    bottom: 50px;
    right: 0;
    padding: 5px 10px;
    background-color: #333;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s;
    ${HelpIconContainer}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;

// Menu nhỏ hiện khi nhấn vào icon
const Menu = styled.div`
    position: absolute;
    bottom: 60px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px;
    width: 200px;
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
    z-index: 1001;
`;

// Item của menu
const MenuItem = styled.div`
    padding: 8px 10px;
    font-size: 14px;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')}; /* In đậm khi cần */

    &:hover {
        background-color: #f0f0f0;
    }
`;

// Đường phân cách
const Divider = styled.hr`
    border: none;
    border-top: 1px solid #ddd;
    margin: 8px 0;
`;

const HelpIcon = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HelpIconContainer onClick={toggleMenu}>
            <FiHelpCircle />
            <Tooltip>khác</Tooltip>
            <Menu isVisible={isMenuOpen}>
                <MenuItem bold>
                    Truy cập Trung tâm Trợ giúp
                    <FiHelpCircle size={16} />
                </MenuItem>
                <MenuItem bold>
                    Tạo widget
                    <FiHelpCircle size={14} />
                </MenuItem>
                <Divider /> {/* Đường phân cách */}
                <MenuItem>Giới thiệu Báo chí</MenuItem>
                <MenuItem>Doanh nghiệp</MenuItem>
                <MenuItem>Nghề nghiệp</MenuItem>
                <MenuItem>Nhà phát triển</MenuItem>
                <MenuItem>Lượt xóa</MenuItem>
                <MenuItem>Chính sách quyền riêng tư</MenuItem>
                <MenuItem>Quảng cáo Cá nhân hóa</MenuItem>
                <MenuItem>Quyền riêng tư của bạn</MenuItem>
                <MenuItem>Từ khóa</MenuItem>
            </Menu>
        </HelpIconContainer>
    );
};

export default HelpIcon;
