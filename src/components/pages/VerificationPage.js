import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import LayoutSetting from '../sidebar/LayoutSetting';
import { FaInstagram, FaGlobe } from 'react-icons/fa'; // Thêm icon từ react-icons

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  flex-grow: 1;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
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

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  border: 1px solid #ccc;

  &:hover {
    background-color: #ddd;
  }
`;

const VerificationPage = () => {
  return (
    <>
      <LayoutSetting />
      <Header />
      <Container>
        <Title>Tài khoản được xác nhận</Title>
        <SubTitle>
          Khi bạn xác nhận một tài khoản, bạn có thể theo dõi số liệu phân tích và đảm bảo tên hoặc tên thương hiệu của bạn xuất hiện trên mọi Ghim được tạo từ trang web của bạn.{' '}
          <LearnMore>Tìm hiểu thêm</LearnMore>
        </SubTitle>

        {/* Trang web section */}
        <Section>
          <IconContainer>
            <Icon>
              <FaGlobe />
            </Icon>
            <TextContainer>
              <Label>Trang web</Label>
              <Description>
                Được ghi nhận là tác giả cho tất cả các Ghim liên kết đến trang web của bạn trên Pinterest.{' '}
                <LearnMore>Tìm hiểu thêm</LearnMore>
              </Description>
            </TextContainer>
          </IconContainer>
          <Button>Xác nhận</Button>
        </Section>

        {/* Instagram section */}
        <Section>
          <IconContainer>
            <Icon>
              <FaInstagram />
            </Icon>
            <TextContainer>
              <Label>Instagram</Label>
              <Description>
                Kết nối tài khoản của bạn để tự động xuất bản bài đăng trên Instagram dưới dạng Ghim.{' '}
                <LearnMore>Tìm hiểu thêm</LearnMore>
              </Description>
            </TextContainer>
          </IconContainer>
          <Button>Xác nhận</Button>
        </Section>
      </Container>
    </>
  );
};

export default VerificationPage;
