import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../layout/Layout";

const StudentDetails=()=>{
const {id,name}= useParams();
const[firstName,setFirstName]=useState();//setFristName is a state modifier
const [lastName,setLastName]=useState();
const [district, setDistrict]= useState();
const [upozila,setUpozila]=useState();
const [deliveryCharge, setDeliveryCharge] =useState();


console.log(firstName)
 
useEffect(()=>{
  if (district=="Dhaka"){
    setDeliveryCharge(60);
  }
  else{
    setDeliveryCharge(120);
  }
},[district])

    return(
        <div>
            <Layout>
                <h1>The ID is {id}</h1>
                <h1>The name is {name}</h1>
                 <center>
              <form className="w-60">
               <div className="form-group mb-4">
                    <label htmlFor="login_username" className="block text-gray-700 text-sm font-bold mb-2">First name</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="First name*"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                    <input type="text" name="last_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                  <button className="ms-2 md:ms-5 py-3 px-6 md:py-3 md:px-6 bg-blue-500 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                   type="submit">Submit</button>
               </form>

               <h4 className="tex-red-500">
                Firstname: {firstName} <br/>
                LastName: {lastName} <br/>
               </h4>
              </center>
              <select  id=""  value={district} onChange={(e)=>setDistrict(e.target.value)}>
                    <option value="null">Select District</option>
                    <option value={'Dhaka'}>Dhaka</option>
                    <option value={'Rajshai'}>Rajshai</option>
              </select>
              
              <select  value={upozila} onChange={(e)=>setUpozila(e.target.value)}>
                <option value={null}>Select upozila</option>
                {
                  district=='Dhaka' &&(
                    <>
                    <option value={'Basundora'}>Basundora</option>
                    <option value={'Savar'}>Savar</option>
                    </>
                  )
                }
                {
                  district=='Rajshai' &&(
                    <>
                    <option value={'Nator'}>Nator</option>
                    <option value={'Dinajpur'}>Dinajpur</option>
                    </>
                  )
                }
              </select> 
               
            </Layout>
        </div>
    )
}
export default StudentDetails

