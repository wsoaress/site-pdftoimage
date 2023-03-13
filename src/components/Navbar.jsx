import LogoConversor from '../assets/logo-conversor.svg'

function Navbar(){
    return(
    <>
        <div className="h-20 bg-white -z-50 flex flex-row justify-center items-center shadow-sm">
            <div className='bg-white flex items-center justify-start gap-2'>
                <img className='w-10 rounded' src={LogoConversor} alt="" />
                <p className='font-semibold text-black'>pdf<span className='text-malibu-700 font-bold'>2</span>png</p>
            </div>
        </div>
    </>

    )
}

export default Navbar