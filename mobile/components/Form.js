import React from "react";
import { Component } from "react";
// import { Link } from "react-router-dom";
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';


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
        <View className="flex items-center flex-col">
                     <View className={classes}>
                        <View className="w-full justify-self-start">
                             <Text>Username</Text>
                        </View>
                        <TextInput
                            placeholder='input email'
                            className="w-64 text-xs my-3 h-[45px] p-2 bg-[#F8F8F8]"
                            onChangeText={onChangeEmail}
                            //  onChange={(event) => this.setState({email:event.target.value})}
                            //     value={this.state.email}>
                            value={email}>
                        </TextInput>
                        <View className="w-full justify-self-start">
                            <Text>Password</Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder='input password'
                                className="w-64 text-xs my-3 h-[45px] p-2 bg-[#F8F8F8]"
                                onChangeText={onChangePassword}
                //                 onChangeText={(event) => this.setState({password:event.target.value})}
                //                 value={this.state.password}>
                                value={password}>
                            </TextInput>
                        </View>
                        <Button
                            className="bg-[#C4C4C4] my-3 w-28 cursor-pointer  h-8  flex justify-center items-center"
                            onPress={() => userDetails(state.email,state.password)}
                            title={ name }>
                            
                        </Button>
                        
                    </View>
                    {error != null && <View className="bg-[#B312120D] my-10 border-[#B31212] border h-10 flex justify-center items-center p-5  text-center flex-row">
                                            <View className="text-[#B31212]">{error}</View>
                                            <View 
                                            onClick={() => reset()}
                                                className="mx-5 cursor-pointer">
                                                <View  className="text-[#B31212]"><Text>x</Text></View>
                                            </View>
                                        </View>}
                </View>
    );
}

export default Form;