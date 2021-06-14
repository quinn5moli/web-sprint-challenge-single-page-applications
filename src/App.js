import React from "react";
import HomePage from "./components/Homepage";
import Form from "./components/Form";
import Header from "./components/Header";
import {Route, Switch} from 'react-router';

export default function App(props){
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
