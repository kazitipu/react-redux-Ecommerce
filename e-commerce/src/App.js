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
            console.log(doc.data());
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

  setCurrentUser = (user) => {
    this.props.setCurrentUser({ currentUser: user });
  };
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          component={() => (
            <SignInAndSignUpPage setCurrentUser={this.setCurrentUser} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { setCurrentUser })(App);
