import { Home, Following, Explore, Live, Profile, Upload } from '../pages';
import { HeaderOnly } from '~/layouts';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.explore, component: Explore },
    { path: routesConfig.live, component: Live },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
