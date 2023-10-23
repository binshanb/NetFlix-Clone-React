import React from 'react';
import './App.css';
import{originals,action,trending,horror,romance,comedy,documentaries} from './urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return ( 
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action}title='Action' isSmall/>
      <RowPost url={trending}title='Trending' isSmall/>
      <RowPost url={horror}title='Horror' isSmall/>
      <RowPost url={romance}title='Romance' isSmall/>
      <RowPost url={comedy}title='Comedy' isSmall/>
      <RowPost url={documentaries}title='Documentaries' isSmall/>

  
    </div>
  );
}

export default App;
