import '../pages/stylesheet.css'

function Navbar() {
    return (
        <>
            <nav className='bg-transparent flex flex-col sm:flex-row sm:text-left sm:justify-between w-full'>
                <div className='text-left text-2xl text-d-green ml-2'>
                    <a href='/'>rr</a>
                </div>
                <div className='text-right text-xl'>
                    <a href='/projects' className='mx-2 no-underline hover:text-m-green text-d-green'>projects</a>
                    <a href='/about' className='mx-2 no-underline hover:text-m-green text-d-green'>about</a>
                    <a href='/contact' className='mx-2 no-underline hover:text-m-green text-d-green'>contact</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;