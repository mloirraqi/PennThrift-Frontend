import React from "react";
import { Component } from "react";
// import { Link } from "react-router-dom";
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableHighlight } from 'react-native';

// mobile/assets/dolphin.webp 

const Form = (props) => {
    state = {
        email:'',
        password:'',
    }

    const {name, error, userDetails, reset} = props;
    const error_class = (error !=null ? 'border-[#B31212]' : 'border-black');
    const classes = `w-fit  flex-col items-center text-start flex border-2 rounded-3xl pt-10 pb-2 px-16 ${error_class}`
    const [password, onChangePassword] = React.useState("");
    const [email, onChangeEmail] = React.useState("");

    return(
        <View style={styles.container}>

            <View><Image style={styles.image} source={require('../assets/dolphin.webp')}/></View>
                     <View>
                        <View >
                             <Text style={styles.subhead}>Username</Text>
                        </View>
                        <View style={{backgroundColor:"#fff", paddingTop:5, paddingBottom:5, borderWidth:1, borderColor:"#0053bf"}}>
                            <TextInput
                                placeholder='  Input email'
                                onChangeText={onChangeEmail}
                                //  onChange={(event) => this.setState({email:event.target.value})}
                                //     value={this.state.email}>
                                value={email}>
                            </TextInput>
                        </View>

                        <View style={{marginTop: 25}}></View>

                        <View >
                            <Text style={styles.subhead}>Password</Text>
                        </View>
                        <View style={{backgroundColor:"#fff", paddingTop:5, paddingBottom:5, borderWidth:1, borderColor:"#0053bf"}}>
                            <TextInput 
                                placeholder='  Input password'
                                onChangeText={onChangePassword}
                //                 onChangeText={(event) => this.setState({password:event.target.value})}
                //                 value={this.state.password}>
                                value={password}>
                            </TextInput>
                        </View>

                        <View style={{marginTop: 25}}></View>


                        <View style={styles.button}>
                            <TouchableHighlight
                                onClick={() => userDetails(this.state.email,this.state.password)}>
                                    <View style={styles.login}>
                                    <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>{name}</Text>
                                    </View>
                            </TouchableHighlight>
                        </View>
                        
                    </View>
                    {error != null && <View >
                                            <View >{error}</View>
                                            <View 
                                            onClick={() => reset()}>
                                                <View ><Text>x</Text></View>
                                            </View>
                                        </View>}
                </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        marginTop: 16,
        marginBottom: 25,
        paddingVertical: 10,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      subhead: {
        marginBottom: 10,
        marginTop: 20,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginBottom: 30,
      },
      login: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        height: 40,
        width:160,
        borderRadius:10,
        backgroundColor : "#0053bf",
        justifyContent: "center",
        alignItems: "center",
      },
      image: {
        padding: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        resizeMode: 'contain'
      },
  });

export default Form;