import React, { useEffect, useState } from 'react'

const InstagramFollower = () => {
    const [name, setName] = useState('')
    const [count, setCount] = useState()
    // let;
    const getCount = (e) => {
        e.preventDefault();
        console.log("sdf");
        setCount(5)
    }
    useEffect(() => {

    }, [count])
    return (
        <div className='container w-50' >
            <h1>Number of followers : {count}</h1>
            <form onSubmit={getCount}>
                <div className="mb-3">
                    <label className="form-label">username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}

export default InstagramFollower