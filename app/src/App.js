import React, { useState, useEffect, useRef} from 'react';
import Feed from './Feed'
import './App.css';

function App() {
  const [feedState, setFeed] = useState(null);
  const searchTerms = useRef(null)

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async (searchTerm) =>{
    var query;

    if (searchTerm){
      query = `?tags=${searchTerm.split(' ').join(',')}`
    } else {
      query = ""
    }
    await fetch(`http://localhost:3000/feed${query}`).then(async x => setFeed(await x.json()));
  }


  const handleClickEvent = (e) => {
    e.preventDefault();
    const form = searchTerms.current;
    loadImages(form["search-term"].value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flickr Feed</h1>

        <form ref={searchTerms} onSubmit={handleClickEvent}>
          <input className="rounded-input" name="search-term"></input>
          <button type="button" onClick={handleClickEvent}>Search</button>
        </form>

        <Feed feed={feedState}></Feed>
      </header>
    </div>
  );
}

export default App;
