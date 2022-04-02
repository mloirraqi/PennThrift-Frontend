import { useState } from 'react';
import Form from '../components/Form';

const Register = () =>{
    
    const [error, setError] = useState();
    
    function userDetails(username,password){
        setError('We don’t recognize that username and password. Please try again.')
    }

    function reset(){
        setError(null)
    }

    return(
        <div className='grid grid-main justify-center w-full h-full items-center'>
            <div className='col-span-8 flex flex-col justify-center'>
                <div className='my-5 text-center text-5xl'>Welcome!</div>
                <div className='w-full my-10 h-[1px] bg-[gray]'></div>
                <Form
                    userDetails={userDetails}
                    reset={reset}
                    error={error}
                    name='Sign in'/>
            </div>
        </div>
        
    )
}


export default Register;