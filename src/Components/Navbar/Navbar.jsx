import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo_23.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/drop-down.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav_menu_visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>TRENDY</p>
      </div>
      <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="dropdown_btn" />
      <ul ref={menuRef} className='nav_menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none', color: '#27296d' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link style={{ textDecoration: 'none', color: '#27296d' }} to='/mens'>Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link style={{ textDecoration: 'none', color: '#27296d' }} to='/womens'>Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{ textDecoration: 'none', color: '#27296d' }} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav_login_cart">
        <Link to='/login'><button aria-label="Login">Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="add_icon" /></Link>
        <div className="nav_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
