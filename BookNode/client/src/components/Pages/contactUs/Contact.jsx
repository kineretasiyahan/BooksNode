import React,{useState} from 'react'
import Input from '../../Features/input/Input'


const Contact = () => {

const [email,setEmail] = useState('')
const [data,setData]= useState('')
const [content,setContent] = useState('')
const getEmail =(e)=>{
    setEmail(e.target.value)
}
const getData = (e) =>{
    setData(e.target.value)
}
    return (
        <div>
        {/* <h1>Contact</h1> 
        <form onSubmit={}>
         <Input type="text"
         name="firstNmae"
         handlerChange={} />
         <Input type="text"
         name ="lastName"
         handlerChange={}
         />
         </form> */}
        </div>
    )
}

export default Contact
