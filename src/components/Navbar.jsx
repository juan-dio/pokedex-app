import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav id="navbar" className="sticky top-0">
      <div className="w-full px-16 py-6 flex justify-between items-center flex-wrap bg-white shadow-sm z-50">
        <img src={logo} alt="logo" className="w-40" />
        <ul className="flex gap-6 font-semibold">
          <li>
            <Link to={"/"}>Pokemon</Link>
          </li>
          <li>
            <a href="">Moves</a>
          </li>
          <li>
            <a href="">Machines</a>
          </li>
          <li>
            <a href="">Items</a>
          </li>
          <li>
            <a href="">Berries</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
