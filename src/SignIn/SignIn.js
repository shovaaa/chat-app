import React from 'react';

import LargeInputBox from '../Common/LargeInputBox/LargeInputBox';
import Btn from '../Common/Btn/Btn';

import './SignIn.scss';

export default function SignIn() {
  return (
    <form>
      <div className="signin-container">
        <div className="center">
          <h1>Login to your account</h1>
        </div>
        
        <div className="spacer">
          <LargeInputBox type="text" id="email" name="email" placeholder="Email" />
        </div>
          <div className="spacer">
            <LargeInputBox type="text" id="pwd" name="pwd" placeholder="Password" />
          </div>

        <div className="center spacer-btn">
          <Btn btnType="submit" btnText="Sign In" className="btn" />
        </div>
      </div>
    </form>
  )
}