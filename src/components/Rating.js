import starf from '../assets/images/star.svg';
import star from '../assets/images/star (1).svg';
import '../App.css';

export default function Rating ({rating}) {


    switch(rating) {
        case 1: {
            return <div className="d-flex stars-block">
                <img src={starf} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
        }
        case 2: {
            return <div className="d-flex stars-block">
                <img src={starf} alt="star" />
                <img src={starf} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
        }
        case 3: {
            return <div className="d-flex stars-block">
                <img src={starf} alt="star" />
                <img src={starf} alt="star" />
                <img src={starf} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
        }
        case 4: {
            return <div className="d-flex stars-block"><img src={starf} alt="star" />
            <img src={starf} alt="star" />
            <img src={starf} alt="star" />
            <img src={starf} alt="star" />
            <img src={star} alt="star" /></div>
        }
        case 5: {
            return <div className="d-flex stars-block"><img src={starf} alt="star" />
            <img src={starf} alt="star" />
            <img src={starf} alt="star" />
            <img src={starf} alt="star" />
            <img src={starf} alt="star" /></div>
        }
        default: {
            return <div className="d-flex stars-block"><img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" /></div>
        }
    }
}