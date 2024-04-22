import React from 'react';
import Auth from "./Auth.tsx";
import {Link} from "react-router-dom";
import {Link as MuiLink} from '@mui/material'

const Login =() => {
    return (
<Auth onSubmit={async() => {}} submitLabel="Login">
    <Link style={{alignSelf:"center"}} to="/signup">
        <MuiLink>
            Sign up
        </MuiLink>

    </Link>
</Auth>
    );
}

export default Login;