import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../header/Header';  // Import header từ dự án của bạn
import LayoutSetting from '../sidebar/LayoutSetting';  // Import sidebar từ dự án của bạn

// Styled components
const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 90px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ isActive }) => (isActive ? 'black' : 'transparent')};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

const InfoBox = styled.div`
  background-color: #e6f7ff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

const InfoText = styled.div`
  font-size: 18px;
`;

const ReportPortal = () => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <>
      <LayoutSetting /> {/* Sidebar nếu có */}
      <Header /> {/* Header nếu có */}
      <Container>
        <Title>Cổng thông tin báo cáo vi phạm</Title>
        <SubTitle>
          Tìm thông tin liên quan đến bảng, nhận xét, Ghim hoặc hồ sơ vi phạm Nguyên tắc cộng đồng của chúng tôi hoặc luật sở tại. Nếu cho rằng chúng tôi đã hành động nhầm lẫn, bạn có thể gửi kháng nghị trong vòng 6 tháng kể từ khi chúng tôi thực hiện hành động.{' '}
          <a href="#">Tìm hiểu thêm</a>
        </SubTitle>

        {/* Tab Buttons */}
        <Tabs>
          <TabButton isActive={activeTab === 'account'} onClick={() => setActiveTab('account')}>
            Tài khoản của bạn
          </TabButton>
          <TabButton isActive={activeTab === 'report'} onClick={() => setActiveTab('report')}>
            Báo cáo của bạn
          </TabButton>
        </Tabs>

        {/* Info Box */}
        <InfoBox>
          <InfoIcon> ℹ️ </InfoIcon>
          <InfoText>
            Không có gì để xem ở đây! <br /> Có vẻ như bạn không có vi phạm.
          </InfoText>
        </InfoBox>
      </Container>
    </>
  );
};

export default ReportPortal;
