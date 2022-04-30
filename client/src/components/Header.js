import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Header = props =>{
    const navigate = useNavigate()

    function logOut(){
        axios.post('/api/auth/logout').then(res => navigate('/login', { replace: true }))
        global.LOGGED_IN = false;
    }
    return(
        <div className="w-full bg-[#454545] py-2 flex justify-between h-12">
            <div onClick={() => logOut()}className='h-full cursor-pointer w-40 flex mx-5 justify-center items-center bg-white'>Logout</div>
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