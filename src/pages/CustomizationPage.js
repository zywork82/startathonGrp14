import React from 'react';
import { Link } from "react-router-dom";
import "../styles/CustomizationPage.css";

function CustomizationPage() {
    // Sample product data
    const products = [
        {
            id: 1,
            name: "Product 1",
            image: "image_url_1",
            description: "Description of Product 1"
        },
        {
            id: 2,
            name: "Product 2",
            image: "image_url_2",
            description: "Description of Product 2"
        },
        // Add more product data as needed
    ];

    const addToCart = (productId) => {
        // Add logic to add the product to cart
        console.log("Product added to cart with id:", productId);
    };

    return (
        <div className="customization-page">
            <h2>Products</h2>
            <table className='productList'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Product Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt={product.name} /></td>
                            <td>{product.description}</td>
                            <td><button onClick={() => addToCart(product.id)}>Add to Cart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default CustomizationPage;
