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
        <View >
            <View >
                <View ><Text style={styles.title}>Welcome!</Text></View>
                <View ></View>
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
    title: {
        marginTop: 75,
        paddingVertical: 10,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

  });

export default Register;