import React from 'react';
import './Footer.css'; // Giả định CSS được lưu trong Footer.css

const Footer = () => {
  return (
    <div className="footer">
      <button className="footer-button">Thiết lập lại</button>
      <button className="footer-button">Lưu</button>
    </div>
  );
};

export default Footer;
