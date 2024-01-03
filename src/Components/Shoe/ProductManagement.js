import { useState } from "react";
import ShoeList from "./ShoeList";
import ShoeDetails from "./InputForm/ShoeDetails";

const ProductManagement =(props) => {
    const [shoes, setShoes] = useState([]);

    const addShoeHandler = (shoe) => {
        setShoes((prevShoes) => [...prevShoes, shoe]);
    }



    return <div>
        <ShoeDetails onAddShoe={addShoeHandler} />
        <ShoeList shoes={shoes}/>
    </div>
}

export default ProductManagement;