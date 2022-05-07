
import Header from '../components/Header';
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getUserChats, getUserProfile, getUserImage } from "../api/ProfileAPI";
import axios from "axios";
import placeholder from '../assets/placeholder_user_sm.png'
import { Link } from 'react-router-dom';
import ScrollableFeed from 'react-scrollable-feed'
import FileViewer from 'react-file-viewer';
import { useNavigate } from 'react-router-dom';
const Messages = props => {

    const {id} = useParams();
    const [chats, setChats] = useState([]);
    const [user, setUser] = useState('');
    const [messages, setMessages] = useState([]);
    const [text, setText]           = useState('');
    const [attachment, setAttachment] = useState('');
    const [attachmentDisplay , setAttachmentDisplay]    = useState();
    const [receiver , setReceiver]       = useState('');
    const [sender, setSender]           = useState('');
    const [chatImages, setChatImages] = useState('');
    const [stateId , setStateId]  = useState(id);
    const [menuOpen, setMenuOpen] = useState(true)
    const inputRef = useRef()
    const navigate = useNavigate();
    const [processed, setProcessed] = useState(false)
    const [allowed, setAllowed] = useState(false)



    async function checkAllowed(){
        if(!processed && id){
            if(user){
                const chts = await getUserChats(user);
                chts.map( cht => {
                    if(cht._id === id){
                        setAllowed(true);
                        setProcessed(true)
                    }
                })
            
            }
        }
    }
    checkAllowed();

    async function setUp(){
        if(!user){
            const res = await axios.get('/api/auth/user');
            setUser(res.data)
        }
        if((!receiver || !sender || messages.length == 0 ) && id && user && allowed ){
            const res = await axios.post(`/api/messages/get/${id}`);
            const users = res.data.users;
            const msgs = res.data.messages;
            if(!receiver || !sender ){
                users.map( async usr => {
                    if(user != usr){
                        setReceiver( await getUserProfile(usr))
                    }else{
                        setSender( await getUserProfile(user))
                    }
                })

            }
            if(messages.length == 0 && allowed){
                setMessages(msgs)
            }
        }
        if(chats.length === 0 && user ){
            setChats(  await getUserChats(user));
        }
    }
    setUp()
    function sendMessage(user, message, attachment){
        if(allowed){
            if(attachment){
                var formData = new FormData();
                formData.append("file", attachment);
                axios.post('/api/file/upload', formData,{
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                }).then( res => {
                    const data = { sender:user, message:message, attachment:res.data }
                    axios.post(`/api/messages/add/${id}`, data ).then(res => setText(''))
                    setAttachment('');
                    setAttachmentDisplay('')
    
                })
            }else{
                const data = { sender:user, message:message, attachment:attachment }
                axios.post(`/api/messages/add/${id}`, data ).then(res => setText(''))
            }

        }
        

    }

 
    function getMessageType(user, text, attachment, msgSender, image  ){
        if(msgSender == user){
            return(
                <div className='flex m-5 justify-end gap-2'>
                    <div style={{overflowWrap:'anywhere'}} className='p-5 max-w-[70%] flex-col  flex w-fit  rounded-2xl border border-black'>
                    {
                            attachment && 
                            <div onClick={() => window.open(attachment,'_blank')} className='max-h-[240px] flex  my-2 w-fit bg-white'>
                                <FileViewer
                                        fileType={getFileType(attachment, true)}
                                        filePath={attachment}/>
                            </div>
                        }
                        {text}
                    </div>
                    
                    <img src={sender.profile_pic || placeholder} className='rounded-full  h-10 w-10 h-full bg-black mx-2 '/>
                </div>
            )
            
        }else if(msgSender != user && msgSender){
            return(
                <div className='flex m-5 gap-2'>
                    <img src={receiver.profile_pic || placeholder} className='rounded-full  h-10 w-10 h-full bg-black mx-2 '/>
                    <div style={{overflowWrap:'anywhere'}}  className='p-5 max-w-[70%] flex-col flex  rounded-2xl bg-gray-300'>
                    {
                            attachment && 
                            <div onClick={() => window.open(attachment,'_blank')} className='max-h-[240px] flex  my-2  bg-white'>
                                <FileViewer
                                        fileType={getFileType(attachment, true)}
                                        filePath={attachment}/>
                            </div>
                        }
                        {text}
                    </div>
                </div>            
            )

        }
    }

    async function updateMessages(id){
        if(allowed){
            const res = await axios.post(`/api/messages/get/${id}`);
            if(messages != res.data.messages){
                setMessages(res.data.messages);
            }

        }
    }
    async function updateChats(){
            const res = await getUserChats(user)
            if(res != chats){
                
                setChats(  res);
            }
    }

    useEffect(() => {
        if(stateId != id && stateId) {
            setReceiver('')
            window.location.reload()
        };
        if(id)updateMessages(id); checkAllowed();
        if(user)updateChats(user)
    },[id, messages, processed, allowed])
    
    function handleClick(){
        document.getElementById('selectFile').click()
    }
    function processAttachment(image){
        setAttachment(image);
        setAttachmentDisplay(URL.createObjectURL(image));

    }
    function getFileType(src, url){
        try{
            if(!url && src){
                var parts = src.split('/')
                return parts[parts.length - 1];
            }else{
                return src.split(/[#?]/)[0].split('.').pop().trim()
            }

        }catch{

        }
    }

    function getMenuIcon(open){
        if(open){
            return require('../assets/close.png')
        }else{
            return require('../assets/menu.png')
        }

    }

    return(
        
        <div className="h-full">
            <Header/>
            <div className="fixed flex w-full  h-full ">
                <div className={`sidebar text-white  bg-black ${ menuOpen ? ' w-96' : 'w-14'}`}>
                    <div className='bg-white flex items-center relative h-14 w-full '>
                        {
                            menuOpen && 
                            <div className='text-black my-auto ml-5 text-lg font-semibold absolute left-0'>Recents</div>
                        }
                        <img onClick={() => setMenuOpen(!menuOpen)}className='absolute cursor-pointer my-4 right-0 mr-5' src={getMenuIcon(menuOpen)}/>
                    </div>
                    { menuOpen &&
                        chats.map( chat => {
                            return(
                                <Link to={`/profile/messages/${chat._id}`}>
                                    <div>
                                    
                                        {
                                            chat.users.map( usr => {
                                                let lastMessage;  try{lastMessage = chat.messages[chat.messages.length - 1].message}catch{lastMessage = '...'};
                                                if(user && usr != user){
                                                    return(
                                                    
                                                        <div className={`flex px-2 py-5 mb-1 items-center ${chat._id === id ? ' bg-blue-300 ' : ''}`  }>
                                                            
                                                            <img src={ chat.image || placeholder} className='rounded-full  h-10 w-10 h-full bg-black mx-2 '/>
                                                            <div className=''>
                                                                <div className='text-xl font-semibold'>{usr}</div>
                                                                <div className='text-xs text-gray-500'>{lastMessage}</div>
                                                            </div>
                                                        </div>

                                                    )
                                                }
                                            })
                                        }
                          
                                    </div>
                                </Link>

                            )
                        })
                    }
                </div>
                { 
                    id && <div className='w-full h-ful relative  flex flex-col'>
                    <div className='h-14 p-2 flex items-center  w-full bg-gray-300'>
                        <img src={receiver.profile_pic || placeholder} className='rounded-full  h-10 w-10 h-full bg-black mx-2 '/>
                        {receiver.username}

                    </div>
                    <div className='h-full overflow-y-scroll  flex flex-col  w-full'>
                        <ScrollableFeed>
                        {
                            messages.map( message => {
                                return(
                                    getMessageType(user, message.message, message.attachment, message.sender)
                                )
                            })
                        }
                        </ScrollableFeed>
                        
                        
                    </div>
                    <div className='h-fit px-10  mb-10 bg-black'>
                        {
                            attachmentDisplay && 
                            <div className='h-40 my-2 w-40 bg-white'>
                                <FileViewer
                                        fileType={getFileType(attachment.type, false)}
                                        filePath={attachmentDisplay}/>
                            </div>
                        }
                        <div className='flex  h-32 bg-black items-center bg-white w-full justify-self-end gap-2'>
                            <div className='w-fit h-fit' onClick={() => handleClick()}>
                                <img src={require('../assets/attachment.png')} className='rounded-full cursor-pointer h-6 w-6 h-full mx-2 '/>
                                <input id='selectFile' 
                                        hidden type="file" 
                                        ref={inputRef}
                                        onChange={event => processAttachment(inputRef.current.files[0]) } />

                            </div>
                            
                            <textarea
                                style={{resize:'none'}}
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                                placeholder='Input your message..' 
                                className='w-full h-12   rounded-2xl bg-gray-200 py-2 px-5  '/>

                            <img src={require('../assets/send.png')} 
                                onClick={() => sendMessage(user, text, attachment)}
                                className='rounded-full cursor-pointer h-6 w-6 h-full mx-2 '/>
                        </div>
                        
                    </div>
                    
                </div>
                
                }
                
            </div>

        </div>
    )
}


export default Messages;