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
import CreatePage from "./components/create/CreatePage";

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
            <Route path="/save-url" element={<SaveFromWebPage />} /> {/* Route thêm trang lưu */}
            <Route path="/user-profile" element={<UserProfilePage />} />{/* Route thêm trang user */}
            <Route path="/add-account" element={<AddAccountPage />} /> {/* Route thêm trang tk */}
            <Route path="/settings" element={<SettingsPage />} />  {/* Route cho trang cài đặt */}
            <Route path="/upgrade" element={<UpgradeToBusiness/>} /> {/* Route cho trang chuyển đổi */}
         </Routes>
      </Router>
   );
}