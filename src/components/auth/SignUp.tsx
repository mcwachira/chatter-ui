import React from 'react';
import Auth from "./Auth.tsx";
import {Link} from "react-router-dom";

import {Link as MuiLink} from '@mui/material'

const SignUp =(props) => {
    return (
        <Auth onSubmit={async() => {}} submitLabel="Sign Up">
            <Link style={{alignSelf:"center"}} to="/login">
                <MuiLink>
                   Login
                </MuiLink>
            </Link>
        </Auth>
    );
}

export default SignUp;