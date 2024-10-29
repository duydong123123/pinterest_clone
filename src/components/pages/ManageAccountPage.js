import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import LayoutSetting from '../sidebar/LayoutSetting';
import HelpIcon from '../HelpIcon';
import Footer from '../footer/Footer';
const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 90px;
   margin-bottom: 100px;
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

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  border: 1px solid #ccc;
  margin-left: 10px;

  &:hover {
    background-color: #ddd;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between; /* Căn button sang bên phải */
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const TextSection = styled.div`
  flex-grow: 1;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 14px;
`;

const ManageAccountPage = () => {
  return (
    <>
      <Footer/>
      <HelpIcon />
      <LayoutSetting />
      <Header />
      <Container>
        <Title>Quản lý tài khoản</Title>
        <SubTitle>Thực hiện thay đổi đối với thông tin cá nhân hoặc loại tài khoản của bạn.</SubTitle>

        {/* Tài khoản của bạn */}
        <InputSection>
          <Label>Email (Riêng tư)</Label>
          <Input type="email" value="duydong19032002@gmail.com" readOnly />
        </InputSection>

        <InputSection>
          <Label>Mật khẩu</Label>
          <FlexRow>
            <Input type="password" value="********" readOnly />
            <Button>Thay đổi</Button>
          </FlexRow>
        </InputSection>

        <InputSection>
          <Label>Chuyển đổi thành tài khoản doanh nghiệp</Label>
          <FlexRow>
            <TextSection>
              Với tài khoản doanh nghiệp, bạn sẽ có quyền truy cập vào các công cụ chuyên nghiệp và phân tích để phát triển doanh nghiệp của bạn trên Pinterest.
            </TextSection>
            <Button>Chuyển đổi tài khoản</Button>
          </FlexRow>
        </InputSection>

        {/* Thông tin cá nhân */}
        <Title>Thông tin cá nhân</Title>
        <InputSection>
          <Label>Ngày sinh</Label>
          <Input type="date" value="2002-03-19" />
        </InputSection>

        <InputSection>
          <Label>Giới tính</Label>
          <RadioGroup>
            <RadioLabel>
              <RadioInput type="radio" name="gender" value="male" checked />
              Nam
            </RadioLabel>
            <RadioLabel>
              <RadioInput type="radio" name="gender" value="female" />
              Nữ
            </RadioLabel>
            <RadioLabel>
              <RadioInput type="radio" name="gender" value="other" />
              Khác
            </RadioLabel>
          </RadioGroup>
        </InputSection>

        <InputSection>
          <Label>Quốc gia/Khu vực</Label>
          <Select>
            <option>Việt Nam (Việt Nam)</option>
          </Select>
        </InputSection>

        <InputSection>
          <Label>Ngôn ngữ</Label>
          <Select>
            <option>Tiếng Việt</option>
          </Select>
        </InputSection>

        {/* Vô hiệu hóa và xóa */}
        <Title>Vô hiệu hóa và xóa</Title>

        <InputSection>
          <FlexRow>
            <div>
              <Label>Hủy kích hoạt tài khoản</Label>
              <p>Tạm thời ẩn hồ sơ, Ghim và bảng của bạn</p>
            </div>
            <Button>Hủy kích hoạt tài khoản</Button>
          </FlexRow>
        </InputSection>

        <InputSection>
          <FlexRow>
            <div>
              <Label>Xóa dữ liệu và tài khoản của bạn</Label>
              <p>Xóa vĩnh viễn dữ liệu của bạn và mọi thứ liên kết với tài khoản của bạn</p>
            </div>
            <Button>Xóa tài khoản</Button>
          </FlexRow>
        </InputSection>
      </Container>
    </>
  );
};

export default ManageAccountPage;
