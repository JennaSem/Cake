import { useEffect, useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Cakes from "./Cakes";

function Home() {
  const [cakes, setCakes] = useState(data);

  const chosenCakes = (searchTerm) => {
    const newCakes = data.filter(
      (element) => element.searchTerm === searchTerm
    );
    setCakes(newCakes);
  };

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <div>
      <div className="container">
        <Buttons filteredCakes={chosenCakes} />
      </div>
      <Cakes cakesForSale={cakes} />
    </div>
  );
}

export default Home;
