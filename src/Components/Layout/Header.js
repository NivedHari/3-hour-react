import classes from './Header.module.css';
import CartButton from './CartButton';

const Header =(props) => {
    return(
        <header className={classes.header}>
            <h1>Shoe Store</h1>
            <CartButton onClick={props.onShowCart}/>
        </header>
    )
}

export default Header;