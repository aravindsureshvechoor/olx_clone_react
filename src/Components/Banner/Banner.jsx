import './Banner.css'
import {API_key,imageUrl} from '../../Constants/Constants.js'
import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_key}&language=en-US`).then((Response)=>{
      const randomNum = Math.floor(Math.random() * 20) + 1
      setMovie(Response.data.results[randomNum])
      console.log(Response.data.results[0])
    })
      
      
  }, [])
  
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'> {movie?movie.title:''} </h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:''} </h1>
        </div>
      <div className="fade_bottom">

      </div>
    </div>
  )
}

export default Banner