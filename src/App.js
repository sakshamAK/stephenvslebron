import { NavLink, Outlet } from "react-router-dom";
import style from "./App.module.css"
import { menuData } from "./Data/menuData";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function App() {
  const [toggleMenu, setToggleMenu] = useState(true)
  const activeLink = ({ isActive }) => isActive ? `${style["link"]} ${style["activeLink"]}` : `${style["link"]}`
  return (
    <>
        <MenuIcon className={`${style["menu-icon"]}`} onClick={() => setToggleMenu(p => !p)} />
      <ul className={toggleMenu ? `${style["menu"]}` : `${style["open-menu"]} ${style["menu"]}`}>
        {
          menuData.map(({ title, link }) => (<li className={`${style["menu-item"]}`}><NavLink className={activeLink} to={link} onClick={() => setToggleMenu(p => !p)}>{title}</NavLink></li>))
        }
      </ul>
      <div className={`${style["container"]}`}>
        <div className={`${style["header"]}`}>
          <img src="./curry.png" alt="Stephen Curry" />
          <h1>Stephan Curry<br />VS<br />Lebron James</h1>
          <img src="./lebron.png" alt="Lebron James" />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;