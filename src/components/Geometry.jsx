import React from 'react';
import {Marker, Popup} from 'react-map-gl';
import { AiFillFire } from 'react-icons/ai';
import { GiWhirlpoolShuriken, GiSmokingVolcano, GiIceberg} from 'react-icons/gi';

const Geometry = (props) => {
  const {geometry, query, selectedLocation, setSelectedLocation, title, setTitle, getTitle} = props;
  console.log("geometry inside geometry comp: ",geometry);
  console.log("title inside geometry comp: ",title);
  
  const chooseSelectedLocation = (e) =>{
    e.preventDefault();  
    getTitle();  
    console.log("geometry inside icon",geometry);
    setSelectedLocation(geometry);
  }
  const closePopup = () =>{
    setSelectedLocation(null);
    setTitle(null);
  };
  return (
  <div>
    <Marker 
    latitude = {geometry.coordinates[1]}
    longitude = {geometry.coordinates[0]}
    >
      <button onClick={chooseSelectedLocation} className="marker-btn">
      {query==="Wildfires" && <AiFillFire className="wildfire"/> }  
      {query==="Severe Storms" && <GiWhirlpoolShuriken className="storm"/> } 
      {query==="Volcanoes" && <GiSmokingVolcano className="volcano"/> }
      {query==="Sea and Lake Ice" && <GiIceberg className="iceberg"/> }
      </button>
    </Marker>
    {selectedLocation && <Popup onClose = {closePopup}
      latitude={selectedLocation.coordinates[1]} longitude={selectedLocation.coordinates[0]}
      >      
       <p>{title}</p> 
       <p>lat: {selectedLocation.coordinates[1]}{", "}lng: {selectedLocation.coordinates[0]}</p>   
      </Popup>}
  </div>
  )
}

export default Geometry;
