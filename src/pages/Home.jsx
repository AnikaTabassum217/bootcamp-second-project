import React from "react";
import {Link} from "react-router-dom"
import Navbar from "../layout/Navbar";
import '../assets/css/home.css'
import StudentCard from "../components/StudentCard";
import Layout from "../layout/Layout";
import Car from '../assets/images/car1.webp'

const Home=()=>{
    let name= "Anika Tabassum"
    let id="123";
    let address="savar"
    let image;

    let student = [
        {
            name: "Jui",
            id: "123",
            address: "Savar",
            image: Car
        },
        {
            name: "Ankita",
            id: "123",
            address: "Savar",
            image: Car
        },
        {
            name: "Jinuk",
            id: "123",
            address: "Savar",
            image: Car
        }
    ];
    
    return(
        <div>
            <Layout>
            <h1 className="text-red-600" style={{fontSize:40}}>
            This is a Home Page
            </h1>
            <Link to ="about-us">About us</Link>
            <div className="grid grid-cols-3">
            <div  className="col-span-1">
            {student.map((item,index) => {
               
                    return (
                        <div key={index} className="col-span-1">
                        <StudentCard name={item.name} id={item.id} address={item.address} image={item.image}/>
                        </div>
                    )
                })}
            </div>
            </div>
            </Layout>
            
            
        </div>
    )
}
export default Home;