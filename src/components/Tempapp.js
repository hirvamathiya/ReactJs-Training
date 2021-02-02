import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Tempapp = () =>{
    
    const [city, setCity] = useState(null);
    
    const [search, setSearch] =useState("Mumbai");

    useEffect( () =>{

        const fetchApi =async () =>{
           const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=226adb0861e4df58b10dfdccb582a7f9`;
           const response = await fetch(url);
           const jsonresponse=await response.json();
           setCity(jsonresponse.main);
        };
        fetchApi();
    },[search] )

    return(
     <>
       <div className="box">
           <div className="inputData">
               <input type="search" className="inputField" placeholder="Enter city name"
               onChange={(event)=>{
                  setSearch(event.target.value)  
               }} />
               
               </div>    
        {!city ?(
            <p className="errorMsg">No Data Found</p>
        ) :
        (    
            <div>
             <div className="info"> 
             <h2 className="location">{search}</h2>
             <h1 className="temp">
               {city.temp}°cel
             </h1>
             <h3 className="tempmin_max">
             Min : {city.temp_min}°cel | Max :{city.temp_max}°cel </h3>
        </div>
        </div>
        )}     
        </div> 
     </>

    )
}

export default Tempapp;