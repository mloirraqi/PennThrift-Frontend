import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button, Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';




function Login({ navigation }) {
    
    // function that sets user details
    const userDetails = (username,password) => {

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
}

const Login = () =>{
    const navigate = useNavigate()
    const [error, setError] = useState();
    const address = 'http://localhost:4000/api/login'; 
    
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
        <View className='grid grid-main justify-center w-full h-full items-center'>
            <View className='col-span-8 flex flex-col justify-center'>
                <View className='my-5 text-center text-5xl'><Text>Welcome back!</Text></View>
                <View className='w-full my-10 h-[1px] bg-[gray]'></View>
                <Form
                    userDetails={userDetails}
                    reset={reset}
                    error={error}
                    name='Login'/>
            </View>
        </View>
        
    )
}


export default Login;