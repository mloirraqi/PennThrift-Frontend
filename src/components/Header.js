import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserProfile } from '../api/ProfileAPI';
import io from 'socket.io-client';


const socket = io.connect('http://localhost:4000/api/messages')


const Header = props =>{
    const navigate = useNavigate()
    const [user, setUser] = useState();
    const [unread, setUnread] = useState(0);
    const [processing , setProcessing] = useState(false)

    function logOut(){
        axios.post('/api/auth/logout').then(res => navigate('/login', { replace: true }))
        global.LOGGED_IN = false;
    }
    async function setUp(){
        if(!user){
            const res = await axios.get('/api/auth/user');
            setUser(res.data);
            if(res.data){
                const profile =  await getUserProfile(res.data);
                setUnread(profile.unread.length)
            }
        }
        
    }

    async function updateUnread(){
        if(user && !processing){
            setProcessing(true)
            const profile =  await getUserProfile(user);
            setUnread(profile.unread.length)
            setProcessing(false);
        }

    }
    useEffect(() => {
        setUp();
        
        socket.on('unread', () => {
            updateUnread();
        })

    }, [user, unread])

   
    return(
        <div className="w-full bg-[#454545] py-2 flex justify-between h-12">
            {
                global.LOGGED_IN &&
                 <div onClick={() => logOut()}className='h-full cursor-pointer w-40 flex mx-5 justify-center items-center bg-white'>Logout</div>
            
            }
            {
                !global.LOGGED_IN &&
                <Link to='/login' className='h-full cursor-pointer w-40 flex mx-5 justify-center items-center bg-white'>Login</Link>
            }
            <div className='flex'>
                <Link to='/store'><img className='mx-1 w-8 h-8' src={require('../assets/shop_bag.png')}/></Link>
                <Link className='relative' to='/profile/messages'>
                    <div className='flex justify-center items-center py-[2px] px-[3px] text-white text-xs right-0 absolute rounded-full bg-red-600'>
                        {unread}
                    </div>
                    <img className='mx-1 w-8 h-8' src={require('../assets/messages.png')}/>
                </Link>
                <Link to='/profile/favourites'><img className='mx-1 w-8 h-8' src={require('../assets/favourite.png')}/></Link>
                <Link to='/profile'><img className='mx-1 w-8 h-8' src={require('../assets/placeholder_user_sm.png')}/></Link>

            </div>
        </div>
    )

}

export default Header;