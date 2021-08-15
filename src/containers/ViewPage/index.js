import {useEffect} from 'react';
import axios from '../../utils/axios';



export default function ViewPage () {

    const fetchProduct = async () => {
        const productId = window.location.pathname.split('/products/view/')[1];
        const res = await axios(`/products/view/${productId}`);
        console.log(res);
    };

    useEffect(() => {
        fetchProduct()
    },[])
    return <>
        
    </>
}






