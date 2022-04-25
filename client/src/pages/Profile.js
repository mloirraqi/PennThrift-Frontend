import { Link } from "react-router-dom";
import Header from "../components/Header";

const Profile = props => {
    
    return(
        <div>
            <Header/>
            <div className="grid grid-main justify-center w-full h-full px-5 md:px-10">
                <div className="col-span-8 mt-20 xl:gap-20 grid grid-cols-6">
                    <div className="xl:col-span-2 col-span-6 justify-center flex flex-col  items-center">
                        <img
                            className="w-60 h-60" 
                            src={require('../assets/placeholder_user.png')}/>
                        <div className="my-2 mt-5 self-start">Graduating Class : 2023</div>
                        <div className="my-2 self-start">Interests: Clothing, Furniture</div>
                        <div className="border my-5 p-10 border-gray-200">
                            Living life and tryna make money
                        </div>
                    </div>
                    <div className="xl:col-span-2 col-span-6  h-fit grid gap-5">
                        <div className="text-4xl h-fit font-semibold">{localStorage.getItem('username')}</div>
                        <div className="flex ">
                            <img className="w-8 h-5" src={require('../assets/vimeo.png')}/>
                            <div className="font-bold">@Thrift_God.69</div>
                        </div>
                        <div>
                            Your listings:
                        </div>
                        <div className="w-full border flex flex-col justify-center w-fit items-center border-[#368481] ">
                            <div className="border-[#368481] bg-[#00000033] mx-5 mt-5  p-2 rounded-lg border">
                                <img className="h-40 w-40" src={require('../assets/placeholder_item.png')}/>
                            </div>

                            <div className="flex items-center mt-10 m-2 self-end">
                                <div>Add new Item </div>
                                <img className="w-8 h-8" src={require('../assets/plus.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-2 col-span-6  h-fit flex">
                        <div className="p-1 border border-gray-400 font-semibold m-2 bg-gray-200">
                            View Analytics
                        </div>
                        <Link to='/editprofile' className="p-1 border border-gray-400  m-2 font-semibold bg-gray-200">
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;