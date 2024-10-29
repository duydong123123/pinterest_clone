import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import profilePicture from "../../images/avatar-cute-vui-nhon.jpg"; // Đường dẫn tới ảnh đại diện
import LayoutSetting from '../sidebar/LayoutSetting';
import HelpIcon from '../HelpIcon';
import Footer from '../footer/Footer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Đảm bảo chiều cao tối thiểu là 100% */
`;

const Content = styled.div`
  flex: 5; /* Chiếm khoảng trống còn lại để footer luôn ở cuối */
  display: flex;
  padding: 20px;
  
`;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 70px;
   margin-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #666;
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

const ChangeButton = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #f5f5f5;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

const InputSection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 14px;
  height: 100px;
`;

const UrlPreview = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

const SettingsPage = () => {
  return (
    <PageWrapper>
      <Header />
      <HelpIcon />
      <LayoutSetting />
      <Content>
        
        <Container>
          <Title>Chỉnh sửa hồ sơ</Title>
          <SubTitle>Hãy giữ riêng tư thông tin cá nhân của bạn. Thông tin bạn thêm vào đây hiển thị cho bất kỳ ai có thể xem hồ sơ của bạn.</SubTitle>

          <AvatarSection>
            <Avatar src={profilePicture} alt="Avatar" />
            <ChangeButton>Thay đổi</ChangeButton>
          </AvatarSection>

          <InputSection>
            <Label>Tên</Label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Input type="text" value="Sin" />
              <Input type="text" value="ツ" />
            </div>
          </InputSection>

          <InputSection>
            <Label>Giới thiệu</Label>
            <TextArea placeholder="Kể câu chuyện của bạn" />
          </InputSection>

          <InputSection>
            <Label>Trang web</Label>
            <Input type="text" placeholder="Thêm liên kết để hướng lưu lượng vào website" />
          </InputSection>

          <InputSection>
            <Label>Tên người dùng</Label>
            <Input type="text" value="duydong19032002" />
            <UrlPreview>www.pinterest.com/duydong19032002</UrlPreview>
          </InputSection>

        </Container>
      </Content>
      <Footer />
    </PageWrapper>
  );
};

export default SettingsPage;
