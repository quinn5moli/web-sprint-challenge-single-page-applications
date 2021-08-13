import React from "react";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path ='/pizza' component={Form}/>
      </Switch>
      </>
  );
};

export default App;