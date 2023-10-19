import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveUser } from '../../action/userAction'
import User from '../User/User'
// import axios from 'axios'
const InstagramFollower = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [count, setCount] = useState()
    const dispatch = useDispatch();
    // const { error, loading, isAuthenticated } = useSelector((state) => state.user)
    // let;
    const getCount = async (e) => {
        e.preventDefault();
        // console.log("sdf");

        // const options = {
        //     method: 'GET',
        //     url: `https://instagram-profile1.p.rapidapi.com/getprofileinfo/${name}`,
        //     headers: {
        //         'X-RapidAPI-Key': '805d2fcbd4msh43077584510c2aep1360cajsnfe2cd36cb03a',
        //         'X-RapidAPI-Host': 'instagram-profile1.p.rapidapi.com'
        //     }
        // };

        // try {
        //     console.log('entered');
        //     const response = await axios.request(options);
        //     console.log(response.data);
        //     setCount(response.data.followers);
        // } catch (error) {
        //     console.error(error);
        // }

        const userData = {
            "name": name,
            "username": username
        }
        dispatch(saveUser(userData))
        setCount(10);

    }







    return (
        <>
            <div className='container w-70 border border-primary d-flex flex-column justify-content-center align-items-center' >
                <h1>Number of followers : {count}</h1>
                <form onSubmit={getCount}>
                    <div className="mb-3">
                        <label className="form-label">name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                    </div>



                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >
            {/* <User /> */}
        </>

    )
}

export default InstagramFollower