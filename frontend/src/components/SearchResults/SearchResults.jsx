import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../Products/ProductsIndex/ProductItem/ProductItem';
import './SearchResults.css'

const SearchResults = () => {
    const filteredProducts = useSelector(state => state.products);
    const products = Object.values(filteredProducts);
    const {query} = useParams();

    // if (!products) {
    //     <div className='no-products'>Sorry, no results found </div>
    // }

    return (
    <div>
        <div className='search-results-heading'>Search results for <span className='search-query'>"{query}"</span></div>
        < hr />
        <ul>
        {products.map(product => (
        <li key={product.id}>  <ProductItem product={product} /></li>
            ))}
        </ul>
        {products.length < 1 && (
            <div className='no-result-found-container'>
            <div className='no-products'>Sorry, no results found </div>
            </div>
        )}

    </div>
    );
};

export default SearchResults;
