import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import ChatMain from './ChatMain/ChatMain';

import './App.scss';
import './variable.scss';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/chat-main">
            <ChatMain />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}