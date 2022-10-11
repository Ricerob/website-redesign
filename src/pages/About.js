import './stylesheet.css'
import Navbar from '../components/Navbar';

function About() {
    return (
        <>
            <div className='bg-light-tan min-h-screen background-img bg-center'>
                <Navbar />
                <div className=''>
                    <p className='text-d-green'>i'm me</p>
                </div>
            </div>
        </>
    )
}

export default About;