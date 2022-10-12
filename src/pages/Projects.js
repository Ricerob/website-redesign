import './stylesheet.css'
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import projects from '../projects'
import { useState } from 'react';

function Projects() {
    var [project, setProject] = useState(
        {'name': projects[0].name, 'icons': projects[0].icons, 'desc': projects[0].desc, 'githubLink': projects[0].githubLink}
    )
    var [selected, setSelected] = useState(0)

    const listItems = projects.map((item, key) => 
        <li key={key} className={selected === key ? 'text-black hover:translate-x-4 transition-transform py-2' : 'text-d-green hover:translate-x-4 transition-transform py-2'} 
        onClick={function() { 
            setProject(
                {'name': item.name, 'icons': item.icons, 'desc': item.desc, 'githubLink': item.githubLink}
            )
            setSelected(key)
        }}>{item.name}</li>
    );

    return (
        <div className='min-h-screen bg-light-tan'>
            <Navbar />
            <div className='bg-light-tan z-1 invisible md:visible'>
                <div className='big-egg bg-d-green'></div>
                <div className='small-egg bg-terracotta'></div>
                <div className='tall-egg bg-m-green'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-6 md:gap-x-10 md:min-h-[80vh] relative z-10 p-3'>
                <div className='hidden md:grid text-right items-center text-2xl col-start-1 col-span-2'>
                    <ul>
                        {listItems}
                    </ul>
                </div>
                <div className='hidden md:grid md:col-span-3 md:col-start-3 md:items-center'>
                    <Project name={project.name} icons={project.icons} desc={project.desc} githubLink={project.githubLink}/>
                </div>
                <div className='md:hidden'>
                    {
                        projects.map((item, key) => {
                            return <Project name={item.name} icons={item.icons} desc={item.desc} githubLink={item.githubLink}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;