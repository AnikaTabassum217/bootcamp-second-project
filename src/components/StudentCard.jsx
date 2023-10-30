import React from "react";
import { Link } from "react-router-dom";
import SomeComponent from "./SomeComponent";

const StudentCard=(props)=>{
    return(
    <div>
        <Link 
    to={"/student-details/"+props.id+"/"+props.name}
    >
    <div>
           <p>Name: {props.name}</p>
           <p>Id: {props.id}</p>
           <p>Address: {props.address}</p>
           <img src={props.image} alt={props.name} />
        </div>
     </Link>
     {/* <SomeComponent someImage={props.image}></SomeComponent> */}
    </div>
    )
}
export default StudentCard;