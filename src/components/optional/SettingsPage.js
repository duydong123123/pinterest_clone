import React from 'react';
import Header from '../header/Header';
import profilePicture from "../../images/avatar-cute-vui-nhon.jpg"; 

const SettingsPage = () => {
    return (
        <>
            <Header />
            {/* Thêm marginTop để đẩy nội dung xuống dưới Header */}
            <div style={{ display: 'flex', padding: '20px', marginTop: '80px' }}>
                {/* Sidebar với các mục cài đặt */}
                <div style={{ flex: '1 1 25%', borderRight: '1px solid #ddd', padding: '20px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '20px', fontWeight: 'bold', borderBottom: '2px solid black' }}>Chỉnh sửa hồ sơ</li>
                        <li style={{ marginBottom: '10px' }}>Quản lý tài khoản</li>
                        <li style={{ marginBottom: '10px' }}>Chế độ hiển thị hồ sơ</li>
                        <li style={{ marginBottom: '10px' }}>Điều chỉnh bảng tin nhà của bạn</li>
                        <li style={{ marginBottom: '10px' }}>Tài khoản được xác nhận</li>
                        <li style={{ marginBottom: '10px' }}>Quyền mạng xã hội</li>
                        <li style={{ marginBottom: '10px' }}>Thông báo</li>
                        <li style={{ marginBottom: '10px' }}>Quyền riêng tư và dữ liệu</li>
                        <li style={{ marginBottom: '10px' }}>Bảo mật</li>
                        <li style={{ marginBottom: '10px' }}>Nội dung mang thương hiệu</li>
                    </ul>
                </div>
                
                {/* Main content chỉnh sửa hồ sơ */}
                <div style={{ flex: '1 1 75%', padding: '20px' }}>
                    <h2>Chỉnh sửa hồ sơ</h2>
                    <p>Hãy giữ riêng tư thông tin cá nhân của bạn. Thông tin bạn thêm vào đây hiển thị cho bất kỳ ai có thể xem hồ sơ của bạn.</p>

                    {/* Ảnh đại diện và nút Thay đổi */}
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <img src={profilePicture} alt="User Avatar" style={{ borderRadius: '50%', width: '80px', height: '80px' }} />
                        <button style={{ marginLeft: '20px', padding: '10px 20px', border: '1px solid #ccc', borderRadius: '12px', cursor: 'pointer' }}>Thay đổi</button>
                    </div>

                    {/* Form chỉnh sửa thông tin cá nhân */}
                    <div style={{ marginBottom: '20px' }}>
                        <label>Tên</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input 
                                type="text" 
                                value="Sin" 
                                style={{ flex: 1, padding: '10px', borderRadius: '12px', border: '1px solid #ccc', marginRight: '10px' }} 
                            />
                            <input 
                                type="text" 
                                value="w" 
                                style={{ flex: 1, padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }} 
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Giới thiệu</label>
                        <textarea 
                            placeholder="Kể câu chuyện của bạn" 
                            style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc', height: '100px' }} 
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Trang web</label>
                        <input 
                            type="text" 
                            placeholder="Thêm liên kết để hướng lưu lượng vào website" 
                            style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }} 
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Tên người dùng</label>
                        <input 
                            type="text" 
                            value="duydong19032002" 
                            style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }} 
                        />
                        <p style={{ marginTop: '5px', fontSize: '12px', color: '#666' }}>
                            www.pinterest.com/duydong19032002
                        </p>
                    </div>

                    {/* Nút Lưu và Thiết lập lại */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                        <button style={{ padding: '10px 20px', borderRadius: '12px', backgroundColor: '#ddd', cursor: 'pointer', border: 'none' }}>
                            Thiết lập lại
                        </button>
                        <button style={{ padding: '10px 20px', borderRadius: '12px', backgroundColor: '#ddd', cursor: 'pointer', border: 'none' }}>
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingsPage;
