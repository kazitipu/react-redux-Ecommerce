import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signIn-and-signUp-page/signIn-and-signUp-page.component";
import { auth, firestore } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.subcription = null;

    this.state = {
      currentUser: {
        displayName: "",
        email: "",
        password: "",
      },
    };
  }
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
            this.setState({
              currentUser: {
                displayName: doc.data().displayName,
                email: doc.data().email,
                password: doc.data().password,
              },
            });
          });
      } else {
        this.setState({
          currentUser: {
            displayName: "",
            email: "",
            password: "",
          },
        });
      }
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth = null;
  }

  setCurrentUser = (user) => {
    this.setState({ currentUser: user });
  };
  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          component={() => (
            <SignInAndSignUpPage setCurrentUser={this.setCurrentUser} />
          )}
        />
      </BrowserRouter>
    );
  }
}
export default App;
