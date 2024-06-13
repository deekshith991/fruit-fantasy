import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header>

      <h1>Fruits-fantasy</h1>
      <div id="Fruits Search">
        <input type='text' placeholder="Search Fruits" />
        <button type="submit"><img /></button>
      </div>
      <div id='HeaderbuttonsRow'>
        <Link to="/Login">Log In</Link>
        <Link to="/profile">profile </Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </header>
  )
}