import './stylesheet.css'
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import projects from '../projects'
import { useState } from 'react';

function Projects() {
    var [project, setProject] = useState(
        <Project name={projects[0].name} icons={projects[0].icons} desc={projects[0].desc} githubLink={projects[0].githubLink}/>
    )

    const listItems = projects.map((item) => 
        <li onClick={() => setProject(
            <Project name={item.name} icons={item.icons} desc={item.desc} githubLink={item.githubLink}/>
        )}>{item.title}</li>
    );

    return (
        <div className='min-h-screen bg-light-tan'>
            <Navbar />
            <div className='bg-light-tan z-1 invisible md:visible'>
                <div className='big-egg bg-d-green'></div>
                <div className='small-egg bg-terracotta'></div>
                <div className='tall-egg bg-m-green'></div>
            </div>
            <div className='grid grid-cols-2 relative z-10 p-3'>
                <div>
                    <ul>
                        {listItems}
                    </ul>
                </div>
                <div id='renderProject'>
                    <p>{project}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;