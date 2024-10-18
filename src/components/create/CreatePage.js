// CreatePage.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header'; // Đường dẫn tới Header component
import Sidebar from './Sidebar'; // Đường dẫn tới Sidebar component

const CreatePage = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleFileUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(URL.createObjectURL(file));
        }
    };

    const handleSaveFromURLClick = () => {
        navigate("/save-url");
    };

    const handleChangeFileClick = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <Header />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div style={{
                padding: '20px',
                marginTop: '80px',
                marginLeft: isSidebarOpen ? '320px' : '90px',
                transition: 'margin-left 0.3s',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '40px',
                    margin: '10px 0',
                    position: 'relative',
                }}>
                    <h2 style={{
                        margin: 0,
                        fontSize: '24px',
                        lineHeight: '1',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        Tạo Ghim
                    </h2>
                    <button style={{
                        padding: '10px 20px',
                        borderRadius: '20px',
                        backgroundColor: 'red',
                        color: 'black',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}>
                        Đăng
                    </button>
                </div>
                <hr style={{ margin: '0 0 20px 0', border: '1px solid #ddd', borderRight: 'none' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        {!selectedFile ? (
                            <div style={{
                                width: '500px',
                                padding: '20px',
                                border: '1px dashed #ccc',
                                borderRadius: '12px',
                                textAlign: 'center',
                                backgroundColor: '#f5f5f5',
                                position: 'relative',
                                cursor: 'pointer',
                            }}
                                onClick={handleFileUploadClick}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: '#000',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    marginBottom: '10px',
                                    marginTop: '30px',
                                }}>
                                    <span style={{
                                        fontSize: '20px',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                    }}>
                                        ↑
                                    </span>
                                </div>
                                <p style={{ margin: '100px 0', fontSize: '16px' }}>Chọn một tệp hoặc kéo và thả tệp ở đây</p>
                                <p style={{ fontSize: '12px', color: '#999' }}>
                                    Bạn nên sử dụng tệp tin .jpg chất lượng cao có kích thước dưới 20 MB hoặc tệp tin .mp4 chất lượng cao có kích thước dưới 200 MB.
                                </p>
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        ) : (
                            <div style={{ position: 'relative', textAlign: 'center' }}>
                                {selectedFile.includes('.mp4') ? (
                                    <video controls width="500px">
                                        <source src={selectedFile} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img src={selectedFile} alt="Selected" style={{ width: '500px', borderRadius: '12px' }} />
                                )}
                                <button
                                    onClick={handleChangeFileClick}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'rgba(0, 0, 0, 0.6)',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '50%',
                                        padding: '10px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    ⟳
                                </button>
                            </div>
                        )}
                        <hr style={{ width: '500px', margin: '30px auto', border: '1px solid #ddd' }} />
                        <button
                            onClick={handleSaveFromURLClick}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '20px',
                                backgroundColor: '#E0E0E0',
                                color: '#333',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                width: '500px',
                                textAlign: 'center',
                                marginTop: '10px',
                            }}
                        >
                            Lưu từ URL
                        </button>
                    </div>
                    <div style={{ width: '55%', padding: '20px' }}>
                        <form>
                            <div style={{ marginBottom: '15px' }}>
                                <label>Tiêu đề</label>
                                <input type="text" placeholder="Thêm tiêu đề" style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }} />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label>Mô tả</label>
                                <textarea placeholder="Thêm mô tả chi tiết" style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc', height: '100px' }}></textarea>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label>Liên kết</label>
                                <input type="text" placeholder="Thêm liên kết" style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }} />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label>Bảng</label>
                                <select style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }}>
                                    <option>Chọn bảng</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label>Chủ đề được gắn thẻ (0)</label>
                                <input type="text" placeholder="Tìm kiếm thẻ" style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePage;
