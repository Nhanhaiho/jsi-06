import React from "react";

const ProductItem = (props) => {
  console.log(props.productInfo);
  return (
    <div class="newProducts__item">
      <div class="item__image">
        <img src="./img/p6.jpg" alt="p6" />
        <div class="item__image-child">
          <img src="./img/p5.jpg" alt="p5" />
        </div>
      </div>
      <div class="item__content">
        <h3>"1"</h3>
        <p>
          <strong>XL/XXL/S</strong>
        </p>
        <div class="item__text">
          <p>
            <del>1000</del>
          </p>
          <p>
            <strong>700</strong>
          </p>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;