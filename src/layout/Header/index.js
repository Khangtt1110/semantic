import React from 'react';
import MenuHeader from '../../components/MenuHeader';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <MenuHeader />
        </div>
    );
};

export default Header;
