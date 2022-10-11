import './stylesheet.css'
import Navbar from '../components/Navbar';

function Contact() {
    return (
        <>
            <Navbar />
            <div className='background z-1 invisible lg:visible'>
                <div className='big-egg bg-d-green'></div>
                <div className='small-egg bg-terracotta'></div>
                <div className='tall-egg bg-m-green'></div>
            </div>
        </>
    )
}



export default Contact;