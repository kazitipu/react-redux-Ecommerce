import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, firestore } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  unsubscribFromAuth = null;
  componentDidMount() {
    console.log(this.props);
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    var { displayName, email, password, confirmPassword } = this.state;

    if (password === confirmPassword) {
      try {
        this.unsubscribFromAuth = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        auth.onAuthStateChanged((user) => {
          firestore.doc(`users/${user.uid}`).set({
            displayName,
            email,
            password,
          });
        });

        this.props.setCurrentUser({
          displayName,
          email,
          password,
        });
      } catch (error) {
        alert(error);
      }
    } else {
      alert("your password doesn't match");
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  componentWillUnmount() {
    this.unsubscribFromAuth = null;
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I don't have an account</h1>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
          />
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="confirm password"
          />
          <div className="buttons">
            <CustomButton type="submit"> SIGN UP </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
