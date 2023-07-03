
import React ,{useEffect,useState}from "react";
import'./addproduct.css';
import { useParams } from "react-router";

const AddProduct = () => {
  return (
    <div className="addOne">
      <h2>Add New Product</h2>
      <form className="Work">
        <div className="addTwo">
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter product name" />
        </div>
        <div className="addTwo">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" placeholder="Enter product description"></textarea>
        </div>
        <div className="addTwo">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" placeholder="Enter product price" />
        </div>
        <div className="addTwo">
          <label htmlFor="discount">Discount:</label>
          <input type="number" id="discount" name="discount" placeholder="Enter discount percentage" />
        </div>
        <button type='push'>Add Product</button>
      </form>
    </div>
  )
}
export default AddProduct;