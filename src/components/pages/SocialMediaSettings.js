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
  padding-bottom: 80px; /* khoảng trống để tránh che khuất */
   height: calc(100vh - 180px); /* Điều chỉnh chiều cao để chừa chỗ cho header và footer */
  overflow-y: auto; /* Tạo khu vực cuộn */
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

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
`;

const MessageSetting = styled.div`
  margin-top: 20px;
`;

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const SettingText = styled.div`
  font-size: 16px;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  border: 1px solid #ccc;

  &:hover {
    background-color: #ddd;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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

const Message = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;


const SocialMediaSettings = () => {
  return (
    <>
      <LayoutSetting />
      <Header />
      <HelpIcon />
      <Footer />
      <Container>
        <Title>Quyền mạng xã hội</Title>
        <SubTitle>
          Chọn cách người khác có thể tương tác với bạn trên Pinterest, cùng như các quyền khác dựa trên những tính năng mới nhất của chúng tôi.
        </SubTitle>

        {/* @đề_cập Section */}
        <Section>
          <Label>@đề_cập</Label>
          <RadioGroup>
            <RadioLabel>
              <RadioInput type="radio" name="mention" value="anyone" />
              Bất cứ ai trên Pinterest
            </RadioLabel>
            <RadioLabel>
              <RadioInput type="radio" name="mention" value="following" />
              Chỉ những người bạn theo dõi
            </RadioLabel>
            <RadioLabel>
              <RadioInput type="radio" name="mention" value="none" />
              Tắt (Không ai có thể @mention bạn)
            </RadioLabel>
          </RadioGroup>
        </Section>

        {/* Tin nhắn Section */}
        <MessageSetting>
          <Label>Tin nhắn</Label>
          <SettingRow>
            <SettingText>Bạn bè</SettingText>
            <EditButton>Sửa</EditButton>
          </SettingRow>
          <SettingRow>
            <SettingText>Người theo dõi</SettingText>
            <EditButton>Sửa</EditButton>
          </SettingRow>
          <SettingRow>
            <SettingText>Đang theo dõi</SettingText>
            <EditButton>Sửa</EditButton>
          </SettingRow>
          <SettingRow>
            <SettingText>Mọi người khác</SettingText>
            <EditButton>Sửa</EditButton>
          </SettingRow>
        </MessageSetting>

        {/* Tài khoản bị chặn */}
        <Section>
          <Label>Tài khoản bị chặn</Label>
          <Message>
            Lưu ý: Tài khoản bạn đã chặn trên Pinterest không thể nhắn tin cho bạn. Để bỏ chặn tài khoản, hãy chuyển đến hồ sơ của họ.
          </Message>
        </Section>

        {/* Nhận xét */}
        <Section>
          <Label>Nhận xét</Label>
          <SwitchContainer>
            <div>Cho phép nhận xét về Ghim của bạn</div>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <div>Lọc nhận xét về Ghim của tôi</div>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <div>Lọc nhận xét về Ghim của người khác</div>
            <Switch />
          </SwitchContainer>
        </Section>

        {/* Đề xuất mua sắm */}
        <Section>
          <Label>Đề xuất mua sắm</Label>
          <SwitchContainer>
            <div>Hiển thị các sản phẩm tương tự</div>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <div>Đề xuất sản phẩm có liên quan đến Ghim của bạn</div>
            <Switch />
          </SwitchContainer>
        </Section>

        {/* Tự động phát video */}
        <Section>
          <Label>Tự động phát video</Label>
          <SwitchContainer>
            <div>Tự động phát video trên máy tính</div>
            <Switch />
          </SwitchContainer>
        </Section>
      </Container>
    </>
  );
};

export default SocialMediaSettings;
