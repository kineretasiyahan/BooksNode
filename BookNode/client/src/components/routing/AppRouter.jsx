import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/home/Home";
import Payment from "../Pages/payment/Payment";
// import UserPage from "../Pages/userPage/UserPage";
import Contact from "../Pages/contactUs/Contact";
import About from "../Pages/about/About";
import Books from "../Pages/books/Books";
import SignIn from "../Pages/signIn/SignIn";
import SignUp from "../Pages/signUp/SignUp";
import Footer from "../Features/footer/Footer";
import NavBar from "../Features/navBar/NavBar";
import { context, ContextProvidor } from "../../context/context";

const AppRouter = () => {
  const { user } = useContext(context);
  return (
    <>
      <ContextProvidor>
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
            {/* {user ? <Home /> : <SignUp />} */}
            <SignUp/>
          </Route>
          <Route path="/SignIn">
            {/* {user ? <Home /> : <SignIn />} */}
            <SignIn/>
          </Route>
        </Switch>
        <Footer />
      </ContextProvidor>
    </>
  );
};
export default AppRouter;
