import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src="/Navlogo.png" alt="logo" />
        <ul>
          <li className="store-name">Olcademy Perfume Store</li>
        </ul>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;