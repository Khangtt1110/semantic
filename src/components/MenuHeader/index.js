import React from 'react';
import { Menu, Input, Icon, Image } from 'semantic-ui-react';
import styles from './MenuHeader.module.scss';
import logo from '../../asserts//VansLogoHeader.png';
import classNames from 'classnames/bind';
import { HeaderData } from '../../data';

const cx = classNames.bind(styles);
const MenuHeader = () => {
    return (
        <Menu stackable secondary inverted compact borderless widths={9} className={cx('wrapper')}>
            <Menu.Item fitted>
                {/* <div className={cx('logo')}></div> */}
                <Image src={logo} size="big" className={cx('logo')} />
            </Menu.Item>

            {/* Search */}
            <Menu.Item className={cx('search')}>
                <Input
                    transparent
                    color="teal"
                    icon={{ name: 'search', color: 'grey' }}
                    iconPosition="left"
                    placeholder="SEARCH..."
                    size="small"
                ></Input>
            </Menu.Item>
            {/* List */}
            {HeaderData.map((item) => (
                <Menu.Item as="button" key={item.name}>
                    <p style={item.active && { color: 'red' }}>{item.name}</p>
                    <Icon bordered name={item.icon} color={item.active && 'red'} />
                </Menu.Item>
            ))}
            {/* Card */}
            <Menu.Item as="button" name="Card" className={cx('card')}>
                <Icon bordered name="shopping basket" color="red" size="large" fitted />
            </Menu.Item>
        </Menu>
    );
};

export default MenuHeader;
