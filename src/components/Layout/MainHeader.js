import CartButton from '../Cart/CartButton/CartButton';
import classes from './MainHeader.module.css';
import CleanCartButton from '../Cart/CleanCartButton/cleanCartButton';

const MainHeader = (props) => (
  <header className={classes.header}>
    <h1>ReduxCart</h1>
    <nav>
      <CartButton />
      <CleanCartButton />
    </nav>
  </header>
);

export default MainHeader;
