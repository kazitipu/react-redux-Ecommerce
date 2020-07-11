import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
import { selectItemCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectItemCount(state),
});

export default connect(mapStateToProps, { toggleCart })(CartIcon);
