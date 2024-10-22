import React, { useState } from 'react';

const InboxPopup = ({ onClose }) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleOptionsClick = (e) => {
        // Ngăn chặn sự kiện click lan truyền lên
        e.stopPropagation();
        // Đảm bảo trạng thái toggle chính xác mà không tự động tắt
        setShowOptions((prevShowOptions) => !prevShowOptions);
    };

    const handleOutsideClick = (e) => {
        // Đóng menu khi nhấn bên ngoài menu tùy chọn
        if (!e.target.closest(".options-button") && !e.target.closest(".options-menu")) {
            setShowOptions(false);
        }
    };

    // Gắn sự kiện click để phát hiện nhấn bên ngoài
    React.useEffect(() => {
        if (showOptions) {
            document.addEventListener("click", handleOutsideClick);
        } else {
            document.removeEventListener("click", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [showOptions]);

    return (
        <div style={{
            position: 'fixed',
            top: '60px',
            right: '10px',  // Đặt sát bên phải với một khoảng cách nhỏ (15px)
            width: '350px',
            height: '710px',
            padding: '10px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            zIndex: 1000,
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Dấu X để đóng popup */}
                <button
                    onClick={onClose}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '22px',
                        marginRight: '10px',
                        fontWeight: 'bold',
                    }}
                >
                    ✕
                </button>

                <h3 style={{ margin: 0, fontSize: '16px', flexGrow: 1 }}>Hộp thư đến</h3>

                <div style={{ position: 'relative' }}>
                    {/* Dấu ba chấm để mở menu tùy chọn */}
                    <button
                        className="options-button"
                        onClick={handleOptionsClick}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            padding: '0',
                            width: '20px',
                            height: '20px',
                            display: 'flex',
                        }}
                    >
                        ⋮
                    </button>
                    {showOptions && (
                        <div
                            className="options-menu"
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '0',
                                backgroundColor: 'white',
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                                borderRadius: '8px',
                                padding: '5px 10px',
                                zIndex: 1001
                            }}
                        >
                            <button
                                onClick={() => {
                                    setShowOptions(false);
                                    alert("Đánh dấu tất cả là đã đọc");
                                }}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    padding: '5px',
                                    textAlign: 'left',
                                    width: '150px'
                                }}
                            >
                                Đánh dấu tất cả là đã đọc
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div style={{ marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ backgroundColor: 'red', borderRadius: '50%', padding: '10px', marginRight: '10px' }}>
                        ✍️
                    </div>
                    <div>
                        <strong>Tin nhắn mới</strong>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ backgroundColor: '#ccc', borderRadius: '50%', padding: '10px', marginRight: '10px' }}>
                        👥
                    </div>
                    <div>
                        <strong>Mời bạn bè</strong><br />
                        <span style={{ fontSize: '12px', color: '#555' }}>Kết nối để bắt đầu trò chuyện</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InboxPopup;
