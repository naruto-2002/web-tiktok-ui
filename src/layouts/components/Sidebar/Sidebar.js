import classNames from 'classnames/bind';
import routesConfig from '~/config/routes';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
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

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-sidebar')}>
                <Menu>
                    <MenuItem
                        title={'For You'}
                        to={routesConfig.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title={'Following'}
                        to={routesConfig.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserActiveGroupIcon />}
                    />
                    <MenuItem
                        title={'Explore'}
                        to={routesConfig.explore}
                        icon={<MapIcon />}
                        activeIcon={<MapActiveIcon />}
                    />
                    <MenuItem
                        title={'LIVE'}
                        to={routesConfig.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
            </div>
        </div>
    );
}

export default Sidebar;
