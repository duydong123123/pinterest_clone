import React, { useState, useRef, useCallback } from "react";
import useSearch from "./hooks/useSearch";
// import { GlobalStyle } from "./components/globalStyles.style";
import { Loading } from "./components/Loading.style";
// import { MenuBar } from "./components/MenuBar.style";
// import { Logo } from "./components/Logo.style";
// import { Form } from "./components/Form.style";
// import { SearchBar } from "./components/SearchBar.style";
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
// import { ButtonGroup, CustomButton } from "./components/ButtonGroup.style"; // Import button styles
// import { NotificationIcon, MessageIcon, UserDropdown, UserIcon, DropdownIcon, DropdownItem } from "./components/Icons.style";
// import logo from "./images/logo.png";
import loading from "./images/loading.svg";
import downloadIcon from "./images/download-icon.png";
import goIcon from "./images/top-right-arrow.png";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // Import các component từ react-router-dom
import SaveFromWebPage from "./components/SaveFromWebPage";
import UserProfilePage from "./components/user/UserProfilePage";
import AddAccountPage from './components/optional/AddAccountPage';
import SettingsPage from "./components/optional/SettingsPage";
import Header from "./components/header/Header";
// import { useLocation } from "react-router-dom"; // Chỉ giữ useLocation nếu useNavigate đã được import ở trên

import UpgradeToBusiness from "./components/optional/UpgradeToBusiness"; 



// Sidebar Component
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
      {/* Container cho nút mũi tên và dấu cộng */}
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '24px',
          marginBottom: '10px',
          height: isOpen ? 'auto' : '100%', // Chiều cao tối ưu khi đóng
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
          {/* Container cho Bản nháp Ghim và mũi tên ngược */}
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
// trang chủ tạo
const CreatePage = () => {
    const navigate = useNavigate();
    // const [isHovering, setIsHovering] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    // const [showHelpMenu, setShowHelpMenu] = useState(false);

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
            <Header/>
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



// trang chủ
function MainApp() {
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    // const [showNotification, setShowNotification] = useState(false);
    // const [showDropdownMenu, setShowDropdownMenu] = useState(false); 
    // const [showMessagePopup, setShowMessagePopup] = useState(false);
    // const [showUserDropdown, setShowUserDropdown] = useState(false);
    // const navigate = useNavigate();
    // const location = useLocation();

    const pinWidth = 252;

    const { isLoading, error, pins } = useSearch(query, pageNumber);

    const observer = useRef();
    const lastPin = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading]);


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
            <Header/>
            {/* {location.pathname !== "/create" && (
                <MenuBar>
                    <Logo>
                        <img src={logo} alt="Logo" />
                    </Logo>
                    <ButtonGroup>
                        <CustomButton>Trang Chủ</CustomButton>
                        <CustomButton onClick={() => navigate("/create")}>Tạo</CustomButton>
                    </ButtonGroup>
                    <Form onSubmit={onFormSubmit} style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
                        <SearchBar
                            placeholder="Search"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            style={{ height: "48px" }}
                        />
                    </Form>
                </MenuBar>
            )} */}

            <PinGrid pinWidth={pinWidth}>
                {mappedPins}
            </PinGrid>
            {isLoading && <Loading src={loading} alt="Loading" />}
            {error && "Error: " + error}
        </>
    );
}
export default function AppWrapper() {
   const basename = process.env.NODE_ENV === 'production' ? '/pinterest_clone' : '';
   return (
      <Router basename={basename}>
         <Routes>
            <Route path="/" element={<MainApp />} /> {/* Sử dụng MainApp thay vì App */}
            <Route path="/create" element={<CreatePage />} />
            <Route path="/save-url" element={<SaveFromWebPage />} /> {/* Thêm dòng này */}
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/add-account" element={<AddAccountPage />} /> {/* Thêm dòng này */}
            <Route path="/settings" element={<SettingsPage />} />  {/* Route cho trang cài đặt */}
            <Route path="/upgrade" element={<UpgradeToBusiness/>} /> {/* Route cho trang chuyển đổi */}
         </Routes>
      </Router>
   );
}