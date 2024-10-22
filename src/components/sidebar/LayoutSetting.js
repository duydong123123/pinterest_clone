import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/Header';

const Sidebar = styled.div`
  width: 20%;
  padding-right: 20px;
  border-right: 1px solid #ddd;
  font-size: 14px;
  margin-top: 90px;
  position: fixed;
  height: 100vh;
`;

const SidebarItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  border-left: ${({ isActive }) => (isActive ? '3px solid black' : 'none')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const LayoutSetting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Kiểm tra nếu người dùng đang ở trang /settings và không ở trang con nào, chuyển hướng đến /settings/profile
    if (location.pathname === '/settings') {
      navigate('/settings/profile');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Header />
      <Sidebar>
        <SidebarItem onClick={() => navigate('/settings/profile')}>Chỉnh sửa hồ sơ</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/account')}>Quản lý tài khoản</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/display')}>Chế độ hiển thị hồ sơ</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/feed')}>Điều chỉnh bảng tin nhà của bạn</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/verified')}>Tài khoản được xác nhận</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/social')}>Quyền mạng xã hội</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/notifications')}>Thông báo</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/privacy')}>Quyền riêng tư và dữ liệu</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/security')}>Bảo mật</SidebarItem>
        <SidebarItem onClick={() => navigate('/settings/branding')}>Nội dung mang thương hiệu</SidebarItem>
      </Sidebar>
    </>
  );
};

export default LayoutSetting;
