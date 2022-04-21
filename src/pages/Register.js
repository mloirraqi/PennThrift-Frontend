import { useState } from 'react';
import Form from '../components/Form';

const Register = () =>{
    
    const [error, setError] = useState();
    const address = 'http://localhost:4000/api/register'; 

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
                
                if(response === '"error"'){
                    setError('Username has already been taken');
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
                <div className='my-5 text-center text-5xl'>Welcome!</div>
                <div className='w-full my-10 h-[1px] bg-[gray]'></div>
                <Form
                    userDetails={userDetails}
                    reset={reset}
                    error={error}
                    name='Register'/>
            </div>
        </div>
        
    )
}


export default Register;