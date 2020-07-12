import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, provider, firestore } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/users/users.action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.unsubscribeFromAuth = null;
  }

  onGoogleSignIn = () => {
    const { user } = auth.signInWithPopup(provider);
    if (user) {
      firestore.doc(`users/${user.uid}`).set({
        displayName: user.displayName,
        email: user.email,
        password: "",
      });
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>please sign in with your email and password</span>
        <form name="sign-in" onSubmit={this.handleSubmit}>
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
            <CustomButton type="submit" htmlFor="sign-in">
              SIGN IN
            </CustomButton>
            <CustomButton
              type="button"
              onClick={this.onGoogleSignIn}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(connect(null, { setCurrentUser })(SignIn));
