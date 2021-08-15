import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  AiOutlinePhone,
  BiUser,
  BiCart,
  IoChevronBack,
  FiTruck,
  BiMoney,
  BiSupport,
  BiMenuAltLeft,
  FiHome,
  CgMenuGridO,
} from "react-icons/all";
import { StyledHeader, StyledMobileHeader } from "./Styled";
import { Menu, Modal } from "antd";
import { useDispatch } from "react-redux";
import { updateScreenAction } from "../../store/actions/ScreenActions";
import { useSelector } from "react-redux";

import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";

const { SubMenu } = Menu;

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const [screenSize, setScreenSize] = useState(0);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [cartElementsNumber, setCartElementsNumber] = useState(0);
  const [authType, setAuthType] = useState("login" || "sign-up");

  window.onresize = function () {
    dispatch(updateScreenAction({ size: window.innerWidth }));
    setScreenSize(window.innerWidth);
  };

  const closeMenuHandler = () => {
    setMenuIsVisible(false);
  };

  const openMenuHandler = () => {
    setMenuIsVisible(true);
  };

  const setAuthTypeHandler = (type) => {
    setAuthType(type);
  } 

  useEffect(() => {
    setScreenSize(window.innerWidth);
    dispatch(updateScreenAction({ size: window.innerWidth }));
  }, []);

  if (screenSize <= 984) {
    return (
      <>
        <Modal
          title={authType}
          centered
          visible={isModalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
        >
          {authType === "login" ? <Login setAuthTypeHandler={setAuthTypeHandler} /> : <SignUp setAuthTypeHandler={setAuthTypeHandler} />}
        </Modal>

        <StyledHeader className="mobile">
          <div
            className={menuIsVisible ? "visible-bg" : "hidden-bg"}
            onClick={closeMenuHandler}
          ></div>
          <div className="container">
            <ul className="header">
              <li className="">
                <span onClick={openMenuHandler} className="c-pointer">
                  <BiMenuAltLeft className="default-icons-size" />
                </span>
                <Link to="/" style={{ marginLeft: "20px" }}>
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li className="d-flex">
                {user.token.length === 0 ? (
                  <>
                    <Link onClick={() => {
                      setModalVisible(true);
                      setAuthType('sign-in')
                    }}>
                      <BiUser
                        style={{ fontSize: "23px", marginRight: "25px" }}
                      />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/profile">
                      <BiUser
                        style={{ fontSize: "23px", marginRight: "25px" }}
                      />
                    </Link>
                  </>
                )}
                <Link to="/cart">
                  <span>{cartElementsNumber}</span>
                  <BiCart style={{ fontSize: "25px" }} />
                </Link>
              </li>
            </ul>
          </div>
        </StyledHeader>

        <StyledMobileHeader className={menuIsVisible ? "visible" : ""}>
          <div className="mobile-header__header">
            <span onClick={closeMenuHandler}>
              <IoChevronBack />
            </span>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            theme="dark"
          >
            <Menu.Item key="1" icon={<FiHome />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<CgMenuGridO className="default-icon-size" />}
            >
              <Link to="/categories">Categories</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FiTruck />}>
              <Link to="/delivery">Delivery</Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              style={{ marginBottom: "45px" }}
              icon={<BiMoney />}
            >
              <Link to="/payment">Payment</Link>
            </Menu.Item>

            <Menu.Item key="5" icon={<BiSupport />}>
              <Link to="/support">Support</Link>
            </Menu.Item>
          </Menu>
        </StyledMobileHeader>
      </>
    );
  }

  return (
    <>
      <Modal
        title={authType}
        centered
        visible={isModalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        {authType === "login" ? <Login setAuthTypeHandler={setAuthTypeHandler} /> : <SignUp setAuthTypeHandler={setAuthTypeHandler} />}
      </Modal>

      <StyledHeader>
        <div className="container">
          <ul className="header">
            <li>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/categories">All categories</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/payment">Payment</Link>
            </li>
            <li>
              <a href="tel:+998990755406">
                <AiOutlinePhone /> (99) 075-54-06
              </a>
            </li>
            <li className="d-flex">
              {user.token.length === 0 ? (
                <>
                  <Link onClick={() => setModalVisible(true)}>
                    <BiUser style={{ fontSize: "23px", marginRight: "25px" }} />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile">
                    <BiUser style={{ fontSize: "23px", marginRight: "25px" }} />
                  </Link>
                </>
              )}
              <Link to="/cart">
                <span>{cartElementsNumber}</span>
                <BiCart style={{ fontSize: "25px" }} />
              </Link>
            </li>
          </ul>
        </div>
      </StyledHeader>
    </>
  );
}
