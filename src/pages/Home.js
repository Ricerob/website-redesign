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
            <div className='bg-light-tan background-img bg-center max-h-screen h-full'>
                <Navbar />
                <div className='hidden md:flex m-10 max-h-screen flex-col min-h-[85vh]'>
                    <div className='pt-12'>
                        <p className='text-8xl whitespace-pre text-m-green -mx-8 '>robby <br />rice</p>
                    </div>
                    <div className='items-center flex-1 pt-16 max-h-[30vh] align-middle flex justify-end'>
                        <p className='text-5xl lg:text-6xl text-light-tan text-right hover:animate-pulse'>developer && engineer</p>
                    </div>
                    <div className='flex m-2'>   
                        <div className='h-fit w-2/3 min-h-52 mr-10 flex rounded-2xl border-solid border-2 border-d-green backdrop-blur-xl bg-l-green bg-opacity-20 items-center align-middle shadow-md'>
                            <p className='text-black text-2xl py-6 px-6'>i'm robby, a student developer. welcome to my portfolio - feel free to snoop around and get in contact.</p>
                        </div>
                        <div className='flex justify-center w-1/3 min-h-[220px] items-center rounded-2xl border-solid border-2 border-d-green backdrop-blur-xl bg-l-green bg-opacity-20 shadow-md'>
                            <div className='relative text text-light-tan'>
                                <p>f u l l s t a c k  -  p y t h o n  -  m a c h i n e   l e a r n i n g - </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;