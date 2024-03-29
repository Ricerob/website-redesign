import '../pages/stylesheet.css'


const Project = (props) => {
    return (
        <div className='py-2'>
            <div className='shadow-lg flex flex-col border-solid border-d-green border-2 rounded-3xl items-center justify-items-center'>
                <p className='text-d-green text-2xl py-2 px-5 text-center'>{props.name}</p>
                <div className='flex flex-row items-center justify-center py-3'>
                    {props.icons}
                </div>
                <div className='min-h-30 px-5 text-center'>
                    <p>{props.desc}</p>
                </div>
                <div className='py-3'>
                    {props.link && <button className='bg-terracotta py-2 px-4 rounded'>
                        <a target='_blank' rel='noopener noreferrer' href={props.link}>{props.linkName}</a>
                    </button>}
                </div>
            </div>
        </div>
    );
}

export default Project;
