import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            navigate(from, {replace:true})
        })
        .catch(error=> console.log(error))
    }
    return (
        <div>
            <div className='divider'>OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'>G</button>
            </div>
        </div>
    );
};

export default SocialLogin;