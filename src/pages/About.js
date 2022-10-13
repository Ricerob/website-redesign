import './stylesheet.css'
import Navbar from '../components/Navbar';
import {FaPython, FaJava, FaReact, FaAws } from 'react-icons/fa';
import {SiJavascript, SiMysql} from 'react-icons/si';


function About() {
    return (
        <div className=''>
            <div className='md:min-h-screen background-img bg-center'>
                <Navbar />
                <div className='flex md:flex-grow flex-col md:flex-row h-[80vh] md:mt-12 px-10'>
                    <div className='flex flex-col md:w-2/3 mb-10 md:mb-0 md:mr-10 justify-around items-center'>
                        <div className='mt-10 md:mt-20'>
                            <p className='md:text-d-green text-2xl md:text-7xl'>glad you're here.</p>
                        </div>
                        <div className='pb-15 md:text-light-tan text-xl md:text-6xl'>
                            a bit about myself.
                        </div>
                        <div className='py-12 px-6 rounded-2xl border-solid border-2 border-m-green bg-m-green md:bg-opacity-50 items-center align-middle'>
                            <p className='text-lg text-slate-50'>I'm studying Software Engineering and German at Iowa State University. I'm slated to graduate in the Spring of 2023. Outside of programming, I enjoy reading, sports, and much more. Feel free to reach out! <br/><br/></p>
                            <p className='text-lg text-light-tan'>Sie können mir auch eine Nachricht auf Deutsch schicken.</p>
                        </div>
                    </div>
                    <div className='bg-m-green md:bg-opacity-50 border-solid border-2 border-m-green rounded-2xl flex flex-col md:ml-12 items-center md:justify-between p-12 basis-0'>
                        <FaPython size={60}/>
                        <FaReact size={60}/>
                        <SiJavascript size={60}/>
                        <FaAws size={60}/>
                        <FaJava size={60}/>
                        <SiMysql size={60}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;