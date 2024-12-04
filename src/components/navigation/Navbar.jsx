import "./Navbar.css";
import { MdRadio, MdQueueMusic, MdFavorite, MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Navbar({ className }) {
  return (
    <div className={`wrapper flex justify-center ${className}`}>
      <div className="iconContainer mr-6 flex items-center">
        <MdRadio size={50} />
      </div>
      <nav>
        <NavLink to="/">
          <MdFavorite size={30} className="inline" />
          <span className="hidden xs:block ">favourite</span>
        </NavLink>
        <NavLink to="browse">
          <MdQueueMusic size={30} className="inline" />
          <span className="hidden xs:block">Browse</span>
        </NavLink>
        <NavLink to="searchpage">
          <MdSearch size={30} className="inline" />
          <span className="hidden xs:block">Search</span>
        </NavLink>
        <div className="animation "></div>
        <div className="animatedUnderline"></div>
      </nav>
    </div>
  );
}
