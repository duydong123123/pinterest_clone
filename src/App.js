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
import profilePicture from "./images/avatar-cute-vui-nhon.jpg"; // Đường dẫn đến ảnh đại diệnpn người dùng
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // Import các component từ react-router-dom
import InboxPopup from "./components/InboxPopup.style";
import HelpIcon from "./components/HelpIcon.style";
import SaveFromWebPage from "./components/SaveFromWebPage";
import UserProfilePage from "./components/UserProfilePage";
import userAvatar from "./images/meo.jpg";

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
    const [isHovering, setIsHovering] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [showHelpMenu, setShowHelpMenu] = useState(false); // State for the HelpIcon menu

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

    const toggleHelpMenu = () => {
        setShowHelpMenu(!showHelpMenu); // Toggle help menu visibility
    };

    return (
        <>
            <MenuBar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1001 }}>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>
                <ButtonGroup>
                    <CustomButton onClick={() => navigate("/")}>Trang Chủ</CustomButton>
                    <CustomButton>Tạo</CustomButton>
                </ButtonGroup>
                <Form style={{ marginLeft: "10px", display: "flex", alignItems: "center" }}>
                    <SearchBar placeholder="Search " />
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "20px", position: "relative" }}>
                        <NotificationIcon style={{display:"flex" , marginRight:"20px"}}/>
                        <MessageIcon style={{display:"flex" , marginRight:"20px"}}/>
                        <UserIcon style={{display:"flex" , marginRight:"20px"}}/>
                        <DropdownIcon style={{display:"flex" , marginRight:"10px"}}/>
                    </div>
                </Form>
            </MenuBar>
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

            {/* HelpIcon without needing an image */}
            <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
            <div
                style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: isHovering ? "#ccc" : "#f0f0f0", // Change color on hover
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    fontSize: "40px",
                    transition: "background-color 0.3s ease", // Smooth transition
                    position: "fixed", // Use fixed to make sure it stays in place
                    bottom: "20px",  // Ensure it is visible at the bottom of the screen
                    right: "20px",   // Ensure it is positioned to the right
                    zIndex: 1001,    // Ensure it is on top
                }}
                onClick={toggleHelpMenu}
                onMouseEnter={() => setIsHovering(true)} // Handle hover enter
                onMouseLeave={() => setIsHovering(false)} // Handle hover leave
            >
                ?
            </div>
                {showHelpMenu && (
                    <div
                    style={{
                        position: "fixed", // Use fixed to keep it always visible
                        bottom: "10px", // Place it above the help icon
                        right: "100px",  // Align with the help icon
                        backgroundColor: "#fff",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        zIndex: 1000,
                        padding: "10px",
                        width: "350px",
                        maxHeight: "590px", // Limit height and allow scrolling
                        overflowY: "auto",
                    }}
                >
                    <div style={{ padding: "10px 0", fontWeight: "bold" }}>Tài nguyên</div>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {["Cách tạo Ghim", "Các cách thực hành tốt nhất", "Công cụ Pinterest Trends", "Trung tâm Trợ giúp Phân tích", "Quy tắc dành cho Người tạo"].map((item, index) => (
                            <li key={index} style={{ padding: "8px 0", cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
                                <span>{item}</span>
                                <span>↗</span>
                            </li>
                        ))}
                    </ul>

                    <div style={{ padding: "10px 0", fontWeight: "bold" }}>Liên hệ chúng tôi</div>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {["Chia sẻ phản hồi", "Nhận trợ giúp"].map((item, index) => (
                            <li key={index} style={{ padding: "8px 0", cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
                                <span>{item}</span>
                                <span>↗</span>
                            </li>
                        ))}
                    </ul>

                    <div style={{ padding: "10px 0", fontWeight: "bold" }}>Liên kết bổ sung</div>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {["Giới thiệu", "Báo chí", "Doanh nghiệp", "Nghề nghiệp", "Nhà phát triển", "Lượt xóa", "Chính sách quyền riêng tư", "Quảng cáo Cá nhân hóa", "Quyền riêng tư của bạn", "Từ khóa"].map((item, index) => (
                            <li key={index} style={{ padding: "8px 0", cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
                                <span>{item}</span>
                                <span>↗</span>
                            </li>
                        ))}
                    </ul>
                </div>
                )}
            </div>
        </>
    );
};



// trang chủ
function App() {
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [showNotification, setShowNotification] = useState(false);
    const [showMessagePopup, setShowMessagePopup] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const navigate = useNavigate(); 

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
        navigate("/create");
    };
    const handleUserIconClick = () => {
        navigate("/user-profile");  // Điều hướng đến trang UserProfilePage
    };
    const toggleDropdown = () => {
        setShowUserDropdown(prevState => !prevState);
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
                    <CustomButton onClick={handleCreateClick}>Tạo</CustomButton>
                </ButtonGroup>
                <Form onSubmit={onFormSubmit} style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
                    <SearchBar
                        placeholder="Search"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        style={{ height: "48px" }}
                    />
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "20px", position: "relative" }}>
                        {/* Icon Thông báo */}
                        <div
              onClick={() => setShowNotification(!showNotification)} // Toggle trạng thái của menu khi nhấn vào icon
              style={{ cursor: "pointer", position: "relative" }}
            >
              <NotificationIcon />
              {showNotification && (
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: "100%",
                                        right: 0,
                                        backgroundColor: "#fff",
                                        border: "1px solid #ddd",
                                        borderRadius: "10px",
                                        width: "300px",
                                        zIndex: 1000,
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                      }}
                                    >
                                      <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                        <strong>Cập nhật</strong>
                                      </div>
                                      <div style={{ padding: "10px", borderBottom: "1px solid #ddd", display: "flex", alignItems: "center", position: "relative" }}>
                                        {/* Hình ảnh trước thông báo */}
                                        <img src={{userAvatar}} alt="User Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
                                        <div>
                                          <p style={{ margin: 0 }}>Bạn tinh mắt đấy</p>
                                          <small>5 ngày trước</small>
                                        </div>
                                        {/* Icon ba chấm để mở menu */}
                                        <div
                                          onClick={() => setShowNotification(!showNotification)}
                                          style={{ position: "absolute", right: "10px", cursor: "pointer" }}
                                        >
                                          <DropdownIcon />
                                          {showNotification && (
                                            <div
                                              style={{
                                                position: "absolute",
                                                top: "100%",
                                                right: 0,
                                                backgroundColor: "#fff",
                                                border: "1px solid #ddd",
                                                borderRadius: "5px",
                                                padding: "5px 0",
                                                zIndex: 1000,
                                                width: "150px",
                                              }}
                                            >
                                              <div style={{ padding: "10px", cursor: "pointer" }}>Xóa cập nhật</div>
                                              <div style={{ padding: "10px", cursor: "pointer" }}>Xem cài đặt thông báo</div>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <div style={{ padding: "10px" }}>
                                        <p>Ý tưởng nào thật sự mang phong cách của bạn? Hãy tạo Ghim đầu tiên của bạn để chia sẻ điều truyền cảm hứng cho bạn.</p>
                                        <small>1 tháng trước</small>
                                      </div>
                                    </div>
                                  )}
                                </div>
                        {/* Icon Tin nhắn */}
                        <div
                            onClick={() => setShowMessagePopup(!showMessagePopup)}
                            style={{ marginLeft: "10px", position: "relative" }}
                        >
                            <MessageIcon />
                            {showMessagePopup && <InboxPopup onClose={() => setShowMessagePopup(false)} />}
                        </div>
    
                        {/* Icon User: Điều hướng đến trang cá nhân */}
                        <div
                            onClick={() => navigate("/user-profile")} // Điều hướng đến trang cá nhân khi nhấn vào UserIcon
                            style={{ marginLeft: "20px", cursor: 'pointer' }}
                        >
                            <UserIcon />
                        </div>
    
                        {/* Icon Dropdown: Hiển thị menu dropdown */}
                        <div
                            onClick={() => setShowUserDropdown(!showUserDropdown)} // Hiển thị dropdown khi nhấn vào DropdownIcon
                            style={{ marginLeft: "10px", cursor: 'pointer' }}
                        >
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
   const basename = process.env.NODE_ENV === 'production' ? '/pinterest_clone' : '';
   return (
      <Router basename={basename}>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/save-url" element={<SaveFromWebPage />} /> {/* Thêm dòng này */}
            <Route path="/user-profile" element={<UserProfilePage />} />
         </Routes>
      </Router>
   );
}
