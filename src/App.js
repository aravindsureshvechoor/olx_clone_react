import './App.css';
import React from 'react';
import {Orginals,Action,Documentaries,HorrorMovies} from './Urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div>
      <NavBar/>
      <Banner />
      <RowPost url={Orginals} title='Netflix Orginals'/>
      <RowPost url={Action} title='Action' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' />
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
    </div>
  )
}

export default App;
