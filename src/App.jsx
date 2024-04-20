import { useState } from "react";
import "./global.css";
import bird from "./img/bird.svg";
import cat from "./img/cat.svg";
import cow from "./img/cow.svg";
import dog from "./img/dog.svg";
import gator from "./img/gator.svg";
import horse from "./img/horse.svg";
import AnimalShow from "./AnimalShow";

const App = () => {
    const animalName = [bird, cat, cow, dog, gator, horse];
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([
            ...animals,
            animalName[Math.floor(Math.random() * animalName.length)],
        ]);
    };

    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <button onClick={handleClick}>Add Animal</button>
                </div>

                <div  className="d-flex">
                    {animals.map((item) => (
                        <AnimalShow animal={item}/>
                    ))}
                </div>
            </div>
        </>
    );

}

export default App;