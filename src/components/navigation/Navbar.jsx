import "./Navbar.css";
import { MdRadio, MdQueueMusic, MdFavorite, MdSearch } from "react-icons/md";

export default function Navbar({ className }) {
  return (
    <div className={`wrapper flex justify-center ${className}`}>
      <div className="iconContainer mr-6 flex items-center">
        <MdRadio size={50} />
      </div>
      <nav>
        <a href="">
          <MdFavorite size={30} className="inline" />
          <span className="2xs:hidden xs:block ">favourite</span>
        </a>
        <a href="">
          <MdQueueMusic size={30} className="inline" />
          <span className="2xs:hidden xs:block">Browse</span>
        </a>
        <a href="">
          <MdSearch size={30} className="inline" />
          <span className="2xs:hidden xs:block">Search</span>
        </a>
        <div className="animation "></div>
      </nav>
    </div>
  );
}
