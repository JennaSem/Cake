function Buttons({ filteredCakes }) {
    return(
        <div className="container">
            <button className="btnOne" onClick={() => filteredCakes("Best Seller")}>Best Seller</button>
            <button className="btnTwo" onClick={() => filteredCakes("Birthday")}>Birthday</button>
            <button className="btnThree" onClick={() => filteredCakes("Wedding")}>Wedding</button>
            <button className="btnFour" onClick={() => filteredCakes("Cupcakes")}>Cupcakes</button>
            <button className="btnFive" onClick={() => filteredCakes("Other bakery")}>Other bakery</button>
        </div>
    )
}
export default Buttons;