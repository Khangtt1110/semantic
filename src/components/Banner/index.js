import React from 'react';
import { Card, CardContent } from 'semantic-ui-react';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import Divider from '../Divide';
import RectangleButton from '../RectangleButton';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <Card.Group centered stackable className={cx('wrapper')}>
            <Card link className={cx('first-banner')}>
                <CardContent className={cx('content')}>
                    <Card.Header as="h1" className={cx('number')} content="01"></Card.Header>
                    <Card.Description className={cx('description')}>
                        This <br /> Season's
                        <br /> must-have
                        <Divider width="10%" margin="30px 0" />
                        <RectangleButton name="Shop now" color="red" icon="angle right" />
                    </Card.Description>
                    <Card.Description>
                        <RectangleButton icon="angle left" width="50px" />
                        <RectangleButton icon="angle right" width="50px" color="red" />
                    </Card.Description>
                </CardContent>
            </Card>
        </Card.Group>
    );
};

export default Banner;
