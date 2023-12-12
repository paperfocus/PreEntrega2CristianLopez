import React from 'react';
import LogoImg from '../img/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import '../style/style.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to='/'>
          <img src={LogoImg} alt="Logo" />
        </Link>
      </div>

      <div className='Categorias'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
        <NavLink to='/category/memorias_ram' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Memoria Ram</NavLink>
        <NavLink to='/category/pendrive' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pendrive</NavLink>
        <NavLink to='/category/ssd' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ssd</NavLink>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
