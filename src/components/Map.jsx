import React from 'react';
import ReactMapGL from 'react-map-gl';
import { v4 as uuidv4 } from 'uuid';
import Event from "./Event";

const Map = (props) => {
  const {events, query, selectedLocation, setSelectedLocation, viewport, setViewport, title, setTitle} = props;
  console.log("events inside map comp: ",events);
  return (
    <div>
     <ReactMapGL
      {...viewport}       
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/tasneemhburmawala/ckn5331mf05dq17mlcdngt9r7"
      onViewportChange={(viewport) => setViewport(viewport)}
    >{events.map(event=><Event key={uuidv4()} 
      event={event}
      query={query}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
      title={title}
      setTitle={setTitle}
      />)}    
    </ReactMapGL>
  </div>
  )
}

export default Map;
