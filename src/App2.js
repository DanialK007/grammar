import React, {useState} from 'react';

function App2() {
    const [color, setColor] = useState('_____');
    const [car , setCar] = useState({
        brand: "BMW",
        model: "X5",
        year: 2021,
        color: "red"
    });

    const updateCarColor = (x) => {
        setCar(previousState => {
            return { ...previousState, color: x};
        })
    }

    return (
        <>
            <div className='p-10 bg-blue-50 w-[500px] inline-block m-10'>
                <div>My Favourite Color is {color}</div>
                <div className='flex gap-5'>   
                <button className='bg-gray-200' onClick={ () => setColor("Blue")}>Blue</button>
                <button className='bg-gray-200' onClick={ () => setColor("Red")}>Red</button>
                <button className='bg-gray-200' onClick={ () => setColor("Green")}>Green</button>
                </div>
            </div>
            <div className='p-10 bg-black/10 w-[500px] inline-block m-10' color={car.color}>
                <div>My car is {car.brand} - {car.model} model with {car.color}. It is made in {car.year}.</div>
                <button className='bg-blue-200' onClick={ () => updateCarColor("blue")}>Blue</button>
            </div>
        </>
    )
}

export default App2
