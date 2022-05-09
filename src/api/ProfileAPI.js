import axios from 'axios';

const url = 'http://localhost:4000/api/profile/';
export const getAllUserProfiles = async () => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {}
}

// get profile/ user info by username
export const getUserProfile = async (username) => {
    try {
        const res = await axios.get(url + username);
        return res.data;
    } catch (err) {}
    // axios.get(url, {
    //     params: {
    //         username: name
    //     }
    // })
    // .then(res => res.data)
    // .catch(err => console.log(err));
}

// delete profile/user by id
export const deleteUserProfile = async (username) => {
    try {
        const res = await axios.delete(url + `delete/${username}`);
        return res.data;
    } catch (err) {}
    // axios.delete(url, username)
    // .then(res => res.data)
    // .catch(err => console.log(err));
}

// edit profile/user info by id
export const editUserProfile = async (username, data) => {
    try {
        const res = await axios.put(url + `edit/${username}`, data);
        return res.data;
    } catch (err) {}
    // const data = {
    //     'username': username,
    //     'email': email,
    //     'password': password
    // };

    // axios.put(url, data)
    // .then(res => res.data)
    // .catch(err => console.log(err))
}

// get items of user
export const getUserItems = async (username) => {
    try {
        const res = await axios.get(url + `items/${username}`, 
        {params: {username}});
        return res.data;
    } catch (err) {}
    // axios.get(url, {params: {username}})
    // .then(res => res.data)
    // .catch(err => console.log(err))
}




export const updateViews = async (username) =>{
    try{
        axios.get(`/api/analytics/profile/views/${username}`)
            .then( res =>{
                let views = res.data.profile_views;
                const date = new Date();
                const month = date.getMonth();
                views = views.map( (v, i) =>  {return(i == month ? v = v + 1 : v = v)} );
                axios.put(`/api/analytics/profile/update/${username}`,{profile_views:views})
               
            })
    }catch{

    }
}

export const getUserChats = async (username) => {
    try{
        const res = await axios.get(`/api/profile/chats/${username}`);
        return res.data
    }catch{

    }
}

export const getUserImage = async(username) => {
    try {
        const res = await axios.get(url + username)
        return res.data.profile_pic;
    } catch (err) {}
}

export const getUserFavourites = async(username) => {
    if(username){
        try{
            const res = await axios.post('/api/profile/favourites',{username:username});
            return res.data;
        }catch(err){}

    }
}