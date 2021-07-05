import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...res }) => {

    return (
        <Route {...res}
            render = {() => {

                // ___________________________________IF / ELSE STATEMENT 
                if(localStorage.getItem('token')){
                    return <Component/>;
                } else {
                    return <Redirect to = '/' /> //___________home page
                    }
                }}
        />
    );
};

export default PrivateRoute 