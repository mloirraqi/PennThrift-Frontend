import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Form from '../components/Form';

function Login({ navigation }) {
    const [error, setError] = React.useState();
    const address = 'http://localhost:4000/api/login'; 
    
    // function that sets user details
    function userDetails(username,password) {
        const data = {
            'username':username,
            'password':password,
            'email':username,
        };

        // axios.post(address, data).then(res =>{
        //    localStorage.setItem('username',username)
        //    navigate('/profile', { replace: true })
        // }).catch(err =>{
        //    return err.message.split(" ").pop() == '401' ? 
        //    setError('We don’t recognize that username and password. Please try again.') : null
        // })
    }

    function reset() {
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
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Login;