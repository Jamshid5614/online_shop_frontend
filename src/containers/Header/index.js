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
import { Menu } from "antd";

const { SubMenu } = Menu;

export default function Header() {

  const [screenSize, setScreenSize] = useState(0);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  window.onresize = function () {
    setScreenSize(window.innerWidth);
  };

  const closeMenuHandler = () => {
    setMenuIsVisible(false);
  };

  const openMenuHandler = () => {
    setMenuIsVisible(true);
  }

  useEffect(() => {
    setScreenSize(window.innerWidth);
  },[]);

  if (screenSize <= 984) {
    return (
      <>
        <StyledHeader className="mobile">
        <div className={menuIsVisible ? "visible-bg" : "hidden-bg"}></div>
          <div className="container">
            <ul className="header">
              <li>
                <span onClick={openMenuHandler} className="c-pointer">
                  <BiMenuAltLeft className="default-icons-size" />
                </span>
              </li>
              <li>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/profile"> 
                  <BiUser style={{ fontSize: "23px", marginRight: "25px" }} />
                </Link>
                <Link to="/cart">
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
            <Menu.Item key="2" icon={<CgMenuGridO className="default-icon-size" />}>
              <Link to="/categories">Categories</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FiTruck />}>
              <Link >Delivery</Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              style={{ marginBottom: "45px" }}
              icon={<BiMoney />}
            >
              <Link to="/delivery">Payment</Link>
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
              <Link to="/profile">
                <BiUser style={{ fontSize: "23px", marginRight: "35px" }} />
              </Link>
              <Link to="/cart">
                <BiCart style={{ fontSize: "25px" }} />
              </Link>
            </li>
          </ul>
        </div>
      </StyledHeader>
    </>
  );
}
