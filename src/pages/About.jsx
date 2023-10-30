import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Navbar from "../layout/Navbar";
import SomeComponent from "../components/SomeComponent";

const About=()=>{
   


    return(
        <div>
        <Navbar/>
        <h1>Go to home page</h1>
        <Link to ="/">Home</Link> 
         <SomeComponent></SomeComponent>
        </div>
        
    )
}

export default About;