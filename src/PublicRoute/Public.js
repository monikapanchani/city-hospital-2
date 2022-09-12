import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utility';

function Public({ component: Component, restricted = false, ...rest }) {
   console.log(restricted); 

    return (
        <Route {...rest} render={props => (
            isLogin() && restricted === true ?
                <Redirect to={"/"} />
                :
                <Component {...props} />
        )}


        />
    );
}

export default Public;