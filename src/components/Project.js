import '../pages/stylesheet.css'


const Project = (props) => {
    return (
        <div className='py-2'>
            <div className='grid border-solid border-d-green border-2 rounded-3xl items-center justify-items-center'>
                <p className='text-d-green text-2xl py-2 px-5'>{props.name}</p>
                <div className='flex flex-row items-center justify-items-center py-3'>
                    {props.icons}
                </div>
                <div className='min-h-30 px-5'>
                    <p>{props.desc}</p>
                </div>
                <div className='py-3'>
                    <button className='bg-terracotta py-2 px-4 rounded'>
                        <a href={props.githubLink}>GitHub</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;