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

const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PrivacySettings = () => {
  return (
    <>
      <LayoutSetting />
      <Header />
      <Container>
        <Title>Quyền riêng tư và dữ liệu</Title>
        <SubTitle>
          Quản lý dữ liệu Pinterest chia sẻ với các nhà quảng cáo và sử dụng để cải thiện quảng cáo cùng đề xuất mà chúng tôi hiển thị cho bạn.
          <LearnMore href="#">Tìm hiểu thêm</LearnMore>
        </SubTitle>

        <Section>
          <Label>Cá nhân hóa quảng cáo</Label>
          <CheckboxContainer>
            <CheckboxLabel>
              <div>Sử dụng thông tin từ các trang web bạn truy cập: Cho phép Pinterest sử dụng dữ liệu từ các trang web bạn truy cập để cải thiện quảng cáo bạn thấy trên Pinterest.</div>
              <CheckboxInput type="checkbox" checked />
            </CheckboxLabel>

            <CheckboxLabel>
              <div>Sử dụng thông tin từ đối tác: Cho phép Pinterest sử dụng thông tin từ các đối tác của chúng tôi để cải thiện quảng cáo bạn thấy.</div>
              <CheckboxInput type="checkbox" checked />
            </CheckboxLabel>

            <CheckboxLabel>
              <div>Quảng cáo về Pinterest: Cho phép Pinterest sử dụng hoạt động của bạn để cải thiện quảng cáo về Pinterest mà bạn nhìn thấy trên các trang web hoặc ứng dụng khác.</div>
              <CheckboxInput type="checkbox" checked />
            </CheckboxLabel>

            <CheckboxLabel>
              <div>Hoạt động đo lường và báo cáo quảng cáo: Cho phép Pinterest chia sẻ hoạt động của bạn để báo cáo hiệu suất quảng cáo.</div>
              <CheckboxInput type="checkbox" checked />
            </CheckboxLabel>

            <CheckboxLabel>
              <div>Chia sẻ thông tin với đối tác: Cho phép Pinterest chia sẻ thông tin của bạn với các đối tác để cải thiện quảng cáo.</div>
              <CheckboxInput type="checkbox" checked />
            </CheckboxLabel>
          </CheckboxContainer>
        </Section>

        <Section>
          <Label>Xóa dữ liệu và tài khoản của bạn</Label>
          <ButtonContainer>
            <ActionButton>Xóa dữ liệu</ActionButton>
          </ButtonContainer>
        </Section>

        <Section>
          <Label>Yêu cầu dữ liệu của bạn</Label>
          <ButtonContainer>
            <ActionButton>Bắt đầu yêu cầu</ActionButton>
          </ButtonContainer>
        </Section>

        <BottomButtons>
          <ActionButton>Thiết lập lại</ActionButton>
          <SaveButton>Lưu</SaveButton>
        </BottomButtons>
      </Container>
    </>
  );
};

export default PrivacySettings;
