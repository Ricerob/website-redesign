import './stylesheet.css'
import Navbar from '../components/Navbar';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

function Contact() {
    return (
        <div className='bg-light-tan min-h-screen'>
            <Navbar />
            <div className='background z-1 invisible lg:visible'>
                <div className='big-egg bg-d-green'></div>
                <div className='small-egg bg-terracotta'></div>
                <div className='tall-egg bg-m-green'></div>
            </div>
            <div className='flex flex-col md:flex-row mt-12 md:mt-24 justify-around items-center'>
                <div className='shadow-md flex flex-col mb-3 py-8 px-6 mx-10 rounded-xl bg-m-green bg-opacity-20 border-2 border-m-green items-center justify-center'>
                    <AiOutlineMail size={60}/>
                    <p className='text-d-green py-5 text-xl'>The quickest way to reach me.</p>
                    <button className='bg-terracotta py-2 px-4 rounded'><a target='_blank' rel='noopener noreferrer' href='mailto:ricerob@iastate.edu'>Email</a></button>
                </div>
                <div className='shadow-md flex flex-col mb-3 py-8 px-6 mx-10 rounded-xl bg-m-green bg-opacity-20 border-2 border-m-green items-center justify-center'>
                    <FaLinkedin size={60}/>
                    <p className='text-d-green py-5 text-xl'>Connect with me and start a conversation.</p>
                    <button className='bg-terracotta py-2 px-4 rounded'><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/ricerob/'>LinkedIn</a></button>
                </div>
                <div className='shadow-md flex flex-col mb-3 py-8 px-6 mx-10 rounded-xl bg-m-green bg-opacity-20 border-2 border-m-green items-center justify-center'>
                    <FaGithub size={60}/>
                    <p className='text-d-green py-5 text-xl'>View my source code.</p>
                    <button className='bg-terracotta py-2 px-4 rounded'><a target='_blank' rel='noopener noreferrer' href='https://github.com/Ricerob'>GitHub</a></button>
                </div>
            </div>
        </div>
    )
}



export default Contact;