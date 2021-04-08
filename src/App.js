import './App.css';
import {useState} from "react";
import Form from "./components/Form";
import Map from "./components/Map";

function App() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 45.4215,
    longitude: -75.6972,
    width:"100vw",
    height: "100vh", 
    zoom: 1
  });
  const [title, setTitle] = useState(null);
  const url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events";
  return (
    <div className="App">
      <Form url={url}
      setEvents={setEvents}
      query={query}
      setQuery={setQuery}
      />
      <Map events={events}
      query={query}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
      viewport={viewport}
      setViewport={setViewport}
      title={title}
      setTitle={setTitle}
      /> 
    </div>
  );
}

export default App;
