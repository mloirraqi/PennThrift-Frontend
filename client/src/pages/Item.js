import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import StoreItems from '../components/StoreItems';
import { useParams } from "react-router-dom";
import placeholder from '../assets/placeholder_item.png';






const Item = props => {

    const [userInfo, setUserInfo]           = useState('');
    const [item, setItem]                   = useState({});
    const [viewer, setViewer]               = useState();
    const [viewed, setViewed]               = useState(false);
    const [favourites, setFavourites]       = useState([]);
    const [similarItems, setSimilarItems ]  = useState([]);
    const { id } = useParams();
    const [stateId, setStateId]             = useState(id);

    const getInfo = async () => {
        if (!item || !viewer) {
            const resU = await axios.get('/api/auth/user');
            setViewer(resU.data);
            const resI = await axios.get(`/api/item/${id}`);
            setItem(resI.data)
        }
        if(viewer && !viewed){
            setViewed(true)
            updateViews(id)
        }
    }

    const updateViews = async(id) => {
        const url = `/api/analytics/item/views/${id}`;
        const res = await axios.get(url)
        let views = res.data.views + 1;
        axios.put(url,{views:views})
    }
    getInfo();

    const favourite = (id) =>{
        if(favourites.includes(id)){
            return require('../assets/favourite_red.png')
        }
        return require('../assets/favourite.png')
    }

    const update = (id) =>{
        if(favourites.includes(id)){
           favourites =  favourites.filter( (item) =>{
                   return item !== id;
            });
           return setFavourites(favourites)
        }
        
       return setFavourites([...favourites,id]);
    }
    
    const filter = (items) =>{
        let similar = []
        items.map( i => {
                
            if(i._id == item._id){
                return
            }
            if(i.owner == item.owner){
                similar.push(i)
                return
            }
            if(i.category == item.category){
                similar.push(i)
                return
            }
            
        } );
    
        return similar;
    }

    const fecthSimilar = () =>{
        if(similarItems.length === 0 ){
    
            axios.get(`/api/item/all`)
                    .then( res => {setSimilarItems(filter(res.data))})
                    .catch(e => console.log(e))

        }
    }

   
    useEffect(() => {
        
        if((stateId != id) && stateId){
            window.location.reload()
        }
        fecthSimilar()
    },[similarItems,id, item, viewer, viewed, favourites, stateId])

    return(
        <div>
            <Header/>
            <div className="grid grid-m justify-center w-full h-full px-5 md:px-10">
                <div className="col-span-8 mt-20 lg:gap-20 grid grid-cols-6">
                    <div key={item._id}  className="border-2 h-[300px] w-full lg:col-span-2 col-span-6 p-5 border-[#368481]  ">
                        <img src={item.image || placeholder} className='w-full border-[#368481] rounded-lg border-2 h-[200px]'/>
                        <div className='flex mt-5 text-xs gap-5'>
                            <div className='font-bold'> 
                                {item.category}
                            </div>
                            <div className='flex gap-2 w-full flex-col'>
                                <div>{item.name}</div>
                                <div> ${parseFloat(item.price)}</div>
                                <div className='flex items-center  justify-between'> 
                                    <Link to={`/user/${item.owner}`} className='text-blue-600 w-18 truncate overflow-ellipsis underline'>@{item.owner}</Link>
                                    <img 
                                    onClick={() => update(item._id)}
                                    src={favourite(item._id)}  
                                    className='w-5 cursor-pointer h-5'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-6">
                        <div className="font-semibold text-lg">
                            Similar Items
                        </div>
                        <StoreItems data={similarItems}/>
                    </div>
                </div>

            </div>
        </div>
        
        
    )
}

export default Item;