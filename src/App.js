import React from 'react';
import Headerinfo from './Components/Headerinfo/Headerinfo';
import ImageCard from './Components/Imagecard/Imagecard';

const App = () => {
  return(
    <div className='socialCard bg-near-white w-40-ns br3 pt1 pl3 pr3 pb5 ma3 grow bw2 shadow-5' >
      <Headerinfo para = {"Holaaaaaa"} author ={"TheRealKevin"} header="Social Card" />
      <ImageCard url = {`https://sassyspoon.files.wordpress.com/2014/03/best-shot.jpg`}/>
    </div>
  );
}

export default App;