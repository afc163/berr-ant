import React from 'react';
import { config, classnames } from '../../../utils';
import Menus from './Menu';
import {withRouter} from 'react-router-dom'

function Sider({ siderFold, location, navOpenKeys, changeOpenKeys }) {
    const menusProps = { siderFold, location, navOpenKeys, changeOpenKeys };

    return (
        <div>
            <div className={classnames('logo')}>
                {siderFold ? '' : <span>{config.logoText}</span>}
            </div>
            <Menus {...menusProps} />
        </div>
    )
}

export default withRouter(Sider);
