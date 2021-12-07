import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'P1',
    price: 6,
    title: 'one',
    description: 'bla bla bla',
  },
  {
    id: 'P2',
    price: 5,
    title: 'two',
    description: 'más bla bla bla',
  },
];

const Products = (props) => (
  <section className={classes.products}>
    <h2>Buy your favorite products</h2>
    <ul>
      {DUMMY_PRODUCT.map((product) => (
        // eslint-disable-next-line max-len
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </ul>
  </section>
);

export default Products;
