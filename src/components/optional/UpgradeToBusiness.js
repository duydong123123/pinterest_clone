import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Table, TableRow, TableCell, Icon, FooterButtons } from '../../components/UpgradePage.styles'; // Import các style bạn đã định nghĩa
import Header from '../../components/header/Header';

const UpgradeToBusiness = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1); // Điều hướng quay lại trang trước
    };

    const handleUpgrade = () => {
        // Xử lý khi người dùng nhấn "Nâng cấp"
        console.log("Tài khoản được nâng cấp");
    };

    return (
       <>
        <Header />
        <Container style={{ marginTop: '100px' }}> {/* Thêm margin-top để tạo khoảng cách */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <Icon onClick={handleCancel} style={{ cursor: 'pointer', fontSize: '24px',float:'left' }}>
                    ← {/* Mũi tên trái */}
                </Icon>
                <h1 style={{ marginLeft: '10px' }}>Nâng cấp lên tài khoản doanh nghiệp miễn phí</h1>
            </div>
            <p>
                Phát triển doanh nghiệp hoặc thương hiệu của bạn bằng các công cụ như quảng cáo và phân tích.
                Nội dung, hồ sơ và những người theo dõi của bạn sẽ được giữ nguyên. Bạn có thể hủy thay đổi
                này trong phần Cài đặt.
            </p>
            <Table>
                <thead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Cá nhân</TableCell>
                        <TableCell>Doanh nghiệp</TableCell>
                    </TableRow>
                </thead>
                <tbody>
                    <TableRow>
                        <TableCell>🖊 Công cụ đăng</TableCell>
                        <TableCell>✔️</TableCell>
                        <TableCell>✔️</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>📊 Trình quản lý quảng cáo</TableCell>
                        <TableCell></TableCell>
                        <TableCell>✔️</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>🔍 Thông tin chi tiết và Phân tích</TableCell>
                        <TableCell></TableCell>
                        <TableCell>✔️</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>💳 Tín dụng và ưu đãi</TableCell>
                        <TableCell></TableCell>
                        <TableCell>✔️</TableCell>
                    </TableRow>
                </tbody>
            </Table>
            <FooterButtons>
                <Button onClick={handleCancel} style={{ backgroundColor: '#E0E0E0' }}>Hủy</Button>
                <Button onClick={handleUpgrade} style={{ backgroundColor: 'red', color: 'white' }}>Nâng cấp</Button>
            </FooterButtons>
        </Container>
       </>
    );
};

export default UpgradeToBusiness;
