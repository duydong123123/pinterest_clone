import React, { useState, useRef, useCallback } from "react";
import useSearch from "./hooks/useSearch";
import { Loading } from "./components/Loading.style";
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
import loading from "./images/loading.svg";
import downloadIcon from "./images/download-icon.png";
import goIcon from "./images/top-right-arrow.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import các component từ react-router-dom
import SaveFromWebPage from "./components/SaveFromWebPage";
import UserProfilePage from "./components/user/UserProfilePage";
import AddAccountPage from './components/pages/AddAccountPage';
import Header from "./components/header/Header";

import UpgradeToBusiness from "./components/pages/UpgradeToBusiness"; 
import CreatePage from "./components/create/CreatePage";
import NewsFeedSettings from "./components/pages/NewsFeedSettings";
import LayoutSetting from "./components/sidebar/LayoutSetting";
import SettingsPage from "./components/pages/SettingsPage";
import ManageAccountPage from "./components/pages/ManageAccountPage";

// trang chủ
function MainApp() {
    // const [iunpt, setInput] = useState("");
    const [query] = useState("");
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

    const handleDownload = async (url) => {
        try {
            // Sử dụng fetch để lấy ảnh dưới dạng blob
            const response = await fetch(url);
            const blob = await response.blob();
            
            // Tạo URL tạm thời từ blob
            const blobURL = window.URL.createObjectURL(blob);
    
            // Tạo thẻ <a> để tải ảnh
            const link = document.createElement("a");
            link.href = blobURL;
            link.setAttribute("download", "image.jpg"); // Tên file tải về
            document.body.appendChild(link);
    
            // Kích hoạt sự kiện click để tải ảnh
            link.click();
    
            // Xóa thẻ <a> và URL blob sau khi tải
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobURL);
        } catch (error) {
            console.error("Tải ảnh thất bại:", error);
        }
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
                        <SaveButton>Lưu</SaveButton>
                    </PinElements>
                    <PinElements>
                        <PageButton background={goIcon}>
                            {pin.user.username}
                        </PageButton>
                        <DownloadButton onClick={() => handleDownload(pin.urls.full)}>
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
            <Route path="/save-url" element={<SaveFromWebPage />} /> {/* Route thêm trang lưu */}
            <Route path="/add-account" element={<AddAccountPage />} /> {/* Route thêm trang tk */}
            <Route path="/upgrade" element={<UpgradeToBusiness/>} /> {/* Route cho trang chuyển đổi */}


            <Route path="/settings" element={<LayoutSetting />} /> 
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/settings/feed" element={<NewsFeedSettings />} />
            <Route path="/settings/profile" element={<SettingsPage />} />
            <Route path="/settings/account" element={<ManageAccountPage />} />
         </Routes>
      </Router>
   );
}