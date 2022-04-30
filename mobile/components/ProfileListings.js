
/*
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Component } from 'react'
import { Link } from 'react-router-dom';
const placeholder = require('../assets/placeholder_item.png')

export default class ProfileListings extends Component{

    state = {
        items:[]
    }
    constructor(props){
        super(props);
        this.setState({items:[...props.data]}) 
    }
    componentDidMount(){
        if(this.state.items != this.props.data ){
            this.setState({items: this.props.data})
        }

    }
    componentDidUpdate(){
        if(this.state.items != this.props.data ){
            this.setState({items: this.props.data})
        }
    }

    delete(id){
        axios.delete('/api/item/delete/' + id).then( res => this.props.refresh())
    }

    render(){
        
        return(
            <View >
                <View >
                     <View >
                        <Image src={require('../assets/placeholder_item_rd.png')}/>
                    </View>

                    <View >
                        <Text>Add new Item </Text>
                        <Link to='/profile/newitem'><img className="w-8 h-8" src={require('../assets/plus.png')}/></Link> 
                    </View>
                </View>
                {
                    this.state.items.map(item => {
                        return(
                            <View key={item._id} >
                                <Image
                                    onClick={() => this.delete(item._id)}
                                    src={ require('../assets/delete.png')} />
                                <Image src={item.image || placeholder} />
                                <View>
                                    <Text> 
                                        {item.category}
                                    </Text>
                                    <View>
                                        <Text>{item.name}</Text>
                                        <Text> ${item.price}</Text>
                                           <a href=''>@{item.owner}</a>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

//////////////////////////////////////////////////////////////////

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
*/