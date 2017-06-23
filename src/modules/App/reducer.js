/**
 * Created by Stefen Suhat on 6/22/2017.
 */

const HANDLE_SWITCH_SIDER = 'HANDLE_SWITCH_SIDER';
const SHOW_NAVBAR = 'SHOW_NAVBAR';
const HIDE_NAVBAR = 'HIDE_NAVBAR';
const HANDLE_SWITCH_MENU_POPVER = 'HANDLE_SWITCH_MENU_POPVER';
const HANDLE_NAV_OPEN_KEYS = 'HANDLE_NAV_OPEN_KEYS';

const initialState = {
    loading: false,
    siderFold: localStorage.getItem('sideFold') === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(localStorage.getItem('navOpenKeys') || '[]') //The sidebar menu opens the keys
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case HANDLE_SWITCH_SIDER:
            localStorage.setItem('antdAdminSiderFold', !state.siderFold);
            return {
                ...state,
                siderFold: !state.siderFold,
            };
        case SHOW_NAVBAR :
            return {
                ...state,
                isNavbar: true,
            };
        case  HIDE_NAVBAR :
            return {
                ...state,
                isNavbar: false,
            };
        case HANDLE_SWITCH_MENU_POPVER:
            return {
                ...state,
                menuPopoverVisible: !state.menuPopoverVisible,
            };
        case HANDLE_NAV_OPEN_KEYS :
            return {
                ...state,
                ...action.payload
            };
        default:
            return {
                ...state
            }
    }
}

export function switchSider() {
    return dispatch => {
        dispatch({ type: HANDLE_SWITCH_SIDER });
    }
}

export function changeNavbar() {
    return dispatch => {
        if (document.body.clientWidth < 769) {
            dispatch({ type: SHOW_NAVBAR })
        } else {
            dispatch({ type: HIDE_NAVBAR })
        }
    }
}

export function switchMenuPopover() {
    return dispatch => {
        dispatch({ type: HANDLE_SWITCH_MENU_POPVER })
    }
}

export function handleNavOpenKeys(navOpenKeys) {
    return dispatch => {
        dispatch({ type: HANDLE_NAV_OPEN_KEYS, payload: navOpenKeys })
    }
}