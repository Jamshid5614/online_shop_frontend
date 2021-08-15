import { useState, useEffect } from "react";
import Header from "../Header";
import {
  StyledWebSlider,
  StyledCategories,
  StyledCategoriesMobile,
  StyledJumbotron,
  StyledFooter
} from "./Styled";
import Slider from "react-slick";
import Cart from "../Cart";
import axios from "../../utils/axios";
import SliderImg from "../../assets/images/slider-img.svg";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pagination,Modal } from 'antd';
import truckImg from '../../assets/images/truck.svg';
import defaultCartImg from '../../assets/images/defaultCart.jpg';

import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';

export default function Home({isModalVisible}) {
  const store = useSelector((state) => state);

  const [products, setProducts] = useState([]);
  const [modalVisible,setModalVisible] = useState(isModalVisible || false);
  const [authType,setAuthType] = useState('login' || 'sign-up');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const setAuthTypeHandler = (type) => {
    setAuthType(type);
  } 

  const fetchProducts = async () => {
    try {
      const res = await axios("/products");
      setProducts(res.data.payload)
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <>
      <Header />
      <div className="container">
        <Slider {...settings}>
          <StyledWebSlider>
            <div className="row p-0 m-0">
              <div className="col-6">
                <p className="p1">First order gift.</p>
                <p className="p2">
                  Get 500 rubles for subscribing to the newsletter
                </p>
                <button>Subscribe</button>
              </div>
              <div className="col-6">
                <img src={SliderImg} alt="web slider" />
              </div>
            </div>
          </StyledWebSlider>
          <StyledWebSlider>
            <div className="row p-0 m-0">
              <div className="col-6">
                <p className="p1">First order gift.</p>
                <p className="p2">
                  Get 500 rubles for subscribing to the newsletter
                </p>
                <button>Subscribe</button>
              </div>
              <div className="col-6">
                <img src={SliderImg} alt="web slider" />
              </div>
            </div>
          </StyledWebSlider>
          <StyledWebSlider>
            <div className="row p-0 m-0">
              <div className="col-6">
                <p className="p1">First order gift.</p>
                <p className="p2">
                  Get 500 rubles for subscribing to the newsletter
                </p>
                <button>Subscribe</button>
              </div>
              <div className="col-6">
                <img src={SliderImg} alt="web slider" />
              </div>
            </div>
          </StyledWebSlider>
        </Slider>
        {store.screen.size < 665 ? (
          <>
            <StyledCategoriesMobile>
              <li className="slider-item">
                <NavLink
                  activeClassName="active"
                  className="active"
                  to="/categories/laptops"
                >
                  Laptops
                </NavLink>
              </li>
              <li className="slider-item">
                <NavLink activeClassName="active" to="/categories/computers">
                  Computers
                </NavLink>
              </li>
              <li className="slider-item">
                <NavLink activeClassName="active" to="/categories/phones">
                  Phones
                </NavLink>
              </li>
              <li className="slider-item">
                <NavLink activeClassName="active" to="/categories/gadgets">
                  Gadgets
                </NavLink>
              </li>
              <li className="slider-item">
                <NavLink activeClassName="active" to="/categories/clothes">
                  Clothes
                </NavLink>
              </li>
              <li className="slider-item">
                <NavLink activeClassName="active" to="/categories/for-gamers">
                  For Gamers
                </NavLink>
              </li>
            </StyledCategoriesMobile>
          </>
        ) : (
          <>
            <div className="container">
              <StyledCategories>
                <Slider {...settings2}>
                  <li className="slider-item">
                    <NavLink
                      activeClassName="active"
                      className="active"
                      to="/categories/laptops"
                    >
                      Laptops
                    </NavLink>
                  </li>
                  <li className="slider-item">
                    <NavLink
                      activeClassName="active"
                      to="/categories/computers"
                    >
                      Computers
                    </NavLink>
                  </li>
                  <li className="slider-item">
                    <NavLink activeClassName="active" to="/categories/phones">
                      Phones
                    </NavLink>
                  </li>
                  <li className="slider-item">
                    <NavLink activeClassName="active" to="/categories/gadgets">
                      Gadgets
                    </NavLink>
                  </li>
                  <li className="slider-item">
                    <NavLink activeClassName="active" to="/categories/clothes">
                      Clothes
                    </NavLink>
                  </li>
                  <li className="slider-item">
                    <NavLink
                      activeClassName="active"
                      to="/categories/for-gamers"
                    >
                      For Gamers
                    </NavLink>
                  </li>
                </Slider>
              </StyledCategories>
            </div>
          </>
        )}
        {products.length === 0 ? (
          <></>
        ) : (
          <h4 className="fw-bold mt-4">Stock</h4>
        )}
        <div className="row">
          {products.length === 0 ? (
            <>
              <h2 className="text-center mt-5 pt-5 mb-5">
                No Product Available
              </h2>
            </>
          ) : (
            <>
              {products.map((item) => {
                return (
                  <>
                    <div className="col-sm-6 col-md-3">
                      <Link
                        to={`/products/view/${item._id}`}
                        className="text-decoration-none"
                      >
                        <Cart
                          model={item.model}
                          price={item.price}
                          description={item.description}
                          rating={item.rating}
                          img={item.images[0] || defaultCartImg}
                        />
                      </Link>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
        {
          store.user.isAdmin ? <>
            <Link to="/products/new" className="my-button">Create Product</Link>
          </> : <></>
        }
        <div className="pagination my-3 mx-auto d-flex justify-content-center align-items-center">
          <Pagination
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            total={500}
          />
        </div>
        <StyledJumbotron className="jumbotron row">
              <div className="col-6">
                <p>Free delivery in Moscow and the Region from 2999 RUB!</p>
                <button className="my-button">Checkout</button>
              </div>
              <div className="col-6">
                <img src={truckImg} alt="" />
              </div>
        </StyledJumbotron>
      </div>
      <StyledFooter>
        <li>
          <span>Free call within the Russian Federation</span>
          <p>+7 (831) 282-60-00</p>
          <span>Working hours on weekdays from 9:00 to 18:00</span>
          <span>Email: info@.ru</span>
          <Link to="/support">Support</Link>
          <span>Copyright © 2020. Pirosmani</span>
        </li>
        <li>
            <span>To receive orders</span>
            <p>+7 (904) 066-46-85</p>
        </li>
        <li>
          <p>We are on VKontakte</p>
          <p>We are on instagram</p>
        </li>
        <li>
          <div className="d-flex">
            <Link onClick={() => {
              setModalVisible(true)
              setAuthType('login');
            }}>Login</Link> 
            <p className="mx-2">/</p> 
            <Link onClick={() => {
              setModalVisible(true);
              setAuthType('sign-up');
            }}>Register</Link></div>
        </li>
      </StyledFooter>
      <Modal
        title={authType}
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        {
          authType === 'login' ? <Login setAuthTypeHandler={setAuthTypeHandler} /> : <SignUp setAuthTypeHandler={setAuthTypeHandler} />
        }
      </Modal>
    </>
  );
}
