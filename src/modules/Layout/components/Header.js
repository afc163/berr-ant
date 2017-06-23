import { Badge, Icon, Menu, Popover } from 'antd';
import classnames from 'classnames';
import React from 'react';
import Menus from './Menu';
import {withRouter} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
function Header({
                    switchSider,
                    siderFold,
                    isNavbar,
                    menuPopoverVisible,
                    location,
                    switchMenuPopover,
                    navOpenKeys,
                    changeOpenKeys,
                }) {
    let handleClickMenu = e => console.log(e);

    const menusProps = {
        siderFold: false,
        darkTheme: false,
        isNavbar,
        handleClickNavMenu: switchMenuPopover,
        location,
        navOpenKeys,
        changeOpenKeys,
    }

    return (
        <div className={classnames('header')}>
            {isNavbar
                ? <Popover
                    placement='bottomLeft'
                    onVisibleChange={switchMenuPopover}
                    visible={menuPopoverVisible}
                    overlayClassName={ classnames('popovermenu deneme') }
                    trigger='click'
                    content={<Menus { ...menusProps } />}>
                    <div className={classnames('siderbutton')}>
                        <Icon type='bars' />
                    </div>
                </Popover>
                : <div className={classnames('siderbutton')} onClick={switchSider}>
                    <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
                </div>}
            <Menu className='header-menu' mode='horizontal' onClick={handleClickMenu}>
                <SubMenu
                    style={{
                        float: 'right',
                    }}
                    title={<span> <Icon type="user" />John Doe </span>}>
                    <MenuItemGroup title="Settings">
                        <Menu.Item key="profile">
                            <a href="#/pages/profile" rel="noopener noreferrer">Profile</a></Menu.Item>
                        <Menu.Item key='logout'>
                            <a>Sign Out</a>
                        </Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu style={{ float: 'right', }} title={< span > <Badge count={5}>
                    <Icon type="notification" />
                </Badge> </span>} />
            </Menu>
        </div>
    )
}

export default withRouter(Header)
