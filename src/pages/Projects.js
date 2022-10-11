import './stylesheet.css'
import Navbar from '../components/Navbar';
import Project from '../components/Project';

function Projects() {
    return (
        <>
            <Navbar />
            <div className='background z-1 invisible md:visible'>
                <div className='big-egg bg-d-green'></div>
                <div className='small-egg bg-terracotta'></div>
                <div className='tall-egg bg-m-green'></div>
            </div>
            <div className='relative z-10 p-3'>
                <p>hi from projects</p>
                <Project name={'senior design'} icons={'hi'} desc={'ML!'} githubLink={'google.com'} />
            </div>
        </>
    )
}

export default Projects;