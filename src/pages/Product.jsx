import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import User from "../components/User";
import axios from 'axios'

const Product=()=>{

    const [user, setUser] = useState([]);//([]) from postman we get a object which contains many array

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
    //     return response.json()//From postman we get data as JSON format
    // })
    // .then(data=>{
    //     setUser(data)
    // })}
    // ,[])
 useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    console.log(response);
    if(response.status==200){
        setUser(response.data)
    }
})
   .catch(error=>{
    console.log(error)
   })
 },[])

    

    return(
        <div>
            <Layout>
            <Link to ="/">Home</Link>
              <div className="grid grid-cols-4">

              {user.map((item,index)=>{
                return(
                    <div key={index}>
                       <User user={item}></User>
                    </div>
                )
              })

              }
        
              </div>
            </Layout>

        </div>
    )
}
export default Product;