import React from 'react';
import { FaUserPlus, FaPlusCircle, FaStore } from 'react-icons/fa'; // Import các icon từ FontAwesome
import Header from '../header/Header';

const AddAccountPage = () => {
  return (
    <>
      <Header />
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Thêm tài khoản</h2>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
        Thêm một tài khoản mới hoặc kết nối tài khoản hiện có để chuyển đổi tài khoản liên mạch
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '50px' }}>
        {/* Kết nối tài khoản hiện có */}
        <div style={{ textAlign: 'center', width: '250px', padding: '20px', border: '1px solid #ddd', borderRadius: '12px' }}>
          <FaUserPlus style={{ fontSize: '40px', color: '#a15728' }} />
          <h3 style={{ fontSize: '20px', margin: '10px 0' }}>Kết nối tài khoản hiện có</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            Kết nối tài khoản Pinterest với các email khác nhau để chuyển đổi tài khoản liên mạch
          </p>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ccc',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333'
            }}
          >
            Kết nối tài khoản
          </button>
        </div>

        {/* Tạo tài khoản cá nhân mới */}
        <div style={{ textAlign: 'center', width: '250px', padding: '20px', border: '1px solid #ddd', borderRadius: '12px' }}>
          <FaPlusCircle style={{ fontSize: '40px', color: '#008000' }} />
          <h3 style={{ fontSize: '20px', margin: '10px 0' }}>Tạo tài khoản cá nhân mới</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            Tạo tài khoản tách biệt bằng địa chỉ email khác
          </p>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ccc',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333'
            }}
          >
            Tạo
          </button>
        </div>

        {/* Tạo tài khoản doanh nghiệp miễn phí */}
        <div style={{ textAlign: 'center', width: '250px', padding: '20px', border: '1px solid #ddd', borderRadius: '12px' }}>
          <FaStore style={{ fontSize: '40px', color: '#0055A6' }} />
          <h3 style={{ fontSize: '20px', margin: '10px 0' }}>Tạo tài khoản doanh nghiệp miễn phí</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            Mở khóa các công cụ để giúp:
            <br />
            Phát triển đối tượng khán giả
            <br />
            Thu hút lưu lượng truy cập
            <br />
            Bán nhiều sản phẩm hơn
          </p>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff4d4d',
              border: '1px solid #ccc',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#fff'
            }}
          >
            Tạo
          </button>
        </div>
      </div>

      <p style={{ fontSize: '14px', color: '#666' }}>
        Bạn có thể thay đổi hoặc chuyển đổi tài khoản của mình bất kỳ lúc nào. Chuyển đến phần Cài đặt &gt; Quản lý tài khoản &gt; Tài khoản của bạn hoặc nhấp vào <a href="/" style={{ color: '#0055A6' }}>tại đây</a>.
      </p>
    </div>
    </>
  );
};

export default AddAccountPage;
