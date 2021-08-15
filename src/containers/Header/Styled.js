import Styled from 'styled-components';


const StyledHeader = Styled.div`

box-shadow: 0px 0px 15px 0px #0000001F;

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 15px 0;
    li{
        a{
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #333333;
            font-weight: 600;
            text-decoration: none;
            position: relative;
            svg {
                fill: #00AC4E;
                font-size: 18px;
            }
            span{
                background-color: #EB5757;
                padding: 1px 6px;
                border-radius: 50%;
                font-size: 9px;
                color: #fff;
                position: absolute;
                right: -50%;
                top: -20%;
            }
        }
    }
    li.d-flex {
        display: flex;
        justify-content: space-between;
    }
}
.hidden-bg {
    display: none;
    transition: 0.5s;
}
.visible-bg {
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 1;
    transition: 0.5s;
}
&.mobile {
    li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .header {
        padding: 15px 10px;
        margin: 0;
    }
}
`;

const StyledMobileHeader = Styled.div`
    background-color: #001529;
    height: 100vh;
    width: 256px;
    position: absolute;
    top: 0;
    left: -300%;
    transition: 0.5s;
    z-index: 2;

    .ant-menu{
        width: 100% !important;
    }
    .mobile-header__header {
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        span {
            display: flex;
            justify-content: space-around;
            background-color: #00AC4E;
            height: 20px;
            width: 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            svg{
                color: #ffffff;
                font-size: 14px;
            }
        }
    }

    &.visible {
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export {StyledHeader,StyledMobileHeader};




































