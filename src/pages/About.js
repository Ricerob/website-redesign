import './stylesheet.css'
import Navbar from '../components/Navbar';
import {FaPython, FaJava, FaReact, FaAws } from 'react-icons/fa';
import {SiJavascript, SiMysql} from 'react-icons/si';


function About() {
    return (
        <>
            <div className='bg-light-tan min-h-screen background-img bg-center h-screen'>
                <Navbar />
                <div className='flex flex-grow flex-row h-[80vh] mt-12 px-10'>
                    <div className='flex flex-col w-2/3 mr-10 justify-around items-center'>
                        <div className='mt-20'>
                            <p className='text-d-green text-7xl'>glad you're here.</p>
                        </div>
                        <div className='pb-15 text-light-tan text-6xl'>
                            a bit about myself.
                        </div>
                        <div className='shadow-md py-12 px-6 rounded-2xl border-solid border-2 border-m-green bg-m-green bg-opacity-50 items-center align-middle'>
                            <p className='text-lg text-slate-50'>I'm studying Software Engineering and German at Iowa State University. I'm slated to graduate in the Spring of 2023. Outside of programming, I enjoy reading, sports, and much more. Feel free to reach out! <br/><br/></p>
                            <p className='text-lg text-light-tan'>Sie können mir auch eine Nachricht auf Deutsch schicken.</p>
                        </div>
                    </div>
                    <div className='shadow-xl bg-m-green bg-opacity-50 border-solid border-2 border-m-green rounded-2xl flex flex-col ml-12 items-center justify-between p-12 basis-0'>
                        <FaPython size={60}/>
                        <FaReact size={60}/>
                        <SiJavascript size={60}/>
                        <FaAws size={60}/>
                        <FaJava size={60}/>
                        <SiMysql size={60}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;