import { useContext } from "react";
import classes from "./ShoeItem.module.css";
import LargeButton from "../../UI/LargeButton";
import MediumButton from "../../UI/MediumButton";
import SmallButton from "../../UI/SmallButton";
import CartContext from "../../store/cart-context";
import ShoeItemForm from "./ShoeItemForm";

const ShoeItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: +props.price,
      amount: amount,
    });
    console.log(props.id, props.name, props.price);
  };

  return (
    <li className={classes.shoes}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        {/* <LargeButton />
        <MediumButton />
        <SmallButton /> */}
        <ShoeItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ShoeItem;
