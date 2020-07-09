import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, toggleCart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItems.id} />
          ))
        ) : (
          <div className="empty-message">Your cart is empty</div>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCart();
        }}
      >
        Go To Chekout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(
  connect(mapStateToProps, { toggleCart })(CartDropDown)
);
