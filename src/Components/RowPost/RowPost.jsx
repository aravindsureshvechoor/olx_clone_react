import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../Axios.js'
import { imageUrl, API_key } from '../../Constants/Constants.js'
import './RowPost.css'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((Response) => {
      console.log(Response.data)
      setMovies(Response.data.results)
    }).catch(err => {
      alert(err)
    })
  }, [props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const HandleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_key}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])

      } else {
        console.log('empty array');
      }

    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj) =>
            <img onClick={() => HandleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="Posters" />
          )
        }
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default RowPost