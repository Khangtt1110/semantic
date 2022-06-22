import React from 'react';
import MenuHeader from '../../components/MenuHeader';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'semantic-ui-react';
import ListHeader from '../../components/ListHeader';
import Introduce from '../../components/Introduce';
import ScrollDown from '../../components/ScrollDown';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <MenuHeader />
                <ListHeader />
                <Introduce />
                <ScrollDown />
            </Container>
        </div>
    );
};

export default Header;
