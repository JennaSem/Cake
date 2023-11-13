import { Link } from 'react-router-dom';

function Cakes({ cakesForSale }) {
  return (
    <div className="products">
      {cakesForSale.map((element) => {
        const { id, name, searchTerm, price, image } = element;

        return (
          <div className="product-card" key={id}>
            <Link to={'/about/${item.title}'}>
            <img src={image} width="250px" height="300px" alt="cakes" />
            </Link>
            <div className="product-info">
              <h3>{name}</h3>
              <h4>{price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cakes;
