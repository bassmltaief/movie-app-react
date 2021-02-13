import './App.css';
import Hed from './components/Hed';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';
import React, { useState } from 'react';
import AddMovie from './components/AddMovie';

var movies = [
  { "Title": "Iron Man", "Year": "2008", "Rate": 4, "Type": "Science faction", "Poster": "https://i.egycdn.com/pic/WmFwZndlY21FbWptVFRhY21vTmJ4bG1ZWXY.jpg" },
  { "Title": "John Wick 3", "Year": "2019", "Rate": 3, "Type": "Action", "Poster": "https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm1FbWFjbUdrTkVtb3dQbWc.jpg" },
  { "Title": "Avengers: Endgame", "Year": "2019", "Rate": 5, "Type": "Drama", "Poster":"https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm12bWpFY21ibUVtSGNtRW1FY3dQ.jpg"  },
  { "Title": "Harry Potter", "Year": "2001", "Rate": 2, "Type": "Family", "Poster": "https://i.egycdn.com/pic/WmFwZndlY21idnRjdk5IUmN4Y05wSE5ZWWc.jpg" },
  { "Title": "Avatar", "Year": "2009", "Rate": 4, "Type": "Science faction", "Poster": "https://i.egycdn.com/pic/WmFwZndlY21URW12dk5FbUhjRWNsYWF2Y2x3Zk5q.jpg" }]
  
  
    
    
    

function App() {
  const [listMovie, setListMovie] = useState(movies);
  const [search, setSearch] = useState('');
  const addMovie=(Title,Year,Rate,Type,Poster)=>{
    setListMovie([...listMovie,{Title:Title,Year:Year,Rate:Rate,Type:Type,Poster:Poster}])
  }
  const handleChange=(e)=>{
    setSearch(e.target.value)
  }
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
      setRating(newRating);
    };
  return (
    <div className="App1">
      <Hed handleChange={handleChange}  ratingChanged={ratingChanged} />

      <Movie listMovie={listMovie} search={search} rating={rating}/>
      <AddMovie addMovie={addMovie} />
    </div>
  );
}
export default App;
