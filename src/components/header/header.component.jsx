import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/users/users.selector";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { setCurrentUser } from "../../redux/users/users.action";

class Header extends React.Component {
  renderButton = () => {
    const { currentUser } = this.props;
    // console.log(currentUser);

    if (!currentUser) {
      return (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      );
    } else {
      if (!currentUser.displayName) {
        return (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        );
      } else {
        return (
          <>
            <div className="option">
              {currentUser.displayName.toUpperCase()}
            </div>
            <div
              onClick={() => {
                auth.signOut();
              }}
              className="option"
            >
              SIGN OUT
            </div>
          </>
        );
      }
    }
  };

  render() {
    return (
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/shop" className="option">
            CONTACT
          </Link>
          {this.renderButton()}
          <CartIcon className="option" />
        </div>
        {this.props.hidden ? null : <CartDropDown />}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps, { setCurrentUser })(Header);
