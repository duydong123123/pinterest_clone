import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import LayoutSetting from '../sidebar/LayoutSetting';

const Container = styled.div`
  display: flex;
`;

const SidebarWrapper = styled.div`
  width: 20%;
`;

const Content = styled.div`
  width: 80%;
  padding-left: 20px;
  margin-top: 90px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const TabButtons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  background: ${({ isActive }) => (isActive ? 'black' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 100px;
`;

const Card = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CardButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
`;

const Image = styled.img`
  width: 700px;
  height: 400px; /* Giới hạn chiều cao của ảnh */
  object-fit: cover; /* Đảm bảo ảnh không bị biến dạng */
  border-radius: 10px;
  margin-bottom: 15px; /* Tạo khoảng cách giữa ảnh và nút */
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 16px;
`;

const NewsFeedSettings = () => {
  const [activeTab, setActiveTab] = useState('activity');

  return (
    <>
      <Header />
      <Container>
        <SidebarWrapper>
          <LayoutSetting /> {/* Sidebar */}
        </SidebarWrapper>
        <Content>
          <Title>Điều chỉnh bảng tin nhà của bạn</Title>
          <SubTitle>
            Khiến Pinterest trở nên cá nhân hóa cho bạn. Chỉnh sửa chi tiết mà Pinterest sử dụng để đề xuất ý tưởng cho bạn.
            Các chi tiết này sẽ không hiện thị công khai.
          </SubTitle>

          {/* Tab Buttons */}
          <TabButtons>
            <TabButton isActive={activeTab === 'activity'} onClick={() => setActiveTab('activity')}>
              Hoạt động
            </TabButton>
            <TabButton isActive={activeTab === 'interests'} onClick={() => setActiveTab('interests')}>
              Sở thích
            </TabButton>
            <TabButton isActive={activeTab === 'boards'} onClick={() => setActiveTab('boards')}>
              Bảng
            </TabButton>
            <TabButton isActive={activeTab === 'following'} onClick={() => setActiveTab('following')}>
              Đang theo dõi
            </TabButton>
          </TabButtons>

          {/* Tab Content */}
          {activeTab === 'activity' && (
            <>
              <Card>
                <CardHeader>
                  <p>Ghim bạn đã xem lúc hôm nay</p>
                  <CardButton>Bật tất cả</CardButton>
                </CardHeader>
                <Image src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-phong-canh-66-1.jpg" alt="Pin" />
              </Card>

              <Card>
                <CardHeader>
                  <p>Ghim bạn đã xem lúc 6 ngày trước</p>
                  <CardButton>Bật tất cả</CardButton>
                </CardHeader>
                <Image src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-phong-canh-66-1.jpg" alt="Pin" />
              </Card>
            </>
          )}

          {activeTab === 'interests' && (
            <>
              <SubTitle>
                Thêm sở thích để bắt đầu xem các ý tưởng liên quan. Xóa sở thích để ẩn các ý tưởng liên quan mà bạn không còn quan tâm.
              </SubTitle>
              <EmptyMessage>Bạn chưa thêm bất kỳ chủ đề nào vào bảng tin nhà</EmptyMessage>
            </>
          )}

          {activeTab === 'boards' && (
            <>
              <SubTitle>
                Tắt một bảng để ngừng xem ý tưởng liên quan đến bảng đó. Đừng lo, hành động này sẽ không ảnh hưởng đến bảng của bạn.
              </SubTitle>
              <EmptyMessage>Có vẻ như bạn chưa có bảng nào. Khi bạn lưu Ghim vào bảng, bảng tin nhà của bạn sẽ ngày càng phong phú hơn.</EmptyMessage>
            </>
          )}

          {activeTab === 'following' && (
            <>
              <SubTitle>
                Hủy theo dõi một người hoặc thương hiệu để ngừng xem các Ghim họ đã đăng. Họ sẽ không được thông báo.
              </SubTitle>
              <EmptyMessage>Có vẻ như bạn không theo dõi Người dùng nào.</EmptyMessage>
            </>
          )}
        </Content>
      </Container>
    </>
  );
};

export default NewsFeedSettings;
