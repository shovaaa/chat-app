import React from 'react';
import {
  Link
} from "react-router-dom";
import Btn from '../Common/Btn/Btn';

import './Main.scss';

export default function Main() {
  return (
    <div className="main-container">
      <h1>Welcome to this part of Internet</h1>
      <h3>Are you ready to start chatting?</h3>
      <div className="spacer-btn">
        <Link to="/signup">
          <Btn btnText="Sign Up" btnType="submit" className="btn" />
        </Link>
      </div>
    </div>
  )
}