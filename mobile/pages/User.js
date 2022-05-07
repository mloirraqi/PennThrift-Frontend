import React from 'react';
import axios from "axios";
import { Component, useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileListings from "../components/ProfileListings";
import { Alert, StyleSheet, Text, View, Image, Pressable, Button, ScrollView, TouchableHighlight } from 'react-native';
import { Linking } from 'react-native';


const  User = props => {
    
    const [bio, setBio]                     = useState();
    const [userInfo, setUserInfo]           = useState('');
    // , setImageDisplay]   = useState('');
    const [year, setYear]                   = useState();
    const [venmo, setVenmo]                 = useState();
    // const [interests, setInterests]         = useState([]);
    const [processed, setProcessed]         = useState(false);
    const [items, setItems]                 = useState([]);
    const [viewer, setViewer]               = useState();
    const [viewed, setViewed]               = useState(false);
    // const { username } = useParams();

    const interests = ["Bunnies", "and nothing else"];
    username = "JubJub"

    /*
    const getUserInfo = async () => {
        if (!userInfo) {
            const res = await axios.get('/api/auth/user');
            setViewer(res.data);
            if(username)setUserInfo(await getUserProfile(username));
        }
        if(userInfo && !processed){
            processUserInfo(userInfo);
            setProcessed(true);
        }
        if(viewer && !viewed){
            setViewed(true)
            updateViews(username);
        }
    }

    getUserInfo();

    function processUserInfo(info){
        const {class_year, bio, interests, venmo, profile_pic } = info;
        setBio(bio);
        setYear(class_year);
        if(interests)setInterests(interests);
        setVenmo(venmo);
        setImageDisplay(profile_pic);
    }

    useEffect(() => {
        if(items.length === 0 && username){
            axios.get(`/api/profile/items/${username}`)
                    .then( res => {setItems(res.data.items.reverse())})
                    .catch(e => console.log(e))
        }
    },[items, bio, interests, imageDisplay, venmo, year])
    */


    return(
    <View>
        <Header/>
            <View>
                <View>
                    <View>
                        {/*<Image
                            source={imageDisplay}/>  || placeholder */}
                        <Text>Graduating Class : {year}</Text>
                        <View>
                        <Text>Interests: </Text>
                            {
                                interests.map(intr  => {
                                    return(
                                        <Text key={intr}> {intr} </Text>
                                    )
                                })
                            }
                        </View>
                        <Text>
                                {bio}
                        </Text>
                    </View>
                    <View>
                        <View>
                            <View>
                                <Text>{username}</Text>
                                <View>
                                    <Image source={require('../assets/vimeo.png')}/>
                                    <Text>{venmo}</Text>
                                </View>
                            </View>
                            
                            <View>
                                <Text>
                                    Follow
                                </Text>
                                {/*<Link to='/profile/messages'>
                                    Message
                                </Link>*/}
                            </View>
                        </View>
                        <View>
                            {/*
                            <StoreItems
                                data={items}/>
                            */}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default User;
    