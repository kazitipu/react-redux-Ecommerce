import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem, history }) => {
  const { imageUrl, name, price } = item;
  return (
    <div
      className="collection-item"
      style={{ cursor: "pointer" }}
      onClick={() => {
        history.push(`/products/${item.id}`);
      }}
    >
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};
export default connect(null, { addItem })(CollectionItem);
