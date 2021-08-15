import Styled from 'styled-components';


const StyledWebSlider = Styled.div`
    width: 100%;
    height: 270px;
    background: linear-gradient(180deg, #F1F1FB 0%, #EBEBF5 100%);
    box-shadow: 0px 0px 18.0727px rgba(0, 0, 0, 0.03);
    border-radius: 18.0727px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    .row{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        .col-6 {
            padding: 25px 45px;
            button{
                background-color: #00AC4E;
                border: none;
                padding: 5px 20px;
                color: #fff;
                border-radius: 5px;
            }
        }
        .col-6 .p1 {
            font-size: 25px;
            font-weight: 500;
            line-height: 38px;
            font-size: 31.6273px;
        }
        .col-6 .p2 {
            color: #828282;
            font-size: 19.88px;
        }
        .col-6:last-child{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 60%;
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
            } 
        }
    }
    @media (max-width: 568px) {
        &{
            height: 190px;
            .row {
                .col-6 {
                    padding: 10px 20px;
                }
                .col-6 .p1 {
                    font-size: 20px;
                }
                
                .col-6 .p2 {
                    font-size: 15px;
                }
            }
        }
    }
`;

const StyledCategories = Styled.div`
    margin-top: 50px;
    .slick-arrow::before{
        color: #00AC4E;
    }
    a{
        text-decoration: none;
        color: #4F4F4F;
        font-size: 20px;
        padding: 13px;
        border-radius: 6px;
    }
    a.active {
        background-color: #00AC4E;
        color: #fff;
    }
    .slider-item {
        height: 50px;
        padding-top: 10px;
    }
`;

const StyledCategoriesMobile = Styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 40px;
    height: 80px;
    &::-webkit-scrollbar {
        width: 10px;
        height: 3px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 1px;
        background-color: #00AC4E;
        width: 2px;
    }
    li {
        min-width: 140px;
    }
    a.active {
        background-color: #00AC4E;
        color: #fff;
    }
    a{
        text-decoration: none;
        font-size: 15px;
        padding: 10px 14px;
        color: #4F4F4F;
    }
`;

const StyledJumbotron = Styled.div`
    background-color: #F2F2F2;
    border-radius: 18.0727px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 233px;
    margin-top: 50px;
    
    .col-6{
        p{
            font-size: 31px;
            margin-left: 25px;
        }
        button{
            margin-left: 25px;
        }
        img{
            max-width: 100%;
        }
    }
    .col-6:last-child {
        display: flex;
        justify-content: flex-end;
    }

    @media (min-width: 762px) and (max-width: 993px) {
        .col-6 {
            p{
                font-size: 25px;
            }
        }
    }
    @media (max-width: 761.9px) {
        .col-6 {
            p{
                font-size: 20px;
            }
        }
    }
    
`;

const StyledFooter = Styled.ul`
    background-color: #00AC4E;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 0;
    margin-top: 50px;
    li{
        display: block;
        margin: 0 15px;
    }
    span {
        font-size: 13px;
        color: #fff;
    }
    a{
        display: block;
        color: #fff;
    }
    p{
        color: #fff;
        font-size: 14px;
    }

    @media (max-width: 772px) {
        flex-wrap: wrap;
        li {
            width: 45%;
        }
    }   
`;

export {StyledWebSlider,StyledCategories,StyledCategoriesMobile,StyledJumbotron,StyledFooter};


























