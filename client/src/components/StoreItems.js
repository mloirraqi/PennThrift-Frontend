import { Component } from 'react'







export default class StoreItems extends Component{


    constructor(props){
        super(props);
        this.data = props.data
    }
    state = {
        favourites:[]
    }

    render(){
        

        const favourite = (id) =>{
            const favourites = this.state.favourites;
            if(favourites.includes(id)){
                console.log(favourites)
                return require('../assets/favourite_red.png')
            }
            return require('../assets/favourite.png')
        }

        const update = (id) =>{
            let favourites = this.state.favourites;
            if(favourites.includes(id)){
               favourites =  favourites.filter( (item) =>{
                       return item !== id;
                });
               return this.setState({favourites:favourites})
            }
           return this.setState({favourites:[...this.state.favourites,id]})
        }
        return(
            <div className='grid justify-center mt-20 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-2'>
                {
                    this.data.map(item => {
                        return(
                            <div key={item.id} className="border-2 w-56 p-5 border-[#368481] w-fit">
                                <img src={item.image} className='w-full border-[#368481] rounded-lg border-2 h-36'/>
                                <div className='flex mt-5 text-xs gap-5'>
                                    <div className='font-bold'> 
                                        {item.category}
                                    </div>
                                    <div className='flex gap-2 flex-col'>
                                        <div>{item.title}</div>
                                        <div> ${parseFloat(item.price)}</div>
                                       <div className='flex items-center justify-between'> 
                                           <a href='' className='text-blue-600 w-18 truncate overflow-ellipsis underline'>{item.author}</a>
                                           <img 
                                            onClick={() => update(item.id)}
                                            src={favourite(item.id)}  
                                            className='w-5 cursor-pointer h-5'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                }
            </div>
        )
    }
}