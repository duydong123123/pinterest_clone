// SaveFromWebPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SaveFromWebPage = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Quay lại trang trước đó
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f2f2f2',
        }}>
            <div style={{
                width: '800px',
                height: '500px',
                margin: '0 auto',
                borderRadius: '12px',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '40px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
            }}>
                <button
                    onClick={handleBackClick}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'none',
                        border: 'none',
                        fontSize: '24px',
                        cursor: 'pointer',
                    }}
                >
                    ←
                </button>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                }}>
                    Lưu ý tưởng từ trang web
                </h2>
                <p style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#666',
                    marginBottom: '30px',
                }}>
                    Chọn tối đa mười hình ảnh
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '30px',
                    backgroundColor: '#f9f9f9',
                }}>
                    <input
                        type="text"
                        placeholder="Nhập trang web"
                        style={{
                            flexGrow: 1,
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'transparent',
                            fontSize: '16px',
                            paddingLeft: '10px',
                        }}
                    />
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '24px',
                            color: '#333',
                            marginLeft: '10px',
                        }}
                    >
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SaveFromWebPage;
