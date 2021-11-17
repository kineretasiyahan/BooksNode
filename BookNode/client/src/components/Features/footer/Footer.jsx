import React from 'react'
import {ImHome3} from "react-icons/im";
import {ImPhone} from "react-icons/im";
import {ImMail3} from "react-icons/im";
import {ImFacebook2} from "react-icons/im";
import {ImBook} from "react-icons/im";

const Footer = () => {
    return (
        <div>
            <h1>B{<ImBook/>}{<ImBook/> }k Node</h1>

            <span>Lorem ipsum tenetur.</span>
            <span>Lorem ipsum tenetur.</span>

           <div>
               <i><ImHome3/></i>
               <i><ImPhone/></i>
               <i><ImMail3/></i>
               <i><ImFacebook2/></i>

               <span>non quae cum quo.</span>
           </div>
        </div>
    )
}

export default Footer
