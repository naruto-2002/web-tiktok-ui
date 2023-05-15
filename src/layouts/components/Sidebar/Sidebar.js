import classNames from 'classnames/bind';
import routesConfig from '~/config/routes';
import { useEffect } from 'react';

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
import Discover from './Discover/Discover';
import { Footer } from './Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                <Discover />
                <Footer />
            </div>
        </div>
    );
}

export default Sidebar;
