import React, { Switch } from "react";
import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
// import  Payment  from "../Pages/payment/Payment";
import UserPage from "../Pages/userPage/UserPage";
// import ContactUs  from "../../Components/Pages/contactUs/ContactUs"

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/UserPage">
        <UserPage />
      </Route>
    </Switch>
  );
}
export default AppRouter;

