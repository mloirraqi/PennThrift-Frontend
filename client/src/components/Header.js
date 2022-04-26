import { Link } from 'react-router-dom';



const Header = props =>{


    return(
        <div className="w-full bg-[#454545] py-2 flex justify-between h-12">
            <Link to='/login' className='h-full w-40 flex mx-5 justify-center items-center bg-white'>Logout</Link>
            <div className='flex'>
                <Link to='/store'><img className='mx-1 w-8 h-8' src={require('../assets/shop_bag.png')}/></Link>
                <Link to='/'><img className='mx-1 w-8 h-8' src={require('../assets/messages.png')}/></Link>
                <Link to='/'><img className='mx-1 w-8 h-8' src={require('../assets/favourite.png')}/></Link>
                <Link to='/profile'><img className='mx-1 w-8 h-8' src={require('../assets/placeholder_user_sm.png')}/></Link>

            </div>
        </div>
    )

}

export default Header;