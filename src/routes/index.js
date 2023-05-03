import { Home, Following, Profile, Upload } from '../pages';
import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: `/profile/:nickname`, component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
