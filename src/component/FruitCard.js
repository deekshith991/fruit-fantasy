
export default function FruitCard({ fruitData }) {

    return (
        <div key={fruitData.id} id='fruitCard'>
            <img id='fruitsImage' src={fruitData.image} alt={fruitData.name} />
            <div id='info'>
                <h3>{fruitData.name}</h3>
                <p> <b>Price:</b> {fruitData.price}/{fruitData.unit} </p>
            </div>
        </div>
    );
}