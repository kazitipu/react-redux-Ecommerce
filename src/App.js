import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signIn-and-signUp-page/signIn-and-signUp-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/users/users.action";
import CheckoutPage from "./pages/chekcout/checkout.component";
import CollectionPage from "./pages/collection/collection.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/users/users.selector";
import { Redirect } from "react-router";

class App extends React.Component {
  unsuscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }

      this.props.setCurrentUser({ displayName: "", email: "", password: "" });
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/shop/:collectionId" component={CollectionPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          component={() =>
            !this.props.user.displayName ? (
              <SignInAndSignUpPage />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});
export default connect(mapStateToProps, { setCurrentUser })(App);
