import React from "react";
import avatar from "../../images/avatar-cute-vui-nhon.jpg"; // Đường dẫn đến avatar
import Header from "../header/Header"; // Import header
import { useNavigate } from "react-router-dom"; // Import useNavigate

const UserProfilePage = () => {
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    background: '#ccc',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer', // Thêm thuộc tính cursor để chuyển thành bàn tay khi hover
    transition: 'background 0.3s ease, transform 0.3s ease', // Hiệu ứng chuyển động
  };

  const hoverStyle = {
    background: '#aaa', // Màu khi hover
    transform: 'scale(1.05)', // Phóng to khi hover
  };

  return (
    <>
      <Header /> {/* Sử dụng header chung */}
      
      <div style={{ padding: '20px', textAlign: 'center', marginTop: '80px' }}>
        <div>
          <img src={avatar} alt="Profile" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
        </div>
        <h2>Sin ツ</h2>
        <p>duydong19032002</p>
        <p>0 người đang theo dõi</p>

        {/* Button "Chia sẻ" với hiệu ứng hover */}
        <button 
          style={buttonStyle} 
          onMouseEnter={(e) => e.target.style.background = hoverStyle.background}
          onMouseLeave={(e) => e.target.style.background = buttonStyle.background}
          onMouseDown={(e) => e.target.style.transform = hoverStyle.transform}
          onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
        >
          Chia sẻ
        </button>

        {/* Button "Chỉnh sửa hồ sơ" với hiệu ứng hover */}
        <button 
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.background = hoverStyle.background}
          onMouseLeave={(e) => e.target.style.background = buttonStyle.background}
          onMouseDown={(e) => e.target.style.transform = hoverStyle.transform}
          onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          onClick={() => navigate('/settings/profile')}
        >
          Chỉnh sửa hồ sơ
        </button>

        <h3 style={{ marginTop: '20px' }}>Đã tạo</h3>
        <p>Chưa có gì để hiển thị! Ghim bạn tạo sẽ xuất hiện ở đây.</p>
        <button style={{ marginTop: '20px', padding: '10px 20px', background: 'red', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}
        onClick={() => navigate('/create')}
        >
          Tạo Ghim
        </button>
      </div>
    </>
  );
};

export default UserProfilePage;
