import { useState } from "react";
import { data } from './data';
import Buttons from "./Buttons";
import Cakes from "./Cakes";

function Home(){
    const [cakes, setCakes] = useState(data);

    const chosenCakes = (searchTerm) => {
        const newCakes = data.filter(element => element.searchTerm === searchTerm);
        setCakes(newCakes);
    }

        return(
            <div>
                <div className="container">
                    <h2 className="shipping">Hi</h2>
                </div>
                <Buttons filteredCakes={ chosenCakes } />
                <Cakes cakesForSale= { cakes } />
            </div>
        )
    }

export default Home;