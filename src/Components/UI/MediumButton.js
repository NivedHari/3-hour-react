import classes from './MediumButton.module.css';
const MediumButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Buy Medium</span>
      <span className={classes.badge}>{props.medium}</span>
    </button>
  );
};

export default MediumButton;
