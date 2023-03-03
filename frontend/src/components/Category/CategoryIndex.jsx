import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { fetchProductsByCategory, recieveProductsByCategory } from '../../store/category';
import ProductIndex from '../Products/ProductsIndex/ProductIndex';
import './CategoryIndex.css'

const CategoryIndex = () => {

const { categoryId } = useParams();
const dispatch = useDispatch();
const products = useSelector(recieveProductsByCategory());
// const products = useSelector(state => Object.values(state.products))
console.log(products)
// const products = Object.values(productsObj);

    useEffect(() => {
        dispatch(fetchProductsByCategory(categoryId))
    },[dispatch, categoryId])

    return (    
        <div>
    {products.map((product) => (
        <div>{product.name}</div> 
        ))}
    </div>
    );
};

export default CategoryIndex