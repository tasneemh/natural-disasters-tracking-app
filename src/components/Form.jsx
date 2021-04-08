import React from 'react';
import { useForm } from "react-hook-form";
import {useEffect} from "react";
import axios from 'axios';
const Form = (props) => {
  const {url, setEvents, query, setQuery} = props;
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    //console.log(data);  
    setQuery(data.value_name);     
  };
  let newArr = []; 
  useEffect(()=>{ 
    console.log("query inside form comp",query);
      axios.get(url).then(response=>{
      const arr = response.data.events;
      console.log("arr: ", arr);      
      arr.forEach(ev=>{
        if (query===ev.categories[0].title){
          newArr.push(ev);
        }
      });
      console.log("newArr inside axios: ",newArr);
      setEvents(newArr);
    }).catch(error=>{
      console.log("error inside axios: ",error);
    }); 
  },[url, setEvents, query]); 
  return (
    <div>
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
    <label>Select the event: </label>
    <select name="event" {...register('value_name')}>
      <option value="Severe Storms">Storms</option>
      <option value="Wildfires">Wildfires</option>
      {/*<option value="Volcanoes">Volcanoes</option>*/}
      <option value="Sea and Lake Ice">Iceberg</option>
    </select> 
      <input type="submit" />
    </form>
    </div>
  )
}

export default Form;
