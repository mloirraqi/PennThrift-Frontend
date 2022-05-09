import Header from "../components/Header"
import { useState } from "react";
import axios from "axios";
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';



const EditProfile = props => {
    const [description, setDescription] = useState('Edit description');
    const [user, setUser] = useState('');
    if(!user){
        axios.get('/api/auth/user')
             .then( res => {
                setUser(res.data)
            });
    }

    return(
        <View>
            <Header/>
            <View className="grid grid-main justify-center w-full h-full px-5 md:px-10">
                <View className="col-span-8 gap-20 my-10 grid-cols-5 grid">
                    <View className="lg:col-span-2 col-span-5 flex flex-col  items-center">
                        <View className="flex mb-10 text-4xl"><View className="mr-2 h-fit font-semibold"><Text>{user}'s </Text></View> <Text>profile</Text></View>
                        <Image
                            className="w-60 h-60" 
                            src={require('../assets/placeholder_user.png')}/>
                        <View className="text-blue-400 underline cursor-pointer my-2"><Text>Upload a profile photo</Text></View>
                        <textarea 
                            onChange={event => setDescription(event.target.value)} 
                            value={description} 
                            style={{resize:"none"}}
                            className="w-full border  h-20 p-5"/>
                    </View>
                    <View className="lg:col-span-3 col-span-5 h-fit grid gap-10 ">
                        <View className="">
                            <View className="font-semibold"><Text>My name is:</Text> <input className="bg-[#F8F8F8] ml-2 outline-0 border border-black px-2"/></View>
                        </View>
                        <View className="">
                            
                            <View className="font-semibold"><Text>I am class of:</Text>
                                <span className="inline-grid ml-5 font-normal">
                                    <span className="my-1">
                                        <input type='radio'/>
                                        <span className=""> <Text>2022</Text></span>
                                    </span>
                                    <span className="my-1">
                                        <input type='radio'/>
                                        <span className=""> <Text>2023</Text></span>
                                    </span>
                                    <span className="my-1">
                                        <input type='radio' />
                                        <span className=""> <Text>2024</Text></span>
                                    </span>
                                    <span className="my-1">
                                        <input type='radio'/>
                                        <span className=""> <Text>2025</Text></span>
                                    </span>

                                </span>
                            </View>
                        </View>
                        <View>
                            <View className="font-semibold">
                               <span className="w-16 inline-table"><Text>I am most interested in:</Text></span>
                                <span className="inline-grid grid-cols-2 gap-x-10 gap-y-2 grid-row-4 ml-5 font-normal">
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2"><Text>Clothes</Text></span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2"><Text>Electronics</Text></span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2"><Text>Books/ notes</Text></span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2"><Text>Tickets</Text></span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2"><Text>Furniture</Text></span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2"><Text>Electronics</Text></span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2"><Text>Miscellaneous</Text></span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2"><Text>Electronics</Text></span>
                                    </span>
                                </span>
                            </View>
                        </View>
                        <View className="">
                            <View className="font-semibold"><Text>My venmo is:</Text> <input className="bg-[#F8F8F8] ml-2 outline-0 border border-black px-2"/></View>
                        </View>
                        <View>
                            <View className="flex border-2 rounded w-fit px-5 cursor-pointer border-black flex"><Text>Save</Text></View>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default EditProfile;