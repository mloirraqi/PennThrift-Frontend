import { Link } from 'react-router-dom';



const Header = props =>{


    return(
        <div className="w-full bg-[#454545] py-2 flex justify-between h-12">
            <Link to='/login' className='h-full w-40 flex mx-5 justify-center items-center bg-white'>Logout</Link>
            <div className='flex'>
                <img className='mx-1' src={require('../assets/shop_bag.png')}/>
                <img className='mx-1' src={require('../assets/messages.png')}/>
                <img className='mx-1' src={require('../assets/favourite.png')}/>
                <img className='mx-1' src={require('../assets/placeholder_user_sm.png')}/>

            </div>
        </div>
    )

}

export default Header;