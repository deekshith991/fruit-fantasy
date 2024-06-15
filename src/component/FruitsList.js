import { data } from "../data/Fruits";
import FruitCard from "./FruitCard";

export default function FruitsList() {

    const fruits = data;

    return (
        <div id='fruitsList'>
            <ul>
                {fruits.map((fruit) => (
                    <FruitCard fruitData={fruit} />
                ))}
            </ul>
        </div>
    );
}