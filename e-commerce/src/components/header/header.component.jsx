import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

class Header extends React.Component {
  renderButton = () => {
    const { currentUser } = this.props;
    if (!currentUser.email) {
      return (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      );
    } else {
      return (
        <>
          <div className="option">{currentUser.displayName.toUpperCase()}</div>
          <div onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </div>
        </>
      );
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
        </div>
      </div>
    );
  }
}
export default Header;
