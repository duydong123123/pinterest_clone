import React, { useState } from 'react';
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
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ddd;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const ModalContent = styled.div`
   background-color: white;
  padding: 20px;
  width: 500px;  /* Tăng chiều rộng */
  height: 520px;  /* Đặt chiều cao tối đa cho khung */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc; 
`;
const ContentWrapper = styled.div`
  max-height: 400px;  /* Giới hạn chiều cao vùng cuộn */
  overflow-y: auto;  /* Cuộn dọc bên trong vùng nội dung */
  padding-right: 10px;  /* Khoảng cách với viền phải để cuộn không che nội dung */
`;

const CloseButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  float: right;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalText = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 10px;
`;

const NumberedList = styled.ol`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size:20px;
`;

const RegisterButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
  font-weight: bold;
  width: 150px;
  margin-left: 150px;
`;

const BrandContent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <LayoutSetting />
      <Header />
      <Container>
        <Title>Nội dung mang thương hiệu</Title>
        <SubTitle>
          Chương trình Nội dung mang thương hiệu của Pinterest là dịch vụ kết nối người tạo với các thương hiệu để có cơ hội nhận tài trợ.
        </SubTitle>

        <Section>
          <Title>Đăng ký Nội dung mang thương hiệu</Title>
          <SubTitle>
            Chúng tôi sẽ cố gắng hết sức để kết nối bạn với các thương hiệu, nhưng việc đăng ký không đảm bảo là sẽ chốt được thỏa thuận với các thương hiệu.
          </SubTitle>
          <Button onClick={handleOpenModal}>Đăng ký</Button>
        </Section>

        {showModal && (
          <ModalBackground>
            <ModalContent>
              <CloseButton onClick={handleCloseModal}>X</CloseButton>
              <ModalTitle>Yêu cầu của chương trình Nội dung mang thương hiệu</ModalTitle>
              <ContentWrapper>  {/* Thêm ContentWrapper để cuộn nội dung */}
                    <ModalText>
                    Chương trình Nội dung mang thương hiệu của Pinterest là dịch vụ kết nối người tạo với các thương hiệu để nhận được tài trợ và nắm bắt các cơ hội khác.
                    </ModalText>
                    <ModalText>Nếu đồng ý đăng ký, bạn sẽ cho phép Pinterest chia sẻ một số thông tin về bạn và đối tượng của bạn với các nhà quảng cáo.</ModalText>
                    <NumberedList>
                    <li>Thông tin hồ sơ và tài khoản.</li>
                    <li>Thông tin về cách nội dung của bạn hoạt động.</li>
                    <li>Thông tin nhân khẩu học tổng hợp về đối tượng của bạn.</li>
                    </NumberedList>
                    <ModalText>
                    Bạn có thể chọn không tham gia chương trình này bằng cách truy cập phần Cài đặt ➤ Nội dung mang thương hiệu.
                    </ModalText>
                    <ModalText>
                    Bằng cách nhấn vào "Đăng ký", bạn đồng ý cho Pinterest chia sẻ thông tin nói trên về bạn và nội dung của bạn với các nhà quảng cáo. Việc đăng ký chương trình Nội dung mang thương hiệu không đảm bảo bạn sẽ được chọn để tham gia các cơ hội được trả phí.
                    </ModalText>
                </ContentWrapper>
              <RegisterButton onClick={handleCloseModal}>Đăng ký</RegisterButton>
            </ModalContent>
          </ModalBackground>
        )}
      </Container>
    </>
  );
};

export default BrandContent;
