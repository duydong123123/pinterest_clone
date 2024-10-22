import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import LayoutSetting from '../sidebar/LayoutSetting';
import styled from 'styled-components';

const Container = styled.div`

`;

const Content = styled.div`
  width: 80%;
  padding-left: 20px;
`;

const NewsFeedSettings = () => {
  return (
    <>
      <Header />
      <Container>
        <LayoutSetting /> {/* Sidebar */}
        <Content>
          <Outlet /> {/* Phần này sẽ render các trang con dựa trên route */}
        </Content>
      </Container>
    </>
  );
};

export default NewsFeedSettings;
