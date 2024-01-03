import { useState } from "react";
import Input from "../../UI/Input";
import Card from "../../UI/Card";
import classes from './ShoeDetails.module.css';

const ShoeDetails = (props) => {
    const [enteredName,setEnteredName] = useState('');
    const [enteredPrice,setEnteredPrice] = useState('');
    const [enteredDescription,setEnteredDescription] = useState('');
    const [enteredLarge,setEnteredLarge] = useState('');
    const [enteredMedium,setEnteredMedium] = useState('');
    const [enteredSmall,setEnteredSmall] = useState('');

    const nameHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const priceHandler = (event) => {
        setEnteredPrice(event.target.value);
    }
    const descriptionHandler = (event) => {
        setEnteredDescription(event.target.value);
    }
    const largeHandler = (event) => {
        setEnteredLarge(event.target.value);
    }
    const mediumHandler = (event) => {
        setEnteredMedium(event.target.value);
    }
    const smallHandler = (event) => {
        setEnteredSmall(event.target.value);
    }

    const submitHandler =(event)=> {
        event.preventDefault();

        const shoe = {
            id: Math.random().toString(36),
            name: enteredName,
            description: enteredDescription,
            price: enteredPrice,
            large: +enteredLarge,
            medium: +enteredMedium,
            small: +enteredSmall
        }
        console.log(shoe);
        props.onAddShoe(shoe);
    }


    return(
        <Card className={classes.form}>
            <form onSubmit={submitHandler}>
                <Input
                    label="Shoe Name"
                    id="name"
                    type="text"
                    value={enteredName}
                    onChange={nameHandler}

                />
                <Input
                    label="Description"
                    id="description"
                    type="text"
                    value={enteredDescription}
                    onChange={descriptionHandler}
                />
                <Input
                    label="Price"
                    id="price"
                    type="Number"
                    value={enteredPrice}
                    onChange={priceHandler}
                />
                <div>
                <h3>Quantity Available</h3>
                <Input
                    label="L"
                    id="large"
                    type="Number"
                    value={enteredLarge}
                    onChange={largeHandler}
                />
                <Input
                    label="M"
                    id="medium"
                    type="Number"
                    value={enteredMedium}
                    onChange={mediumHandler}
                />
                <Input
                    label="S"
                    id="small"
                    type="Number"
                    value={enteredSmall}
                    onChange={smallHandler}
                />
                </div>
                
                <button type="submit">Add Product</button>
            </form>
        </Card>
    )
}   

export default ShoeDetails;