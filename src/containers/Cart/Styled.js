import Styled from 'styled-components';


const StyledCart = Styled.div`
    img{
        width: 100%;
        border-radius: 8px;
        max-height: 160px;
        margin-bottom: 10px;
    }
    .p1{
        color: #000000;
        font-size: 16px;
        word-break: break-all;
        font-weight: 600;
        margin-top: 4px;
        margin-bottom: 0;
        letter-spacing: 0.5px;
        margin-bottom: 10px;
    }
    .p2 {
        color: #000000;
        font-size: 15px;
        word-break: break-all;
        font-size: 13px;
        letter-spacing: 0.5px;
    }
    .p3 {
        color: #000000;
        font-size: 20px;
        word-break: break-all;
    }
    button{
        background-color: #00AC4E;
        color: #fff;
        border-radius: 4px;
        padding: 7px 15px;
        border: none;
        color: #fff;
    }

    @media (min-width: 450px) and (max-width: 575px) {
        &{
            max-width: 70%;
            margin: 20px auto;

            .stars-block {
                height: 30px;
                align-items: center;
            }
        }
        img {
            height: 200px;
        }
    }

    @media (max-width: 449.9px) {
        &{
            max-width: 70%;
            margin: 20px auto;
            .stars-block {
                height: 30px;
                align-items: center;
            }
        }
        img {
            max-height: 180px;
        }
    }
`;



export {StyledCart};