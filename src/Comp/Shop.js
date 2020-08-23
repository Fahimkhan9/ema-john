import React, { useState } from "react";
import fakeData from "../fakeData";
import "./Shop.css";
import Product from "./Product";
import Cart from "./Cart";

function Shop() {
  const f10 = fakeData.slice(1, 11);

  const [products, setProducts] = useState(f10);
  const [cart,setCart] = useState([])

const handleAddPro = (product) => {

    const newcart = [...cart, product]
    setCart(newcart)
}

  return (
    <div className="shop-con">
      <div className="product-con">
        {products.map((pd) => (
   <Product product={pd} handleAddPro={handleAddPro} />
        //   <Product />
        ))}
      </div>
      <div className="card-con">
     <Cart cart={cart} />
      </div>
    </div>
  );
}

export default Shop;
