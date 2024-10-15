import React from "react";

const HelpIcon = () => (
    <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#fff',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1000,
    }}>
        <span style={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#000',
        }}>
            ?
        </span>
    </div>
);

export default HelpIcon;
