import React, {useState} from 'react'
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from '../graphql/Queries'

function Home() {
    const [queryVal, setQueryVal] = useState("");
    const [getWeather, {loading, error, data}] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: { name: queryVal}
    })

    function handleSubmit(e) {
        e.preventDefault();
        getWeather()
    }
    function handleChange(e) {
        setQueryVal(e.target.value)
    }

    if(error) return <strong>Error found</strong>
    if(data) { console.log("data: ", data) }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={queryVal} type={"text"} placeholder="city name..."/>
            <input value="search" type="submit"/>
        </form>
        <h1>{data?.getCityByName.name}, {data?.getCityByName.country}</h1>
        <div>temp: {data?.getCityByName.weather.temperature.actual}</div>
    </div>
  )
}

export default Home

// async function handleSubmit(e) {
//     e.preventDefault();
//     await getWeather()
//     setQueryVal("");
// }