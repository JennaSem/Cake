function Cakes({ cakesForSale }) {
  return (
    <div className="products">
      {cakesForSale.map((element) => {
        const { id, name, searchTerm, price, image } = element;

        return (
          <div className="product-card" key={id}>
            <img src={image} width="250px" height="300px" alt="cakes" />

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
