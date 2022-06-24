import React from 'react';
import { Input, Icon, Image, Label, Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import styles from './MenuHeader.module.scss';
import logo from '../../assets//VansLogoHeader.png';
import classNames from 'classnames/bind';
import { HeaderData } from '../../data';

const cx = classNames.bind(styles);

const MenuHeader = () => {
    // Get count in redux store
    const counter = useSelector((state) => state.counter.total);

    return (
        <Grid.Row className={cx('wrapper')}>
            <Grid.Column computer={2} tablet={2} mobile={4}>
                <Image src={logo} size="big" className={cx('logo')} />
            </Grid.Column>

            {/* Search */}
            <Grid.Column computer={4} mobile={9} className={cx('search')} only="computer mobile">
                <Input
                    transparent
                    color="teal"
                    icon={{ name: 'search', color: 'grey' }}
                    iconPosition="left"
                    placeholder="SEARCH..."
                    size="small"
                ></Input>
            </Grid.Column>
            {/* List */}
            {HeaderData.map((item) => (
                <Grid.Column
                    key={item.name}
                    computer={item.computer}
                    className={cx('menu')}
                    tablet={item.tablet}
                    only="computer tablet"
                    style={{ justifyContent: item.position || 'left' }}
                >
                    <p style={item.active && { color: 'red' }}>{item.name}</p>
                    <Icon bordered name={item.icon} color={item.active && 'red'} />
                </Grid.Column>
            ))}
            {/* Card */}
            <Grid.Column className={cx('card')} computer={2} tablet={1} mobile={3}>
                <Icon bordered name="shopping basket" color="red" size="large" fitted />
                {counter > 0 ? (
                    <Label color="red" floating size="mini" className={cx('label-count')}>
                        {counter}
                    </Label>
                ) : null}
            </Grid.Column>
        </Grid.Row>
    );
};

export default MenuHeader;
