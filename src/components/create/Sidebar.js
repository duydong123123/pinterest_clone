// Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <div style={{
        width: isOpen ? '300px' : '90px',
        height: 'calc(100vh - 80px)',
        position: 'fixed',
        top: '80px',
        left: 0,
        backgroundColor: '#fff',
        padding: isOpen ? '20px' : '10px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        transition: 'width 0.3s',
        borderRight: '1px solid #ddd',
        justifyContent: 'flex-start',
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '24px',
            marginBottom: '10px',
            height: isOpen ? 'auto' : '100%', 
        }}>
            {!isOpen && (
                <>
                    <button
                        onClick={toggleSidebar}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            marginTop: '25px',
                        }}
                    >
                        ≫
                    </button>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '24px',
                            color: '#333',
                            marginTop: '40px',
                        }}
                    >
                        +
                    </button>
                </>
            )}
        </div>
        {isOpen && (
            <>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '20px',
                    marginTop: '7px',
                }}>
                    <div style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '1',
                    }}>
                        Bản nháp Ghim
                    </div>
                    <button
                        onClick={toggleSidebar}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '24px',
                            fontWeight: 'bold',
                        }}
                    >
                        ≪
                    </button>
                </div>
                <button style={{
                    background: '#E0E0E0',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    color: '#333',
                    padding: '10px',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                }}>
                    Tạo mới
                </button>
            </>
        )}
    </div>
);

export default Sidebar;
