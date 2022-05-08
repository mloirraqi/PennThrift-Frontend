import Header from "../components/Header"
import { useState, useRef, useEffect } from "react";
import axios from "axios";
//import { editUserProfile, getUserProfile } from "../api/ProfileAPI";
import placeholder from '../assets/placeholder_user.png';
import { Alert, StyleSheet, Text, TextInput, View, Image, Pressable, Button, ScrollView, TouchableHighlight } from 'react-native';

//import { useNavigate } from "react-router-dom";

// TODO: pass user info through props instead of axios
const EditProfile = props => {
    
    const [bio, setBio]                     = useState('Edit description');
    const [user, setUser]                   = useState('');
    const [userInfo, setUserInfo]           = useState('');
    const [image, setImage]                 = useState( );
    const [imageDisplay, setImageDisplay]   = useState('');
    const [year, setYear]                   = useState();
    const [venmo, setVenmo]                 = useState();
    const [interests, setInterests]         = useState([]);
    const [processed, setProcessed]         = useState(false);
    const [loading, setLoading]              = useState(false);
    //const inputRef = useRef();
    //const navigate = useNavigate();

/*
    const getUserInfo = async () => {
        if (!userInfo) {
            const res = await axios.get('/api/auth/user');
            setUser(res.data);
            if(user)setUserInfo(await getUserProfile(user));
        }
        if(userInfo && !processed){
            processUserInfo(userInfo);
            setProcessed(true);

        }
    }

    getUserInfo()
   
    useEffect(() =>{},[loading])

    function processUserInfo(info){
        const {class_year, bio, interests, venmo, profile_pic } = info;
        setBio(bio);
        setYear(class_year);
        if(interests)setInterests(interests);
        setVenmo(venmo);
        setImageDisplay(profile_pic);
    }

    function handleClick(){
        document.getElementById('selectImage').click()
    }

    function processImage(image){
        setImage(image);
        setImageDisplay(URL.createObjectURL(image));

    }

    function processInterests(val){
        var intrs = [...interests];
        if(interests.includes(val)){
            intrs = intrs.filter( item => item !== val )
            setInterests([...intrs])
        }else{
            intrs.push(val)
            setInterests([...intrs])
        }
    }

    const uClassList = [
        {val:'2022'},
        {val:'2023'},
        {val:'2024'},
        {val:'2025'}
    ]

    const interestsList = [
        {val:'Clothes'},
        {val:'Books/ notes'},
        {val:'Electronics'},
        {val:'Tickets'},
        {val:'Furniture'},
        {val:'Miscellaneous'}
    ]

    

    function save(){
        setLoading(true);
        if(image){
            var formData = new FormData();
            formData.append("file", image);

            axios.post('/api/file/upload', formData,{
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            }).then( res => {
                const imageUrl = res.data;
                const data = {
                    bio:bio,
                    profile_pic:imageUrl,
                    username:user,
                    venmo:venmo,
                    class_year:year,
                    interests:interests,
                }

                editUserProfile(user, data).then(res =>{
                    if(res === 'Success! User updated.'){
                        navigate('/profile', {replace:true})
                    }
                })
            })
        return;
        }else if(imageDisplay && !image){
            const data = {
                bio:bio,
                profile_pic:'',
                username:user,
                venmo:venmo,
                class_year:year,
                interests:interests,
                profile_pic:imageDisplay
            }

            editUserProfile(user, data).then(res =>{
                if(res === 'Success! User updated.'){
                    navigate('/profile', {replace:true})
                }
            })
            return;
        }else{
            const data = {
                bio:bio,
                profile_pic:'',
                username:user,
                venmo:venmo,
                class_year:year,
                interests:interests,
            }

            editUserProfile(user, data).then(res =>{
                if(res === 'Success! User updated.'){
                    navigate('/profile', {replace:true})
                }
            })

        }
        setLoading(false);
        return;
    }
    */

    return(
        <View>
            <Header/>
            <View>
                <View>
                    <View>
                        <Text>
                            <Text>{user}'s</Text>
                            <Text>profile</Text>
                        </Text>
                        {/*<Image
                            source={imageDisplay}/>*/}
                        <View onPress={() => handleClick()}>
                            <Text>Upload an image</Text>
                            {/*
                            <TextInput
                                id='selectImage' 
                                hidden type="file" 
                                ref={inputRef}
                                accept="image/png, image/gif, image/jpeg"
                                onChange={event => processImage(inputRef.current.files[0]) } />
                            */}
                        </View>

                        <TextInput 
                            //onChange={event => setBio(event.target.value)} 
                            value={bio} 
                            style={{resize:"none"}}
                            />
                    </View>

                    <View>
                        <View>
                            <Text>My name is: </Text>
                            <TextInput value={user}/>
                        </View>

                        <View>
                            <View>
                                <Text>I am class of: </Text>
                                <View>
                                    {
                                        /*
                                        uClassList.map( uc =>{
                                            return(
                                                <span key={uc.val} onClick={() => {setYear(uc.val)}}>
                                                    <input checked={uc.val === year} type='radio'/>
                                                    <span>{uc.val}</span>
                                                </span>
                                            )
                                        })
                                        */
                                    }
                                </View>
                            </View>
                        </View>
                        <View>
                            <View>
                               <Text>I’m most interested in: </Text>
                                <View>
                                    {
                                        /*
                                        interestsList.map( intr => {
                                            return(
                                                <span key={intr.val} onClick={() =>processInterests(intr.val)} className="">
                                                    <input checked={interests.includes(intr.val)} type='checkbox' className="h-4 w-4" />
                                                    <span className="ml-2">{intr.val}</span>
                                                </span>                                          
                                            )
                                        })
                                        */
                                    }
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>My venmo is: </Text>
                            {/*<TextInput value={venmo} onChange={(e) => setVenmo(e.target.value)}/>*/}
                        </View>
                        <View>
                            {
                                /*
                                !loading && 
                                    <Button
                                    onPress={() => save()}>Save</Button>
                                */
                            }
                            {
                                /*
                                loading &&
                                <Image
                                source={require('../assets/loading.gif')}/>
                                */
                            }
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EditProfile;

