//React + states
import React,{useEffect,useState} from "react";
//Style
import "./style.css";
//Component
import ItemList from "../../components/itemList";



const ItemListContainer=({greetings})=>{

    const [products,setProducts] = useState([])

    //Async al JSON
    useEffect(async()=>{
        const response = await fetch ("./assets/products.json")
        const json = await response.json()
        console.log(json) //esto está bien. NO tocar
        setProducts(json)
    },[])

    return(
        <div>
            <h1>{greetings}</h1>
            <div>
                <ItemList products={products}/>
            </div>     
        </div>
    )
}

ItemListContainer.defaultProps = {
    greetings: "Armá tu mejor equipo",

}

export default ItemListContainer;