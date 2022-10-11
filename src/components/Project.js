import '../pages/stylesheet.css'


const Project = (props) => {
    return (
        <>
            <div className='border-solid border-d-green border-2 rounded-3xl text-center'>
                <h2 className='text-d-green text-2xl py-2'>{props.name}</h2>
                {props.icons}
            </div>
        </>
    );
}

export default Project;