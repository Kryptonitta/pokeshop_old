//Import React: solo va en los archivos donde hago alguna importacion de componentes
import React from "react";
//Estilo general
import "./App.css";
//Componentes
import NavBar from "./components/navBar";
import ItemListContainer from "./containers/itemListContainer";
// import ItemDetailContainer from "./containers/itemDetailContainer";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer />
		</>
	);
}

export default App;
