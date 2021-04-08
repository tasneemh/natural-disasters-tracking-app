import React from 'react'
import Geometry from "./Geometry";
import { v4 as uuidv4 } from 'uuid';

const Event = (props) => {
  const {event, query, selectedLocation, setSelectedLocation, title, setTitle} = props;
  const getTitle = ()=>{
    setTitle(event.title);
  }
  return (
    <div>
      {event.geometries.map(geometry =>
        <Geometry key={uuidv4()} 
        geometry={geometry}
        query={query}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        title={title}
        setTitle={setTitle}
        getTitle = {getTitle}
        />)}  
    </div>
  )
}

export default Event;
