import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import LayoutSetting from '../sidebar/LayoutSetting';

const PageWrapper = styled.div`
  display: flex; /* Dùng flexbox để chia layout */
  width: 100%; /* Đảm bảo tổng chiều rộng không vượt quá 100% */
`;

const SidebarWrapper = styled.div`
  width: 20%; /* Sidebar chiếm 20% không gian */
  min-width: 350px; /* Đặt chiều rộng tối thiểu cho sidebar */
  position: fixed; /* Đặt sidebar ở vị trí cố định */
`;

const Container = styled.div`
  width: 70%; /* Nội dung chiếm 70% không gian */
  margin-left: 22%; /* Đẩy nội dung sang phải, tránh lấn vào sidebar */
  padding-top: 90px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const LearnMore = styled.a`
  font-size: 14px;
  color: #0073e6;
  cursor: pointer;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Switch = styled.input.attrs({ type: 'checkbox' })`
  width: 40px;
  height: 20px;
  border-radius: 50px;
  background-color: #ccc;
  appearance: none;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:checked {
    background-color: #333;
  }

  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: 0.3s;
  }

  &:checked:before {
    transform: translateX(20px);
  }
`;

const ProfileVisibilityPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <SidebarWrapper>
          <LayoutSetting /> {/* Sidebar */}
        </SidebarWrapper>
        <Container>
          <Title>Chế độ hiển thị hồ sơ</Title>
          <SubTitle>Quản lý cách hồ sơ của bạn hiển thị trên và ngoài Pinterest.</SubTitle>

          {/* Hồ sơ riêng tư */}
          <Section>
            <SwitchContainer>
              <div>
                <Label>Hồ sơ riêng tư</Label>
                <Description>
                  Khi hồ sơ của bạn ở chế độ riêng tư, chỉ những người bạn chấp thuận mới có thể xem hồ sơ, Ghim, bảng, người theo dõi và danh sách theo dõi của bạn.{' '}
                  <LearnMore>Tìm hiểu thêm</LearnMore>
                </Description>
              </div>
              <Switch />
            </SwitchContainer>
          </Section>

          {/* Quyền riêng tư khi tìm kiếm */}
          <Section>
            <SwitchContainer>
              <div>
                <Label>Quyền riêng tư khi tìm kiếm</Label>
                <Description>
                  Ẩn hồ sơ và bảng của bạn khỏi các công cụ tìm kiếm (ví dụ: Google).{' '}
                  <LearnMore>Tìm hiểu thêm</LearnMore>
                </Description>
              </div>
              <Switch />
            </SwitchContainer>
          </Section>
        </Container>
      </PageWrapper>
    </>
  );
};

export default ProfileVisibilityPage;
