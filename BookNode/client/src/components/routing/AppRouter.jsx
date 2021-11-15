import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from "../Pages/Home/Home";
import  Payment  from "../Pages/payment/Payment";
import UserPage from "../Pages/userPage/UserPage";
import ContactUs from '../Pages/contactUs/ContactUs'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/UserPage">
        <UserPage />
      </Route>
      <Route path="/Payment">
        <Payment/>
      </Route>
      <Route path="/ContactUs">
        <ContactUs/>
      </Route>
      
    </Switch>
  );
}
export default AppRouter;

