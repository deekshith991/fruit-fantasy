
export default function FruitCard({fruitData}){

    return (
        <div id='fruitCard'>
            <img src={fruitData.image} alt={fruitData.name}/>
            <div id='info'>
                <h3>{fruitData.name}</h3>
                <p><b>Price:</b> {fruitData.price}/{fruitData.unit} </p>
            </div>
        </div>
    );
}