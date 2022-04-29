import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";



const NewItem = props => {

    const [itemName, setItemName]           = useState('');
    const [description, setDescription]     = useState('');
    const [conditiion, setCondition]        = useState('');
    const [catgory, setCategory]            = useState('');
    const [price, setPrice]                 = useState(0);
    const [image, setImage]                 = useState('')
    const conditiions = ['New', 'Like new', 'Lightly used', 'Used'];
    const categories  = ['For Fun', 'Vehicle', 'Apparel', 'Tickets', 
                            'Furniture', 'Electronics', 'Books/ notes', 'Miscellaneous']
   

    function submit(){
        console.log(catgory, itemName, price, description, conditiion)
    }

    return(
        <div className="">
            <Header/>
            <div className="grid grid-main mt-10 justify-center w-full h-full px-5 md:px-10">
                <div className="col-span-8 gap-20 grid grid-cols-3">
                    <div className="lg:col-span-1 col-span-3 grid gap-10">
                        <div className="gap-2 grid ">
                            <div className="font-semibold">
                                Item Name:
                            </div>
                            <input 
                                className="border py-1 font-semibold border-black outline-0 px-2 border-blak bg-[#F8F8F8]"
                                value={itemName}
                                onChange={(event) => setItemName(event.target.value)}/>
                        </div>
                        <img className="w-full h-64 border" src={require('../assets/placeholder_item.png')}/>
                        <div className="text-blue-600 text-xs w-full flex justify-center cursor-pointer underline">
                            Upload and image
                        </div>
                    </div>
                    <div className="lg:col-span-2 col-span-3 h-fit grid gap-10">
                        <div className="flex gap-10 ">
                            <span className="w-28 font-semibold flex">
                                Item Description:
                            </span>
                            <span className="w-full">
                                <textarea
                                    style={{resize:"none"}} 
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    className="border py-1 h-36 w-full font-semibold border-black outline-0 px-2 border-blak bg-[#F8F8F8]"/>
                            </span>
                        </div>
                        <div className="flex gap-10 ">
                            <span className="w-28 font-semibold flex">
                                Price:
                            </span>
                            <span className="w-full">
                                
                                <input 
                                    className="border py-1 w-full font-semibold border-black outline-0 px-2 border-blak bg-[#F8F8F8]"
                                    value={price}
                                    onChange={(event) => setPrice(event.target.value)}/>
                            </span>
                        </div>
                        <div className="lg:flex gap-10 ">
                            <span className="w-28 font-semibold flex">
                                Condition:
                            </span>
                            <span className="w-full flex gap-5">
                                
                                {
                                    conditiions.map( con => {
                                        return(
                                            <span className="text-sm gap-2 accent-black  cursor-pointer flex items-center"
                                                  onClick={() => setCondition(con)}> 
                                                <input className="" 
                                                    checked={con === conditiion} 
                                                    type='radio'/> 
                                                {con}  
                                            </span>
                                        )
                                    })
                                }
                                
                            </span>
                        </div>
                        <div className="flex gap-10 ">
                            <span className="w-28 font-semibold flex">
                                Category:
                            </span>
                            <span className="w-full grid grid-cols-2">
                                
                                {
                                    categories.map( cat => {
                                        return(
                                            <span className="text-sm gap-2 accent-black  cursor-pointer flex items-center"
                                                  onClick={() => setCategory(cat)}> 
                                                <input className="" 
                                                    checked={cat === catgory} 
                                                    type='checkbox'/> 
                                                {cat}  
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </div>
                    </div>
                    <div className='w-full col-span-3 flex justify-end'>
                         <img 
                            className="w-8 h-8 right-0 cursor-pointer" 
                            onClick={() => submit()}
                            src={require('../assets/plus.png')}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewItem;