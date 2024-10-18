import React from "react";
import avatar from "../../images/avatar-cute-vui-nhon.jpg"; // Đường dẫn đến avatar
import Header from "../header/Header"; // Import header

const UserProfilePage = () => {
  return (
    <>
      <Header /> Sử dụng header chung
      
      <div style={{ padding: '20px', textAlign: 'center', marginTop: '80px' }}>
        <div>
          <img src={avatar} alt="Profile" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
        </div>
        <h2>Sin ツ</h2>
        <p>duydong19032002</p>
        <p>0 người đang theo dõi</p>
        <button style={{ margin: '10px', padding: '10px 20px', background: '#ccc', border: 'none', borderRadius: '5px' }}>Chia sẻ</button>
        <button style={{ margin: '10px', padding: '10px 20px', background: '#ccc', border: 'none', borderRadius: '5px' }}>Chỉnh sửa hồ sơ</button>
        
        <h3 style={{ marginTop: '20px' }}>Đã tạo</h3>
        <p>Chưa có gì để hiển thị! Ghim bạn tạo sẽ xuất hiện ở đây.</p>
        <button style={{ marginTop: '20px', padding: '10px 20px', background: 'red', color: 'white', border: 'none', borderRadius: '20px' }}>Tạo Ghim</button>
      </div>
    </>
  );
};

export default UserProfilePage;
