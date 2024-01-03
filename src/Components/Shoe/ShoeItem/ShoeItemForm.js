import Input from "../../UI/Input";
import { useRef, useState } from "react";
import LargeButton from "../../UI/LargeButton";
import MediumButton from "../../UI/MediumButton";
import SmallButton from "../../UI/SmallButton";

const ShoeItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;
      console.log(enteredAmountNumber);
  
      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 20
      ) {
        setAmountIsValid(false);
        return;
      }
  
      props.onAddToCart(enteredAmountNumber);
    };
  
    return (
      <form  onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          id="amount"
          type="number"
          min="1"
          max="50"
          step="1"
          defaultValue="1"
        />
        <LargeButton />
        <MediumButton/>
        <SmallButton/>
        {!amountIsValid && <p>Enter Valid Amount</p>}
      </form>
    );
  };
  
  export default ShoeItemForm;
  