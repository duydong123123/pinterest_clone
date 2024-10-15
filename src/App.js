import React, { useState, useRef, useCallback } from "react";
import useSearch from "./hooks/useSearch";
import { GlobalStyle } from "./components/globalStyles.style";
import { Loading } from "./components/Loading.style";
import { MenuBar } from "./components/MenuBar.style";
import { Logo } from "./components/Logo.style";
import { Form } from "./components/Form.style";
import { SearchBar } from "./components/SearchBar.style";
import { PinGrid } from "./components/PinGrid.style";
import { PinContainer } from "./components/PinContainer.style";
import { Pin } from "./components/Pin.style";
import { PinInfo } from "./components/PinInfo.style";
import { PinElements } from "./components/PinElements.style";
import { SaveButton } from "./components/SaveButton.style";
import { PageButton } from "./components/PageButton.style";
import { DownloadButton } from "./components/DownloadButton.style";
import { Title } from "./components/Title.style";
import { User } from "./components/User.style";
import { ButtonGroup, CustomButton } from "./components/ButtonGroup.style"; // Import button styles
import { NotificationIcon, MessageIcon, NotificationDropdown, MessageDropdown, UserDropdown, UserIcon, DropdownIcon, DropdownItem } from "./components/Icons.style";
import logo from "./images/logo.png";
import loading from "./images/loading.svg";
import downloadIcon from "./images/download-icon.png";
import goIcon from "./images/top-right-arrow.png";
import profilePicture from "./images/avatar-cute-vui-nhon.jpg"; // Đường dẫn đến ảnh đại diện người dùng
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // Import các component từ react-router-dom

// Trang Tạo Ghim
const CreatePage = () => {
   const navigate = useNavigate(); // Hook điều hướng từ react-router-dom
   const [selectedFile, setSelectedFile] = useState(null);
   const [fileType, setFileType] = useState(""); // Trạng thái để lưu loại tệp (ảnh/video)
   const [showNotification, setShowNotification] = useState(false);
   const [showMessage, setShowMessage] = useState(false);
   const [showUserDropdown, setShowUserDropdown] = useState(false); // Trạng thái dropdown người dùng

   // Xử lý khi người dùng chọn tệp
   const handleFileChange = (event) => {
       const file = event.target.files[0];
       if (file) {
           const fileExtension = file.name.split('.').pop().toLowerCase(); // Lấy phần mở rộng của tệp
           setFileType(fileExtension); // Lưu loại tệp
           setSelectedFile(URL.createObjectURL(file)); // Hiển thị URL tạm thời cho ảnh/video
       }
   };

   const handleHomeClick = () => {
       navigate("/"); // Điều hướng về trang chủ
   };

   return (
       <>
           {/* Header giống như trang chính */}
           <MenuBar>
               <Logo>
                   <img src={logo} alt="Logo" />
               </Logo>
               <ButtonGroup>
                   <CustomButton onClick={handleHomeClick}>Trang Chủ</CustomButton> {/* Nút Trang Chủ sẽ điều hướng về trang chủ */}
                   <CustomButton>Tạo</CustomButton>
               </ButtonGroup>
               <Form style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
                   <SearchBar placeholder="Search" />
                   <div style={{ display: "flex", alignItems: "center", marginLeft: "20px", position: "relative" }}>
                       <div
                           onMouseEnter={() => setShowNotification(true)}
                           onMouseLeave={() => setShowNotification(false)}
                           style={{ position: "relative" }}
                       >
                           <NotificationIcon />
                       </div>
                       <div
                           onMouseEnter={() => setShowMessage(true)}
                           onMouseLeave={() => setShowMessage(false)}
                           style={{ marginLeft: "20px", position: "relative" }}
                       >
                           <MessageIcon />
                       </div>
                       <div
                           onClick={() => setShowUserDropdown(!showUserDropdown)}
                           style={{ marginLeft: "20px", position: "relative" }}
                       >
                           <UserIcon />
                           <DropdownIcon />
                       </div>
                   </div>
               </Form>
           </MenuBar>
           <hr style={{ margin: '10px 0', border: '0', borderTop: '1px solid #ddd' }} />
           {/* Nội dung của trang Tạo Ghim */}
           <div style={{ padding: '10px', marginTop: '0px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <h2 style={{ margin: 0 }}>Tạo Ghim</h2>

                   {/* Nút "Đăng" căn về bên phải, cùng dòng với tiêu đề */}
                   <button 
                       style={{ 
                           padding: '10px 20px', 
                           borderRadius: '20px', 
                           backgroundColor: 'red', 
                           color: 'black', 
                           border: 'none',
                           fontWeight: 'bold',
                           cursor: 'pointer'
                       }}
                   >
                       Đăng
                   </button>
               </div>

               <hr style={{ margin: '20px 0', border: '1px solid #ddd' }} />

               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   {/* Phần kéo thả file */}
                   <div style={{ width: '40%', padding: '20px', border: '1px dashed #ccc', borderRadius: '12px', textAlign: 'center' }}>
                       {selectedFile ? (
                           <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
                               {["jpeg", "jpg", "png", "gif"].includes(fileType) ? (
                                   <img src={selectedFile} alt="Uploaded" style={{ maxWidth: '100%', borderRadius: '12px' }} />
                               ) : (
                                   <video controls style={{ maxWidth: '100%', borderRadius: '12px' }}>
                                       <source src={selectedFile} type="video/mp4" />
                                   </video>
                               )}
                           </div>
                       ) : (
                           <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
                               <span>Chọn một tệp hoặc kéo và thả tệp ở đây</span>
                           </div>
                       )}

                       <p style={{ fontSize: '12px', color: '#999' }}>
                           Bạn nên sử dụng tệp tin .jpg chất lượng cao có kích thước dưới 20 MB hoặc tệp tin .mp4 chất lượng cao có kích thước dưới 200 MB.
                       </p>

                       {/* Thêm input để tải lên tệp */}
                       <input
                           type="file"
                           accept="image/*,video/*"
                           onChange={handleFileChange}
                           style={{ marginTop: '20px' }}
                       />
                   </div>

                   {/* Form nhập tiêu đề, mô tả, liên kết */}
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


function App() {
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [showNotification, setShowNotification] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false); // Trạng thái dropdown người dùng
    const navigate = useNavigate(); // Hook điều hướng từ react-router-dom

    const pinWidth = 252;

    const { isLoading, error, pins } = useSearch(query, pageNumber);

    const observer = useRef();
    const lastPin = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting)
                setPageNumber(prevPageNumber => prevPageNumber + 1);
        });
        if (node) observer.current.observe(node);
    }, [isLoading]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        setQuery(input);
        setInput("");
        setPageNumber(1);
    };

    const handleCreateClick = () => {
        navigate("/create"); // Điều hướng đến trang /create
    };

    const mappedPins = pins && pins.map((pin, index) => (
        <PinContainer
            key={pin.id}
            spanHeight={Math.round((pinWidth * pin.height) / pin.width / 10 + 10)}
            pinWidth={pinWidth}
        >
            <Pin
                id={pin.id}
                spanHeight={Math.round((pinWidth * pin.height) / pin.width / 10)}
                ref={(pins.length === index + 1) ? lastPin : null}
                background={pin.urls.regular}
                pinWidth={pinWidth}
            >
                <PinInfo>
                    <PinElements>
                        <SaveButton>Save</SaveButton>
                    </PinElements>
                    <PinElements>
                        <PageButton background={goIcon}>
                            {pin.user.username}
                        </PageButton>
                        <DownloadButton>
                            <img src={downloadIcon} alt="Download" />
                        </DownloadButton>
                    </PinElements>
                </PinInfo>
            </Pin>
            {pin.description && <Title><span>{pin.description}</span></Title>}
            {pin.user && <User><img src={pin.user.profile_image.small} alt="User" /><span>{pin.user.instagram_username}</span></User>}
        </PinContainer>
    ));

    return (
        <>
            <GlobalStyle />
            <MenuBar>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>
                <ButtonGroup>
                    <CustomButton>Trang Chủ</CustomButton>
                    <CustomButton onClick={handleCreateClick}>Tạo</CustomButton> {/* Nút chuyển hướng đến trang Tạo */}
                </ButtonGroup>
                <Form onSubmit={onFormSubmit} style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
                    <SearchBar
                        placeholder="Search"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        style={{ height: "48px" }} // Giảm chiều rộng của thanh tìm kiếm
                    />
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "20px", position: "relative" }}>
                        <div
                            onMouseEnter={() => setShowNotification(true)}
                            onMouseLeave={() => setShowNotification(false)}
                            style={{ position: "relative" }}
                        >
                            <NotificationIcon />
                            {showNotification && <NotificationDropdown>Thông báo</NotificationDropdown>}
                        </div>
                        <div
                            onMouseEnter={() => setShowMessage(true)}
                            onMouseLeave={() => setShowMessage(false)}
                            style={{ marginLeft: "10px", position: "relative" }}
                        >
                            <MessageIcon />
                            {showMessage && <MessageDropdown>Tin nhắn</MessageDropdown>}
                        </div>
                        <div
                            onClick={() => setShowUserDropdown(!showUserDropdown)}
                            style={{ marginLeft: "20px", position: "relative" }}
                        >
                            <UserIcon />
                            <DropdownIcon />
                            {showUserDropdown && (
                                <UserDropdown>
                                    <DropdownItem>
                                        <img src={profilePicture} alt="Profile" width="40" height="40" />
                                        <div>
                                            <strong>Sin ツ</strong>
                                            <br />
                                            admin2002@gmail.com
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>Thêm tài khoản</DropdownItem>
                                    <DropdownItem>Chuyển đổi thành tài khoản doanh...</DropdownItem>
                                    <DropdownItem>Cài đặt</DropdownItem>
                                    <DropdownItem>Bộ điều chỉnh bảng tin nhà</DropdownItem>
                                    <DropdownItem>Cài đặt ứng dụng Windows</DropdownItem>
                                    <DropdownItem>Cổng thông tin báo cáo vi phạm</DropdownItem>
                                    <DropdownItem>Quyền riêng tư của bạn</DropdownItem>
                                    <DropdownItem>Trung tâm trợ giúp</DropdownItem>
                                    <DropdownItem>Điều khoản Dịch vụ</DropdownItem>
                                    <DropdownItem>Chính sách quyền riêng tư</DropdownItem>
                                    <DropdownItem>Làm người thử nghiệm beta</DropdownItem>
                                    <DropdownItem>Đăng xuất</DropdownItem>
                                </UserDropdown>
                            )}
                        </div>
                    </div>
                </Form>
            </MenuBar>
            <PinGrid pinWidth={pinWidth}>
                {mappedPins}
            </PinGrid>
            {isLoading && <Loading src={loading} alt="Loading" />}
            {error && "Error: " + error}
        </>
    );
}

// Bọc ứng dụng với Router để điều hướng
export default function AppWrapper() {
   const basename = process.env.NODE_ENV === 'production' ? '/pinterest-clone' : '';
   return (
      <Router basename={basename}>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create" element={<CreatePage />} />
         </Routes>
      </Router>
   );
}
