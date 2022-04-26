import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Form from '../components/Form';

const Register = ({ navigation }) => {
    const [error, setError] = React.useState();
    const address = 'http://localhost:4000/api/register'; 

    function userDetails(username,password){
        const data = {
            'username':username,
            'password':password,
            'email':username,
        };


        // axios.post(address, data).then(res =>{
        //     if(res.data === "error"){
        //         setError('Username has already been taken');
        //     }else{
        //         localStorage.setItem('username',username)
        //         navigate('/profile', { replace: true })
        //     }
            
        // })
        
    }

    function reset(){
        setError(null)
    }

    return(
        <View className='grid grid-main justify-center w-full h-full items-center'>
            <View className='col-span-8 flex flex-col justify-center'>
                <View className='my-5 text-center text-5xl'><Text>Welcome!</Text></View>
                <View className='w-full my-10 h-[1px] bg-[gray]'></View>
                <Form
                userDetails={userDetails}
                reset={reset}
                error={error}
                name='Register'/>
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

export default Register;