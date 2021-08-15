import {StyledCart} from './Styled';
import Rating from '../../components/Rating';

export default function Cart ({img,model,description,rating,price}) {

    const addToCartHandler = () => {

    };

    return <>
        <StyledCart>
            <img src={img} alt={model} />
            <p className="p1">{model}</p>
            <p className="p2">{description.length > 100 ? <>{description.slice(0,100)}...</> : description }</p>
            <Rating rating={rating} />
            <p className="p3">{price} $</p>
            <button onClick={addToCartHandler}>Add to cart</button>
        </StyledCart>
    </>
}







