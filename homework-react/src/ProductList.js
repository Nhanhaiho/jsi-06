import React from "react";
import ProductItem from "./ProductItem";
import {products} from "./mock/index"
function ProductList(props) {
    console.log(props.products)
  return (
    <section class="newProducts">
      <h1>News Products</h1>
      <div class="newProducts__container">
              {/* <ProductItem productInfo={products[0]} />
              <ProductItem productInfo={products[1]} />
              <ProductItem productInfo={products[2]} /> */}
        <ProductItem productInfo={products[2]} />
      
      </div>
    </section>
  );
}

export default ProductList;