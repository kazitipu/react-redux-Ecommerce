import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, provider, firestore } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    firestore
      .collection("users")
      .get()
      .then((snapShot) => {
        var user = null;
        snapShot.forEach((doc) => {
          if (doc.data().email === email && doc.data().password === password) {
            user = doc.data().displayName;
            this.props.setCurrentUser({
              displayName: doc.data().displayName,
              email: doc.data().email,
              password: doc.data().password,
            });
            return user;
          }
        });
      });

    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onGoogleSignIn = async () => {
    await auth.signInWithPopup(provider);
    auth.onAuthStateChanged((user) => {
      if (user) {
        firestore.doc(`users/${user.uid}`).set({
          displayName: user.displayName,
          email: user.email,
          password: "",
        });
      }
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>please sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit"> SIGN IN </CustomButton>
            <CustomButton onClick={this.onGoogleSignIn} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SignIn);
