import React from 'react';

import SmallInputBox from '../Common/SmallInputBox/SmallInputBox';
import LargeInputBox from '../Common/LargeInputBox/LargeInputBox';
import Btn from '../Common/Btn/Btn';
import Grid from '../Common/Grid/Grid';

import './SignUp.scss';

export default function SignUp() {
  return (
    <form>
      <div className="signup-container">
        <div className="center">
          <h1>Register your account</h1>
        </div>
        <div className="spacer">
          <LargeInputBox type="text" id="uname" name="uname" placeholder="User Name" />
        </div>

        <Grid>
          <div className="spacer">
            <SmallInputBox type="text" id="fname" name="fname" placeholder="First Name" />
          </div>

          <div className="spacer">
            <SmallInputBox type="text" id="lname" name="lname" placeholder="Last Name" />
          </div>
        </Grid>
        <div className="spacer">
          <LargeInputBox type="text" id="email" name="email" placeholder="Email" />
        </div>
        <Grid>
          <div className="spacer">
            <SmallInputBox type="text" id="pwd" name="pwd" placeholder="Password" />
          </div>

          <div className="spacer">
            <SmallInputBox type="text" id="repwd" name="repwd" placeholder="Confirm Password" />
          </div>
        </Grid>

        <div className="center spacer-btn">
          <Btn btnType="submit" btnText="Sign Up" className="btn"/>
        </div>
      </div>
    </form>
  )
}