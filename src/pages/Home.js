import './stylesheet.css'
import Navbar from '../components/Navbar';

function Home() {
    return (
        <>
            <div className='bg-light-tan min-h-screen background-img bg-center'>
                <Navbar />
                <div className=''>
                    <p className='text-d-green'>welcome home</p>
                </div>
            </div>
        </>
    )
}

export default Home;