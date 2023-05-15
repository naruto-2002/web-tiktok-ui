import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import BorderTop from '~/components/BorderTop';

const cx = classNames.bind(styles);

// AboutNewsroomContactCareersByteDance
// TikTok for GoodAdvertiseDevelopersTransparencyTikTok RewardsTikTok Embeds
// HelpSafetyTermsPrivacy
// Creator PortalCommunity Guidelines
// © 2023 TikTok
function Footer() {
    return (
        <BorderTop className={cx('wrapper')}>
            <p className={cx('list-item')}>
                <a className={cx('item')} href="#">
                    About
                </a>
                <a className={cx('item')} href="#">
                    Newsroom
                </a>
                <a className={cx('item')} href="#">
                    Contact
                </a>
                <a className={cx('item')} href="#">
                    ByteDance
                </a>
            </p>
            <p className={cx('list-item')}>
                <a className={cx('item')} href="#">
                    TikTok for Good
                </a>
                <a className={cx('item')} href="#">
                    Advertise
                </a>
                <a className={cx('item')} href="#">
                    Developers
                </a>
                <a className={cx('item')} href="#">
                    Transparency
                </a>
                <a className={cx('item')} href="#">
                    TikTok Rewards
                </a>
                <a className={cx('item')} href="#">
                    TikTok Embeds
                </a>
            </p>
            <p className={cx('list-item')}>
                <a className={cx('item')} href="#">
                    Help
                </a>
                <a className={cx('item')} href="#">
                    Safety
                </a>
                <a className={cx('item')} href="#">
                    Terms
                </a>
                <a className={cx('item')} href="#">
                    Privacy
                </a>
                <a className={cx('item')} href="#">
                    Creator Portal
                </a>
                <a className={cx('item')} href="#">
                    Community Guidelines
                </a>
            </p>
            <span className={cx('more')}>© 2023 TikTok</span>
        </BorderTop>
    );
}

export default Footer;
