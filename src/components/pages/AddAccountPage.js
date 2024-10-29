import React, { useState } from 'react';
import { FaUserPlus, FaPlusCircle, FaStore, FaGoogle, FaFacebook } from 'react-icons/fa'; // Import các icon từ FontAwesome
import Header from '../header/Header'; // Giả định bạn đã có component Header

const AddAccountPage = () => {
  const [showBusinessForm, setShowBusinessForm] = useState(false); // Trạng thái để hiển thị form doanh nghiệp
  const [showPersonalForm, setShowPersonalForm] = useState(false); // Trạng thái để hiển thị form cá nhân
  const [showConnectForm, setShowConnectForm] = useState(false); // Trạng thái để hiển thị form kết nối tài khoản hiện có

  const toggleBusinessForm = () => {
    setShowBusinessForm(!showBusinessForm); // Bật/tắt form doanh nghiệp khi nhấn nút "Tạo"
  };

  const togglePersonalForm = () => {
    setShowPersonalForm(!showPersonalForm); // Bật/tắt form cá nhân khi nhấn nút "Tạo"
  };

  const toggleConnectForm = () => {
    setShowConnectForm(!showConnectForm); // Bật/tắt form kết nối tài khoản khi nhấn nút "Kết nối tài khoản"
  };

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
              onClick={toggleConnectForm} // Sự kiện khi nhấn vào nút "Kết nối tài khoản"
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
              onClick={togglePersonalForm} // Sự kiện khi nhấn vào nút "Tạo"
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
              onClick={toggleBusinessForm} // Sự kiện khi nhấn vào nút "Tạo"
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

        {/* Hiển thị form kết nối tài khoản hiện có khi nhấn nút "Kết nối tài khoản" */}
        {showConnectForm && (
          <>
            <div
              style={{
                position: 'fixed',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                width: '400px',
                textAlign: 'center'
              }}
            >
              <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Thêm tài khoản</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                Bạn có tài khoản Pinterest khác? Hãy đăng nhập để dễ dàng chuyển đổi giữa chúng.
              </p>

              <form>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <a href="/" style={{ fontSize: '14px', color: '#0055A6', textDecoration: 'none', display: 'block', marginBottom: '20px' }}>
                  Quên mật khẩu?
                </a>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#E60023',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Đăng nhập
                </button>
              </form>

              <p style={{ margin: '20px 0', fontSize: '14px', color: '#666' }}>HOẶC</p>

              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#1877F2',
                  border: 'none',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#fff',
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              >
                <FaFacebook style={{ marginRight: '8px' }} />
                Tiếp tục dưới tên Dũng
              </button>

              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#666',
                  cursor: 'pointer'
                }}
              >
                <FaGoogle style={{ marginRight: '8px', color: '#EA4335' }} />
                Tiếp tục bằng tên Duy Đông
              </button>

              <p style={{ fontSize: '12px', color: '#666', marginTop: '20px' }}>
                Bằng cách tiếp tục, bạn đồng ý với 
                <a href="/" style={{ color: '#0055A6', textDecoration: 'none' }}> Điều khoản dịch vụ </a> 
                của Pinterest và xác nhận rằng bạn đã đọc 
                <a href="/" style={{ color: '#0055A6', textDecoration: 'none' }}> Chính sách quyền riêng tư </a>.
              </p>
            </div>

            {/* Overlay để đóng form kết nối tài khoản */}
            <div
              onClick={toggleConnectForm}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
              }}
            ></div>
          </>
        )}

        {/* Hiển thị form tạo tài khoản cá nhân khi nhấn nút "Tạo" */}
        {showPersonalForm && (
          <>
            <div
              style={{
                position: 'fixed',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                width: '400px',
                textAlign: 'center',
              }}
            >
              <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Tạo tài khoản cá nhân mới</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                Tìm những ý tưởng mới để thử
              </p>

              <form>
                <div style={{ marginBottom: '20px' }}> 
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="password"
                    placeholder="Tạo mật khẩu"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="date"
                    placeholder="Ngày sinh"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#E60023',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Tiếp tục
                </button>
              </form>

              <p style={{ margin: '20px 0', fontSize: '14px', color: '#666' }}>HOẶC</p>
              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#666',
                  cursor: 'pointer'
                }}
              >
                <FaGoogle style={{ marginRight: '8px', color: '#EA4335' }} />
                Tiếp tục bằng Google
              </button>

              <p style={{ fontSize: '12px', color: '#666', marginTop: '20px' }}>
                Bằng cách tiếp tục, bạn đồng ý với 
                <a href="/" style={{ color: '#0055A6', textDecoration: 'none' }}> Điều khoản dịch vụ </a> 
                của Pinterest và xác nhận rằng bạn đã đọc 
                <a href="/" style={{ color: '#0055A6', textDecoration: 'none' }}> Chính sách quyền riêng tư </a>.
              </p>
            </div>

            {/* Overlay để đóng form cá nhân */}
            <div
              onClick={togglePersonalForm}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
              }}
            ></div>
          </>
        )}

        {/* Hiển thị form tạo tài khoản doanh nghiệp khi nhấn nút "Tạo" */}
        {showBusinessForm && (
          <>
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                width: '400px',
                textAlign: 'center'
              }}
            >
              <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Tạo tài khoản doanh nghiệp miễn phí</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                Xuất hiện trước 400 triệu người đang có nhu cầu mua sắm và thực hiện những kế hoạch của mình.
              </p>

              <form>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="password"
                    placeholder="Tạo mật khẩu"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="date"
                    placeholder="Ngày sinh"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#E60023',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Tạo tài khoản
                </button>
              </form>

              <p style={{ fontSize: '12px', color: '#666', marginTop: '20px' }}>
                Bằng cách tiếp tục, bạn đồng ý với Điều khoản dịch vụ dành cho doanh nghiệp của Pinterest và xác nhận rằng bạn đã đọc Chính sách quyền riêng tư của chúng tôi.
              </p>
            </div>

            {/* Overlay để đóng form doanh nghiệp */}
            <div
              onClick={toggleBusinessForm}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
              }}
            ></div>
          </>
        )}
      </div>
        <p style={{textAlign:'center',marginTop:'100px',fontSize:'20px',
          fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, "ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ Pro W3", "ãƒ¡ã‚¤ãƒªã‚ª", Meiryo, "ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯", Arial, sans-serif',
          fontWeight:'bold',
          }}>
          Quản lý tài khoản
          
        </p>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px', textAlign:'center'}}>
            Bạn có thể thay đổi hoặc chuyển đổi tài khoản của mình <br />bất kỳ lúc nào. Chuyển đến phần Cài đặt &gt; Cài đặt tài khoản &gt;<br /> Tài khoản của bạn hoặc nhấp vào <a href="/settings/account" style={{ color: '#0055A6' }}>tại đây</a>.
          </p>
      
    </>
  );
};

export default AddAccountPage;
