import React, { useEffect, useState } from 'react';
// import './productinfo.css';
import { useParams } from 'react-router-dom';


const Productinfo = () => {
  const { productId } = useParams();
  const [product, setProductInfo] = useState(null);
  useEffect(() => {
    const getProductinfo = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const info= await response.json();
        setProductInfo(info);
      } catch (error) {
        console.error(error);
      }
    };
    getProductinfo();
  }, [productId]);
  if (!product) {
    return <p>Loading product information...</p>;
  }
  return (
    <div className='oneProduct'>
      <h1>Product Details</h1>

      <div className='allproducts'>
        <img src={product.thumbnail} alt={product.title} className='images'/>
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>Ksh {product.price}</p>
    
      </div>
    </div>
  );
};
export default Productinfo;