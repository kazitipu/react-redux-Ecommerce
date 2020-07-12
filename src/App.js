import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signIn-and-signUp-page/signIn-and-signUp-page.component";
import { auth, firestore } from "./firebase/firebase.utils";
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
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        await firestore
          .doc(`users/${user.uid}`)
          .get()
          .then((doc) => {
            // console.log(doc.data());
            this.props.setCurrentUser({
              displayName: doc.data().displayName,
              email: doc.data().email,
              password: doc.data().password,
            });
          });
      } else {
        this.props.setCurrentUser({
          displayName: "",
          email: "",
          password: "",
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth = null;
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
