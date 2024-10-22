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
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 0;
`;

const SectionContent = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;

const DropdownIcon = styled.span`
  transform: ${({ isVisible }) => (isVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
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
    background-color: #4caf50;
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

const NotificationSettings = () => {
  const [sectionsVisibility, setSectionsVisibility] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  const toggleVisibility = (section) => {
    setSectionsVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <LayoutSetting />
      <Header />
      <Container>
        <Title>Thông báo</Title>
        <SubTitle>
          Chúng tôi sẽ luôn thông báo về các thay đổi quan trọng, nhưng bạn có thể lựa chọn những nội dung khác mà bạn muốn biết.
          <a href="#"> Tìm hiểu thêm</a>
        </SubTitle>

        {/* Ghim bạn đã xuất bản */}
        <Section>
          <SectionHeader onClick={() => toggleVisibility('section1')}>
            Ghim bạn đã xuất bản
            <DropdownIcon isVisible={sectionsVisibility.section1}>⌄</DropdownIcon>
          </SectionHeader>
          <SectionContent isVisible={sectionsVisibility.section1}>
            <p>Bình luận</p>
            <p>Nhận thông báo khi ai đó bình luận về Ghim bạn đã tạo</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>
            <SwitchContainer>
              <span>Trong ứng dụng</span>
              <Switch />
            </SwitchContainer>

            <p>Lượt phản ứng</p>
            <p>Nhận thông báo khi ai đó phản ứng với Ghim bạn đã tạo</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>

            <p>Lượt lưu</p>
            <p>Nhận thông báo khi ai đó lưu Ghim bạn đã tạo</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>

            <p>Lượt xem và lượt hiển thị</p>
            <p>Nhận thông báo khi Ghim bạn tạo nhận được rất nhiều lượt xem</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>

            <p>Ảnh ghép</p>
            <p>Nhận thông báo khi ai đó tạo ảnh ghép bằng mẫu bạn đã tạo</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>
          </SectionContent>
        </Section>

        {/* Ghim bạn đã lưu */}
        <Section>
          <SectionHeader onClick={() => toggleVisibility('section2')}>
            Ghim bạn đã lưu
            <DropdownIcon isVisible={sectionsVisibility.section2}>⌄</DropdownIcon>
          </SectionHeader>
          <SectionContent isVisible={sectionsVisibility.section2}>
            <p>Bình luận</p>
            <p>Nhận thông báo khi ai đó thích, trả lời hoặc phản ứng với bình luận của bạn</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>

            <p>Lượt đề cập</p>
            <p>Nhận thông báo khi ai đó đề cập đến bạn trong bình luận</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>

            <p>Bình luận có ảnh</p>
            <p>Nhận thông báo khi ai đó đã thử một Ghim bạn đã tạo</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>
          </SectionContent>
        </Section>

        {/* Hoạt động từ người tạo */}
        <Section>
          <SectionHeader onClick={() => toggleVisibility('section3')}>
            Ghim mới từ những người tạo mà bạn theo dõi
            <DropdownIcon isVisible={sectionsVisibility.section3}>⌄</DropdownIcon>
          </SectionHeader>
          <SectionContent isVisible={sectionsVisibility.section3}>
            <p>Nhận thông báo khi người tạo mà bạn theo dõi đăng Ghim mới</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>
            <SwitchContainer>
              <span>Trong ứng dụng</span>
              <Switch />
            </SwitchContainer>
          </SectionContent>
        </Section>

        <Section>
          <SectionHeader onClick={() => toggleVisibility('section4')}>
            Ghim mới từ những người tạo mà bạn có thể thích
            <DropdownIcon isVisible={sectionsVisibility.section4}>⌄</DropdownIcon>
          </SectionHeader>
          <SectionContent isVisible={sectionsVisibility.section4}>
            <p>Tìm hiểu về Ghim mới từ những người tạo được đề xuất</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>
            <SwitchContainer>
              <span>Trong ứng dụng</span>
              <Switch />
            </SwitchContainer>
          </SectionContent>
        </Section>

        {/* Bảng và tìm kiếm */}
        <Section>
          <SectionHeader onClick={() => toggleVisibility('section5')}>
            Bảng bạn có thể thích
            <DropdownIcon isVisible={sectionsVisibility.section5}>⌄</DropdownIcon>
          </SectionHeader>
          <SectionContent isVisible={sectionsVisibility.section5}>
            <p>Nhận đề xuất bảng</p>
            <SwitchContainer>
              <span>Đẩy</span>
              <Switch />
            </SwitchContainer>
          </SectionContent>
        </Section>
      </Container>
    </>
  );
};

export default NotificationSettings;
