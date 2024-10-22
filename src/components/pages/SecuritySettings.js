import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import LayoutSetting from '../sidebar/LayoutSetting';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
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
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

const LearnMore = styled.a`
  font-size: 14px;
  color: #0073e6;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const SecuritySettings = () => {
  return (
    <>
      <LayoutSetting />
      <Header />
      <Container>
        <Title>Bảo mật</Title>
        <SubTitle>
          Bao gồm các bước bảo mật bổ sung như bật xác thực hai yếu tố và kiểm tra danh sách các thiết bị kết nối để đảm bảo giữ an toàn cho tài khoản của bạn. 
          <LearnMore href="#">Tìm hiểu thêm</LearnMore>
        </SubTitle>

        <Section>
          <Label>Xác thực hai yếu tố</Label>
          <CheckboxContainer>
            <CheckboxLabel>
              <div>Cần mã khi đăng nhập</div>
              <CheckboxInput type="checkbox" />
            </CheckboxLabel>
          </CheckboxContainer>
        </Section>

        <Section>
          <Label>Tùy chọn đăng nhập</Label>
          <CheckboxContainer>
            <CheckboxLabel>
              <div>Sử dụng tài khoản Facebook của bạn để đăng nhập</div>
              <CheckboxInput type="checkbox" />
            </CheckboxLabel>

            <CheckboxLabel>
              <div>Sử dụng tài khoản Google của bạn để đăng nhập</div>
              <CheckboxInput type="checkbox" checked />
            </CheckboxLabel>
          </CheckboxContainer>
        </Section>

        <Section>
          <Label>Đăng nhập ứng dụng</Label>
          <SubTitle>
            Theo dõi mọi nơi bạn đã đăng nhập bằng hồ sơ Pinterest của mình và xóa quyền truy cập khỏi các ứng dụng bạn không còn sử dụng với Pinterest. 
            <LearnMore href="#">Tìm hiểu thêm</LearnMore>
          </SubTitle>
          <SubTitle>Bạn chưa phê duyệt ứng dụng nào</SubTitle>
        </Section>

        <Section>
          <Label>Các thiết bị kết nối</Label>
          <SubTitle>
            Đây là danh sách các thiết bị đã đăng nhập vào tài khoản của bạn. Hãy thù hồi quyền truy cập bất kỳ thiết bị nào bạn không nhận ra. 
            <LearnMore href="#">Tìm hiểu thêm</LearnMore>
          </SubTitle>
          <ButtonContainer>
            <ActionButton>Hiển thị các phiên</ActionButton>
          </ButtonContainer>
        </Section>
      </Container>
    </>
  );
};

export default SecuritySettings;
