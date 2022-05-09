import React from 'react';
import axios from "axios";
import { Component, useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileListings from "../components/ProfileListings";
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { Linking } from 'react-native';
import { Dimensions } from 'react-native';

var window_width = Dimensions.get('window').width; 


const Profile = ({ navigation }) => {
    /*
    state = {
        items:[],
        user: global.USER
    }
    
    componentDidMount(){
        if(!this.state.user){
            axios.get('/api/auth/user')
                 .then( res => {
                    this.setState({ user: res.data})
                });
        }
        if(this.state.items.length === 0 && this.state.user){
    
            axios.get('/api/profile/items/'+ this.state.user)
                    .then( res => {this.setState({items: res.data.items.reverse()})})
                    .catch(e => console.log(e))
        }
    }
    componentDidUpdate(){
        if(!this.state.user){
            axios.get('/api/auth/user')
                 .then( res => {
                    this.setState({ user: res.data})
                });
        }
        if(this.state.items.length === 0 && this.state.user){
    
            axios.get('/api/profile/items/'+ this.state.user)
                    .then( res => {this.setState({items: res.data.items.reverse()})})
                    .catch(e => console.log(e))

        }

    }

    refresh = () =>{
        const user = this.state.user;
        if(user){
            axios.get('/api/profile/items/'+ user)
                    .then( res => {this.setState({items: res.data.items.reverse()})})
                    .catch(e => console.log(e))

        }
    }
    */


    return(
        <View>
                <View>
                    <View>
                        <View>
                            <View style={{justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
                                <Image style={styles.profile_pic} source={require('../assets/placeholder_user.png')}/>
                            </View>

                            <View style={styles.username_view}>
                                <Text style={styles.username}>this.state.user</Text>
                            </View>

                            <View style={styles.bio_view}>
                                <Text style={styles.bio_text}>
                                    Living life and tryna make money
                                </Text>
                            </View>

                            <View style={{marginBottom: 20}}></View>
                            
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                        
                                <Image style={{marginLeft: 30, marginRight: 15, width:25, height:30}} source={require('../assets/penn_logo.png')}/>

                                <Text style={styles.title_text}>Class of </Text>
                                <Text style={styles.title_text}>2023</Text>
                            </View>

                            <View style={{marginBottom: 20}}></View>


                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image style={{marginLeft: 25, marginRight: 15, width:30, height:30}} source={require('../assets/heart_icon.png')}/>
                                <Text style={styles.title_text}>Interests: </Text>
                                    <Text>Clothing, Furniture</Text>
                            </View>

                        </View>

                        <View style={{marginBottom: 20}}></View>

                        <View >
                            <View >
                                <View>
                                    <View>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Image style={{marginLeft: 15}} source={require('../assets/vimeo.png')}/>
                                            <Text style={styles.title_text}>@Thrift_God.69</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{marginBottom: 20}}></View>
                                
                                <View >
                                    <Text >
                                        View Analytics
                                    </Text>

                                    <Text style={{color: 'blue'}}
                                    onPress={() => Linking.openURL('http://google.com')}>
                                        Google
                                    </Text>
                                    <TouchableHighlight
                                        onPress={() => 
                                            navigation.navigate('EditProfile')}>
                                            <View style={styles.login}>
                                            <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>EditProfile</Text>
                                            </View>
                                    </TouchableHighlight>

                                </View>
                            </View>

                            <Text>
                                Your listings:
                            </Text>
                            
                        </View>
                    </View>
                </View>
        </View>
    )
}

export default Profile;


//////////////////////////////////////////////////////////////////

/*
const Register = ({ navigation }) => {
    const [error, setError] = React.useState();
    const address = 'http://localhost:4000/api/register'; 

    function userDetails(username,password){
        const data = {
            'username':username,
            'password':password,
            'email':username,
        };

        axios.post(address, data).then(res =>{
            if(res.data === "error"){
                setError('Username has already been taken');
            }else{
                localStorage.setItem('username',username)
                navigation.navigate('/profile', { replace: true })
            }
        })
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

*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title_text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    title_view: {
        paddingLeft: 25,
    },
    bio_text: {
        color: "black",
        textShadowRadius: 1,
        fontSize: 20,
        fontStyle: 'italic'
    },
    bio_view: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile_pic: {
        //width: .5 * window_width,  //its same to '50%' of device width
        resizeMode: 'contain',
        height: 200,
        marginTop: 30,
        marginBottom: 30
    },
    username: {
        fontSize: 35,
        fontWeight: "bold",
    },
    username_view: {
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

