import classes from './SmallButton.module.css';
const SmallButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Buy Small</span>
      <span className={classes.badge}>{props.small}</span>
    </button>
  );
};

export default SmallButton;
