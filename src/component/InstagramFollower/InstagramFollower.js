import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../../action/userAction'
// import User from '../User/User'
import axios from 'axios'
const InstagramFollower = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [count, setCount] = useState()
    const dispatch = useDispatch();
    const { error, loading, isAuthenticated } = useSelector((state) => state.user)
    // let;
    const getCount = async (e) => {
        e.preventDefault();

        console.log("sdf");



        const options = {
            method: 'POST',
            url: 'https://instagram120.p.rapidapi.com/api/instagram/profile',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '805d2fcbd4msh43077584510c2aep1360cajsnfe2cd36cb03a',
                'X-RapidAPI-Host': 'instagram120.p.rapidapi.com'
            },
            data: {
                username: `${username}`
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.result);

            console.log(response.data);
            setCount(response.data.result.edge_followed_by.count);
            const userData = {
                "name": name,
                "username": username,
                "count": response.data.result.edge_followed_by.count
            }
            dispatch(saveUser(userData))
        } catch (error) {
            console.error(error);
        }



        // setCount(15)
        // console.log(count);

        // setCount(10);

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



                    <button type="submit" className="btn btn-primary">{loading ? "loading..." : "Sumbit"}</button>
                </form>
            </div >
            {/* <User /> */}
        </>

    )
}

export default InstagramFollower