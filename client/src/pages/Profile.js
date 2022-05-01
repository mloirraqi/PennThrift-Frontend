import axios from "axios";
import { Component, useEffect, useState } from "react";
import { Link, renderMatches } from "react-router-dom";
import Header from "../components/Header";
import ProfileListings from "../components/ProfileListings";


export default class Profile extends Component {
    

    state = {
        items:[],
        user:global.USER
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

    render(){
        
        return(
            <div>
                <Header/>
                <div className="grid grid-main justify-center w-full h-full px-5 md:px-10">
                    <div className="col-span-8 mt-20 lg:gap-20 grid grid-cols-6">
                        <div className="lg:col-span-2 col-span-6 flex flex-col  items-center">
                            <img
                                className="w-60 h-60" 
                                src={require('../assets/placeholder_user.png')}/>
                            <div className="my-2 mt-5 self-start">Graduating Class : 2023</div>
                            <div className="my-2 self-start">Interests: Clothing, Furniture</div>
                            <div className="border my-5 p-10 border-gray-200">
                                Living life and tryna make money
                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-6  h-fit grid gap-5">
                            <div className="flex justify-between">
                                <div>
                                    
                                    <div className="text-4xl mb-10 h-fit font-semibold">{this.state.user}</div>
                                    <div className="flex ">

                                        <img className="w-8 h-5" src={require('../assets/vimeo.png')}/>
                                        <div className="font-bold">@Thrift_God.69</div>
                                    </div>
                                </div>
                                
                                <div className="h-ffull flex">
                                    <div className="p-1 border border-gray-400 h-fit font-semibold m-2 bg-gray-200">
                                        View Analytics
                                    </div>
                                    <Link to='/profile/edit' className="p-1 border border-gray-400 h-fit  m-2 font-semibold bg-gray-200">
                                        Edit Profile
                                    </Link>
                                </div>
                            </div>
                            <div>
                                Your listings:
                            </div>
                            <div className="">
                                <ProfileListings
                                    refresh={this.refresh}
                                    data={this.state.items}/>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
    

    

}