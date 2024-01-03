import classes from './LargeButton.module.css';
import { useState } from 'react';

const LargeButton = (props) => {
  const [enteredLarge,setEnteredLarge] = useState(props.large);

  

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Buy Large</span>
      <span className={classes.badge}>{props.large}</span>
    </button>
  );
};

export default LargeButton;