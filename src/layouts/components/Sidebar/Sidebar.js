import classNames from 'classnames/bind';
import routesConfig from '~/config/routes';

import styles from './Sidebar.module.scss';
import Navigation, { NavigationItem } from './Navigation';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    MapActiveIcon,
    MapIcon,
    UserActiveGroupIcon,
    UserGroupIcon,
} from '~/components/Icons';
import Login from './LoginNotify';
import SuggestedAccounts from './SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-sidebar')}>
                <Navigation>
                    <NavigationItem
                        title={'For You'}
                        to={routesConfig.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <NavigationItem
                        title={'Following'}
                        to={routesConfig.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserActiveGroupIcon />}
                    />
                    <NavigationItem
                        title={'Explore'}
                        to={routesConfig.explore}
                        icon={<MapIcon />}
                        activeIcon={<MapActiveIcon />}
                    />
                    <NavigationItem
                        title={'LIVE'}
                        to={routesConfig.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Navigation>
                <Login />
                <SuggestedAccounts />
            </div>
        </div>
    );
}

export default Sidebar;
