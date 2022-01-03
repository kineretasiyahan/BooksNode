import {useContext, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/home/Home";
import Payment from "../Pages/payment/Payment";
import Contact from "../Pages/contactUs/Contact";
import About from "../Pages/about/About";
import Books from "../Pages/books/Books";
import SignIn from "../Pages/signIn/SignIn";
import SignUp from "../Pages/signUp/SignUp";
import Footer from "../Features/footer/Footer";
import NavBar from "../Features/navBar/NavBar";
import { ContextProvider, Context } from "../../context/context";
import { userDecoding } from "../utils/userDecoding";

const AppRouter = () => {

  let { user } = useContext(Context);
  if (user) {
    user = userDecoding(user);
  }

  return (
    <>
      <ContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Books">
            <Books />
          </Route>
          <Route path="/Payment">
            <Payment />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
        </Switch>
        <Footer />
      </ContextProvider>
    </>
  );
};
export default AppRouter;
