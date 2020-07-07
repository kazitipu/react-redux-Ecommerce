import React from "react";
import "./signIn-and-signUp-page.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

class SignInAndSignUpPage extends React.Component {
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn setCurrentUser={this.props.setCurrentUser} />
        <SignUp setCurrentUser={this.props.setCurrentUser} />
      </div>
    );
  }
}
export default SignInAndSignUpPage;
