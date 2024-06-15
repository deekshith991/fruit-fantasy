import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header>

      <h1>Fruits-fantasy</h1>
      <div id="FruitsSearch">
        <input id='SearchInput' type='text' placeholder="Search Fruits" />
        <button id='SearchFruit' type="submit">
          <img id='searchImageLogo' alt="search" src="/assets/search_logo.png" height={'10px'} width={'10px'} /></button>
      </div>
      <div id='HeaderbuttonsRow'>
        <Link to="/Login">Log In</Link>
        <Link to="/profile">profile </Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/Logout">Logout</Link>
      </div>
    </header>
  )
}