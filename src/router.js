/**
 * Created by Stefen Suhat on 6/23/2017.
 */

import { Dashboard } from './modules/Dashboard';

const routes = [
    { requireAuth: false, exact: true, path: '/', component: Dashboard },
];

export default routes;
