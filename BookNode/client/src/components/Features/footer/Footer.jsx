import React from 'react'
import {ImHome3} from "react-icons/im";
import {ImPhone} from "react-icons/im";
import {ImMail3} from "react-icons/im";
import {ImFacebook2} from "react-icons/im";
import {ImBook} from "react-icons/im";
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer-root">
            <div className="footer-info">
                
            <h1>B{<ImBook/>}{<ImBook/> }k Node</h1>
            <div>
             <span>Lorem ipsum tenetur.</span>
             <br/>
             <span>Lorem ipsum tenetur.</span>               
            </div>

            </div>


           <div className="footer-root-icons">

               <div className="footer-icons">
               <i><ImHome3/></i>
               <i><ImPhone/></i>
               <i><ImMail3/></i>
               <i><ImFacebook2/></i>
               </div>
                
               <div className="footer-contact">
               <span>non quae cum quo.</span>
               <span>booknood@gmail.com</span>
               <span>09-548-3654</span>

               </div>

           </div>
        </div>
    )
}

export default Footer
