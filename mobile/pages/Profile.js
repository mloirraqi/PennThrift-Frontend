import React from 'react';
import axios from "axios";
import Header from "../components/Header";
import ProfileListings from "../components/ProfileListings";
import { Alert, StyleSheet, Text, View, Image, Pressable, Button, ScrollView, TouchableHighlight } from 'react-native';
import { Linking } from 'react-native';
import placeholder from '../assets/placeholder_user.png'

const Profile = ({ navigation, route }) => {

    const { replace, username } = route.params;

    
    const state = {
        items:[],
        user:global.USER,
        bio:'',
        profile_pic:'',
        venmo:'',
        year:'',
        processed:false,
        userInfo:'',
        interests:[],
    }

    const processUserInfo = (info) => {
        const {class_year, bio, interests, venmo, profile_pic } = info;
        this.setState({bio:bio, year:class_year, venmo:venmo, profile_pic:profile_pic});
        if(interests)this.setState({interests:interests});
    }

    React.useEffect(() => {
        const user = state.user;
        const items = state.items;
        const processed = state.processed;
        const userInfo = state.userInfo;
        if(!user){
            //TODO: this call is not working because 
            //server/auth.js in router.get('/user')
            //req.session.user is not working (returns null)
            axios.get('http://localhost:4000/api/auth/user')
                 .then( res => {
                    this.setState({ user: res.data});
            });
        }
        if(items.length === 0 && user){
    
            axios.get(`http://localhost:4000/api/profile/items/${user}`)
                    .then( res => {this.setState({items: res.data.items.reverse()})})
                    .catch(e => console.log(e))

        }
        
        if(user)getUserProfile(user).then(info => this.setState({userInfo:info}))
        if(user && userInfo && !processed){
            processUserInfo(userInfo);
            this.setState({processed:true})
        }
    })


    
    const refresh = () =>{
        const user = state.user;
        if(user){
            axios.get('http://localhost:4000/api/profile/items/'+ user)
                    .then( res => {this.setState({items: res.data.items.reverse()})})
                    .catch(e => console.log(e))
        }
    }
    

    const description = "Living life and tryna make money"
    const class_year = 2022
    const interests = ["Clothing", "Furniture", "Books"]
    const venmo_handle = "@Thrift_God.69"

    return(
        <View>
        <Header navigation={navigation}/>
            <ScrollView>
                <View>
                    <View>
                        <View style={styles.bio_box}>
                            <View style={{justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
                                <Image style={styles.profile_pic} source={state.profile_pic || placeholder}/>
                            </View>

                            <View style={styles.username_view}>
                                <Text style={styles.username}>{state.user}</Text>
                            </View>

                            <View style={styles.description_view}>
                                <Text style={styles.description_text}>
                                    {state.bio}
                                </Text>
                            </View>

                            <View style={{marginBottom: 10}}></View>
                            
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                        
                                <Image style={{marginLeft: 30, marginRight: 15, width:25, height:30}} source={require('../assets/penn_logo.png')}/>

                                <Text style={styles.title_text}>Class of </Text>
                                <Text style={styles.title_text}>{state.year}</Text>
                            </View>

                            <View style={{marginBottom: 20}}></View>

                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image style={{marginLeft: 25, marginRight: 15, width:30, height:30}} source={require('../assets/heart_icon.png')}/>
                                <Text style={styles.title_text}>Interests: </Text>
                                    <Text>{interests.map((interest) => interest+ ", ")}</Text>
                            </View>

                            <View style={{marginBottom: 20}}></View>

                            <View>
                                <View>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Image style={{marginLeft: 15, }} source={require('../assets/vimeo.png')}/>
                                        <Text style={styles.venmo_text}>{state.venmo}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{marginBottom: 10}}></View>
                        </View>

                        <View style={{marginBottom: 10}}></View>

                        <View>

                        <View style={{flexDirection:'row', alignItems:'center'}}>

                            <View style={styles.button}>
                                <Pressable
                                    onPress={() => 
                                        navigation.navigate('Analytics')}
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD">
                                    <View style={styles.analytics_button}>
                                        <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>View Analytics</Text>
                                    </View>
                                </Pressable>
                            </View>

                            <View style={styles.button}>
                                <Pressable
                                    onPress={() => 
                                        navigation.navigate('NewItem')}>
                                    <View style={styles.new_item_button}>
                                        <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>Add New Item</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                            
                        <View>
                            <ProfileListings
                                refresh={refresh}
                                //data={state.items}
                                user={username}
                                navigation={navigation}
                                />
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={{marginBottom: 150}}></View>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    bio_box: {
        borderWidth:3,
        padding:10,
        margin: 10,
        // backgroundColor:"#ababab"
    },
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
    venmo_text: {
        fontSize: 20,
        color: "#0645AD", // link color
    },
    title_view: {
        paddingLeft: 25,
    },
    description_text: {
        color: "black",
        textShadowRadius: 1,
        fontSize: 20,
        fontStyle: 'italic'
    },
    description_view: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
        marginBottom:20
    },
    profile_pic: {
        resizeMode: 'contain',
        height: 200,
        marginTop: 15,
        marginBottom: 15
    },
    username: {
        fontSize: 35,
        fontWeight: "bold",
    },
    username_view: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        marginBottom: 20,
      },
    analytics_button: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        height: 40,
        width:160,
        borderRadius:10,
        backgroundColor : "#0067b0",
        justifyContent: "center",
        alignItems: "center",
      },
    new_item_button: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        height: 40,
        width:160,
        borderRadius:10,
        backgroundColor : "#3f9669",
        justifyContent: "center",
        alignItems: "center",
      }
  });

export default Profile;