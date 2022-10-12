import './stylesheet.css'
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const text = document.querySelector('.text p');
        text.innerHTML = text.innerText.split("").map(
            (char, i) => `<span style='transform:rotate(${i * 5.5}deg)'>${char}</span>`
        ).join("")
    }, []);

    return (
        <>
            <div className='bg-light-tan min-h-screen background-img bg-center'>
                <Navbar />
                <div className='grid gap-4 grid-cols-3 grid-rows-3 mx-10'>
                    <div className='col-start-3 row-start-2 bg-m-green min-h-200'>
                    </div>
                    <div className='relative row-start-2 row-span-2 col-start-3 flex justify-center align-center bg-m-green rounded min-h-200'>
                        <div className='absolute text text-light-tan'>
                            <p>fullstack - python - machine learning -</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;