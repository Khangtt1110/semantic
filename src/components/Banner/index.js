import React from 'react';
import { Card, CardContent, Image } from 'semantic-ui-react';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import Divider from '../Divide';
import RectangleButton from '../RectangleButton';
import { bannerData } from '../../data';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <Card.Group centered stackable className={cx('wrapper')}>
            {bannerData.map((item) => (
                <Card link className={item.number === '01' ? cx('first-banner') : cx('second-banner')}>
                    <CardContent className={cx('content')}>
                        <Card.Header as="h1" className={cx('number')} content={item.number}></Card.Header>
                        <Card.Description className={cx('description')}>
                            {item.title}
                            <Divider width="2rem" margin="30px 0" />
                            <RectangleButton name={item.button} color="red" icon="angle right" />
                        </Card.Description>
                        <Card.Description className={cx('elements')}>
                            {item.active && <RectangleButton icon="angle left" width="50px" margin="12rem auto 0" />}
                            <Card.Content>
                                <Image src={item.image} />
                                {item.active && (
                                    <div>
                                        <Card.Description textAlign="center" className={cx('context')}>
                                            <Card.Header as="h5" content={item.content} />
                                            <div style={{ display: 'flex', textAlign: 'center' }}>
                                                <Divider margin="auto" width="10%" />
                                                <Divider margin="auto" width="10%" />
                                                <Divider margin="auto" width="10%" />
                                            </div>
                                        </Card.Description>

                                        <Card.Meta textAlign="center" className={cx('price')}>
                                            ${item.price}
                                        </Card.Meta>
                                    </div>
                                )}
                            </Card.Content>

                            {item.active && (
                                <RectangleButton icon="angle right" width="50px" color="red" margin="12rem auto 0" />
                            )}
                        </Card.Description>
                    </CardContent>
                </Card>
            ))}
        </Card.Group>
    );
};

export default Banner;
