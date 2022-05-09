import {  Link } from 'react-router-dom';



const Welcome = () =>{
    return(
        <div className='grid grid-main justify-center w-full h-full items-center'>
            <div className='col-span-8'>
                <img alt='' src={require('../assets/logo.png')} className='h-24 mx-auto w-24'/>
                <div className='my-5 text-5xl'>Welcome to PennThrift!</div>
                <div className='w-full h-[1px] bg-[gray]'></div>
                <div className='my-5'>Your one-stop-shop for buying, trading, gifting, and thrifting at Penn.</div>
                <div className='flex mx-16 justify-between'>
                    <div className='flex flex-col text-center'>
                        <div className=''>
                            New Here?
                        </div>
                        <Link to='/register' className='bg-[#368481] my-3 w-28 rounded-[30px] h-12 text-white flex justify-center items-center'>
                            Register
                        </Link>
                    </div>
                    <div className='flex flex-col text-center'>
                        <div className=''>
                            Returning User?
                        </div>
                        <Link to='/login'  className='bg-[#368481] my-3 w-28 rounded-[30px] h-12 text-white flex justify-center items-center'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}



export default Welcome;
