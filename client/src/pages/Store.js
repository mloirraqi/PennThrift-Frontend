import StoreItems from "../components/StoreItems";
import Header from "../components/Header";
import { Component } from "react";
import axios from "axios";


export default class Store extends Component {

    state = {
        items:[],
    }
    componentDidMount(){
        if(this.state.items.length === 0){
    
            axios.get('/api/item/all')
                    .then( res => {console.log(res.data);this.setState({items: res.data})})
                    .catch(e => console.log(e))

        }

    }
    componentDidUpdate(){
        if(this.state.items.length === 0){
    
            axios.get('/api/item/all')
                    .then( res => {this.setState({items: res.data})})
                    .catch(e => console.log(e))

        }

    }


    render(){


        return(
            <div>
                <Header/>
                <div className="grid grid-main justify-center w-full h-full px-5 md:px-10">
                    <div className="grid my-10 mt-20 gap-10 grid-cols-4 ">
                        <div className="lg:col-span-1 col-span-4 flex gap-2 flex-col">
                            <div className="text-base">
                                Search by <span className="font-semibold"> keyword</span>
                            </div>
                            <div className="">
                                <input placeholder="Search" className="border py-1 border-black text-sm px-5" />
                            </div>
                        </div>
                        <div className="lg:col-span-2 col-span-4 flex gap-2 flex-col">
                            <div className="text-base">
                                Search by <span className="font-semibold"> category</span>
                            </div>
                            <div className="grid grid-cols-3 gap-y-2 text-xs accent-black grid-rows-2">
                                <span className="flex gap-2 items-center"><input type='checkbox'/> <span>Apparel</span></span>
                                <span className="flex gap-2 items-center"><input type='checkbox'/> <span>Books/ notes</span></span>
                                <span className="flex gap-2 items-center"><input type='checkbox'/> <span>Furniture</span></span>
                                <span className="flex gap-2 items-center"><input type='checkbox'/> <span>Electronics</span></span>
                                <span className="flex gap-2 items-center"><input type='checkbox'/> <span>Tickets</span></span>
                                <span className="flex gap-2 items-center"><input type='checkbox'/> <span>Miscellaneous</span></span>
                            </div>
                        </div>
                        <div className="lg:col-span-1 col-span-4 flex gap-2 flex-col">
                            <div className="text-base">
                                Select <span className="font-semibold"> view</span>
                            </div>
                            <div className="text-xs grid gap-2 accent-black">
                                <span className="flex gap-2 items-center"><input type='checkbox'/> <span>List</span></span>
                                <span className="flex gap-2 items-center"><input type='checkbox'/> <span>Map</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <StoreItems
                            data={this.state.items}/>
                    </div>
                </div>
                
            </div>
        )
    }

    
}

