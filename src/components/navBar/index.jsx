import React from "react";
//Estilo
import "./style.css";
//Logo
import logo from "./logo.svg"
//Estilo
import "./style.css";
//Componentes
import CartWidget from "../cartWidget";

const NavBar = () => {
	return (
		<>
			<div className="NavBar__logoWidget">
				<div to={`/`} className='NavBar__logoWidget--logo'>
					<img src={logo} alt='logo' />
					<p>pokeshop</p>
				</div>

				<div className='NavBar__logoWidget--cartwidget'>
					<CartWidget/>
					<p>0</p>
				</div>
			</div>

			<ul className='NavBar__categorias'>
				<li>inicio</li>
				<li>productos</li>
			</ul>
		</>
	);
};

export default NavBar;