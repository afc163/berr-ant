import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const routes = ({ component: Component, ...rest }) => {
    let { requireAuth, isAuthenticated } = rest;

    if (!requireAuth) {
        requireAuth = false;
    }

    // If user authenticated
    if (isAuthenticated) {
        // If page need auth
        if (requireAuth === true) {
            return (
                <Route {...rest} render={props => <Component {...props} />} />
            );
        } else if (requireAuth === 'partial') {
            // If the page is doesn't require auth but can't be access if auth true
            return <Redirect to={'/'} />;
        }

        // If page doesn't need auth
        return <Route {...rest} render={props => <Component {...props} />} />;
    }

    // If user not authenticated //

    // page doesn't require Auth
    if (requireAuth === false || requireAuth === 'partial') {
        return <Route {...rest} render={props => <Component {...props} />} />;
    }
    // If page require Auth redirect user to login routes
    return (
        <Route
            {...rest}
            render={props => (
                <Redirect
                    to={{
                        pathname: `/login`,
                        state: { from: props.location },
                    }}
                />
            )}
        />
    );
};

routes.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
    ]).isRequired,
};

export default routes;
