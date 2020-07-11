import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeCartItem,
  removeSingleCartItem,
  addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  removeCartItem,
  removeSingleCartItem,
  addItem,
}) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeSingleCartItem(item)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};
export default connect(null, { removeCartItem, removeSingleCartItem, addItem })(
  CheckoutItem
);
