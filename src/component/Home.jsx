import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h1>this is home {user && <span className='text-green-500'>{user.displayName}</span>} </h1>
        </div>
    );
};

export default Home;