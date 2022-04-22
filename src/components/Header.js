


const Header = props =>{


    return(
        <div className="w-full bg-[#454545] py-2 flex justify-end h-12">
            <img className='mx-1' src={require('../assets/shop_bag.png')}/>
            <img className='mx-1' src={require('../assets/messages.png')}/>
            <img className='mx-1' src={require('../assets/favourite.png')}/>
            <img className='mx-1' src={require('../assets/placeholder_user_sm.png')}/>
        </div>
    )

}

export default Header;