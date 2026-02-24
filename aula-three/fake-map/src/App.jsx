import {useEffect, useState} from "react";

import PokeCard from "./components/PokeCard";

function App() {

    const [data, setData] = useState({});
    // const [name, setName] = useState("Ana");
    // console.log(name);
    // setName("Gabriela");
    // console.log(name);

    useEffect(() => {
        console.log("effect");

        // fetch("https://fakestoreapi.com/products/2")
        //     .then((response) => response.json())
        //     .then((data) => setData(data));
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [])

    console.log("Aqui é o state", data);
    return (
    <>
        <h1>Items: </h1>
        {/*<Card*/}
        {/*    title={data.title}*/}
        {/*    price={data.price}*/}
        {/*    description={data.description}*/}
        {/*    category={data.category}*/}
        {/*    image={data.image} />*/}
        <PokeCard
            name={data?.name}
            image={data?.sprites?.front_default}
            type={data?.types[0]?.type.name}/>
    </>
  );
}

export default App;
