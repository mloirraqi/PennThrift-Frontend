import { useState } from 'react';
import Form from '../components/Form';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () =>{
    const navigate = useNavigate()
    const [error, setError] = useState();
    const address = '/api/auth/login'; 
    
    function userDetails(username,password){
        const data = {
            'username':username,
            'password':password,
            'email':username,
        };

        axios.post(address, data).then(res =>{
            localStorage.setItem('username',username)
            navigate('/profile', { replace: true })
            
            
        }).catch(err =>{
            return err.message.split(" ").pop() == '401' ? 
            setError('We don’t recognize that username and password. Please try again.') : null
        })
    }

    function reset(){
        setError(null)
    }

    return(
        <div className='grid grid-main justify-center w-full h-full items-center'>
            <div className='col-span-8 flex flex-col justify-center'>
                <div className='my-5 text-center text-5xl'>Welcome back!</div>
                <div className='w-full my-10 h-[1px] bg-[gray]'></div>
                <Form
                    userDetails={userDetails}
                    reset={reset}
                    error={error}
                    name='Login'/>
            </div>
        </div>
        
    )
}


export default Login;