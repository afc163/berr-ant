import { Spin } from 'antd';
import classnames from 'classnames';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Footer, Header, Sider } from '../../../modules/Layout';
import routes from '../../../router';
import { changeNavbar, handleNavOpenKeys, switchMenuPopover, switchSider } from '../reducer';
import Route from './CustomRoute';

const history = createHistory();

const mapStateToProps = state => {
    const { isNavbar, menuPopoverVisible, navOpenKeys, siderFold } = state.app;

    return { isNavbar, menuPopoverVisible, navOpenKeys, siderFold };
};

const reduxConnector = connect(mapStateToProps, { switchMenuPopover, switchSider, changeNavbar, handleNavOpenKeys });


class App extends React.Component {
    render() {
        const { children, location, isNavbar, menuPopoverVisible, navOpenKeys, siderFold, ...props } = this.props;
        const { switchMenuPopover, switchSider, handleNavOpenKeys } = props;

        const headerProps = {
            siderFold,
            location,
            isNavbar,
            menuPopoverVisible,
            navOpenKeys,
            switchMenuPopover() {
                switchMenuPopover();
            },
            switchSider() {
                switchSider();
            },
            changeOpenKeys(openKeys) {
                localStorage.setItem('navOpenKeys', JSON.stringify(openKeys));
                handleNavOpenKeys({ navOpenKeys: openKeys });
            },
        };

        const siderProps = {
            siderFold,
            location,
            navOpenKeys,
            changeOpenKeys(openKeys) {
                localStorage.setItem('navOpenKeys', JSON.stringify(openKeys));
                handleNavOpenKeys({ navOpenKeys: openKeys });
            },
        };

        return (
            <ConnectedRouter history={history}>
                <div
                    className={classnames('layout', { ['fold']: isNavbar ? false : siderFold, },
                        { ['withnavbar']: isNavbar, },
                    )
                    }
                >
                    {!isNavbar
                        ? <aside
                            className={classnames('sider', 'light')}>
                            <Sider {...siderProps} />
                        </aside>
                        : ''}

                    <div className={classnames('main')}>
                        <div className={classnames('spin')}>
                            <Spin tip='Loading...' spinning={false} size='large'>
                                <Header {...headerProps} />
                                {/*<Bread location={location} />*/}
                                <div className={classnames('container')}>
                                    <div className={classnames('content')}>
                                        <Switch>
                                            {routes.map((route, index) => (
                                                <Route
                                                    key={index}
                                                    requireAuth={route.requireAuth}
                                                    isAuthenticated={false}
                                                    exact={route.exact}
                                                    path={route.path}
                                                    component={route.component}
                                                />
                                            ))}
                                        </Switch>
                                    </div>
                                </div>
                                <Footer />
                            </Spin>
                        </div>
                    </div>

                </div>
            </ConnectedRouter>
        )
    }
}

App.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object,
    dispatch: PropTypes.func,
    loading: PropTypes.object,
    siderFold: PropTypes.bool,
};

export default reduxConnector(App);