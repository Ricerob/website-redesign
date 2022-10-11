import '../pages/stylesheet.css'


const Project = (props) => {
    return (
        <>
            <div className='grid border-solid border-d-green border-2 rounded-3xl items-center justify-items-center'>
                <h2 className='text-d-green text-2xl py-2'>{props.name}</h2>
                <div className='flex flex-row items-center justify-items-center py-3'>
                    {props.icons}
                </div>
                <div className='min-h-30'>
                    <p>{props.desc}</p>
                </div>
                <div className='py-3'>
                    <button className='bg-terracotta py-2 px-4 rounded'>
                        <a href={props.githubLink}>GitHub</a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Project;