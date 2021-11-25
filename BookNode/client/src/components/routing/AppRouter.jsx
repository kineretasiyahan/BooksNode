import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/home/Home'
import  Payment  from "../Pages/payment/Payment";
// import UserPage from "../Pages/userPage/UserPage";
import Contact from '../Pages/contactUs/Contact'
import Abut from '../Pages/about/About';
import Books from '../Pages/books/Books'
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import Footer from "../Features/footer/Footer";
import NavBar from "../Features/navBar/NavBar";


const AppRouter = () => {
  return (
    <>
      <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Books">
        <Books />
      </Route>
      <Route path="/Payment">
        <Payment/>
      </Route>
      <Route path="/Abut">
        <Abut />
      </Route>
      <Route path="/Contact">
        <Contact/>
      </Route>
      

      <Route path="/Register">
        <Register/>
      </Route>
      <Route path="/Login">
        <Login/>
      </Route>
      
    </Switch>
    <Footer/>
   </>
    
  );
}
export default AppRouter;

