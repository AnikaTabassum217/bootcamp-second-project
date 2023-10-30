import React from "react";

const User=({user})=>{//{user} here we can aso use props

    const{id,name,username,email,address}= user
    
    return(
        <div className="bg-gray-200 flex flex-wrap gap-5">
           <p>The Id is {id}</p>
           <p>The name is  {name}</p>
           <p>The user Name is {username}</p>
           <p>The email is {email}</p>
           {/*Address*/}
           <div>
            <p>Street is {address.street}</p>
            <p>Suite is {address.suite}</p>
            <p>City is {address.city}</p>
            <p>Zipcode is {address.zipcode}</p>
            <div>
                <p>Geo is {address.geo.lat}</p>
                <p>Lng is{address.geo.lng}</p>
        
            </div>
           </div>

        </div>
    )
}
export default User