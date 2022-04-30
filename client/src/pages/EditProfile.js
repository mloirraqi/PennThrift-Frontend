import Header from "../components/Header"
import { useState } from "react";
import axios from "axios";


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
        <div>
            <Header/>
            <div className="grid grid-main justify-center w-full h-full px-5 md:px-10">
                <div className="col-span-8 gap-20 my-10 grid-cols-5 grid">
                    <div className="lg:col-span-2 col-span-5 flex flex-col  items-center">
                        <div className="flex mb-10 text-4xl"><div className="mr-2 h-fit font-semibold">{user}'s </div> profile</div>
                        <img
                            className="w-60 h-60" 
                            src={require('../assets/placeholder_user.png')}/>
                        <div className="text-blue-400 underline cursor-pointer my-2">Upload a profile photo</div>
                        <textarea 
                            onChange={event => setDescription(event.target.value)} 
                            value={description} 
                            style={{resize:"none"}}
                            className="w-full border  h-20 p-5"/>
                    </div>
                    <div className="lg:col-span-3 col-span-5 h-fit grid gap-10 ">
                        <div className="">
                            <div className="font-semibold">My name is: <input className="bg-[#F8F8F8] ml-2 outline-0 border border-black px-2"/></div>
                        </div>
                        <div className="">
                            
                            <div className="font-semibold">I am class of:
                                <span className="inline-grid ml-5 font-normal">
                                    <span className="my-1">
                                        <input type='radio'/>
                                        <span className=""> 2022</span>
                                    </span>
                                    <span className="my-1">
                                        <input type='radio'/>
                                        <span className=""> 2023</span>
                                    </span>
                                    <span className="my-1">
                                        <input type='radio' />
                                        <span className=""> 2024</span>
                                    </span>
                                    <span className="my-1">
                                        <input type='radio'/>
                                        <span className=""> 2025</span>
                                    </span>

                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                               <span className="w-16 inline-table"> I’m most interested in:</span>
                                <span className="inline-grid grid-cols-2 gap-x-10 gap-y-2 grid-row-4 ml-5 font-normal">
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2">Clothes</span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2">Electronics</span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2">Books/ notes</span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2">Tickets</span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2">Furniture</span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2">Electronics</span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2">Miscellaneous</span>
                                    </span>
                                    <span className="">
                                        <input type='checkbox' className="h-4 w-4" />
                                        <span className="ml-2">Electronics</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">My venmo is: <input className="bg-[#F8F8F8] ml-2 outline-0 border border-black px-2"/></div>
                        </div>
                        <div>
                            <div className="flex border-2 rounded w-fit px-5 cursor-pointer border-black flex">Save</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditProfile;