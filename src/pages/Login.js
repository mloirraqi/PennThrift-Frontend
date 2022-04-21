import { useState } from 'react';
import Form from '../components/Form';

const Login = () =>{
    
    const [error, setError] = useState();
    const address = 'http://localhost:4000/api/login'; 
    
    function userDetails(username,password){
        const data = JSON.stringify({
            'username':username,
            'password':password,
            'email':username,
        });

        var request = new XMLHttpRequest();
        request.onreadystatechange = (() =>{
            if (request.readyState === 4) {
                const response = request.response;
                if(response === 'Unauthorized'){
                    setError('We don’t recognize that username and password. Please try again.');
                }
                
                
              }
        });
        request.open('POST', address, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(data);
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