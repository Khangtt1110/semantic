import React from 'react';
import { Card, CardContent, Image, Grid } from 'semantic-ui-react';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import Divider from '../Divide';
import RectangleButton from '../RectangleButton';

const cx = classNames.bind(styles);

const Banner = ({ data, width }) => {
    const mobile = width < 767 ? true : false;
    const normalDivider = <Divider margin="0 2px" width="10%" padding="1px" color="darkgrey" />;
    const activeDiver = <Divider margin="0 2px" width="10%" padding="1px" color="red" />;

    return (
        <>
            {data.map((item) => (
                <Grid.Column
                    key={item.id}
                    computer={item.width}
                    mobile={16}
                    className={item.active ? '' : cx('border-left')}
                >
                    <Card link className={cx('wrapper')}>
                        <CardContent className={cx('content')}>
                            <Card.Header
                                as="h1"
                                className={cx('number')}
                                content={String(item.id).padStart(2, '0')}
                            ></Card.Header>
                            <Card.Description className={cx('description')}>
                                <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
                                <Divider width="2rem" margin="30px 0" />
                                <RectangleButton name={item.button} color="red" icon="angle right" />
                            </Card.Description>
                            <Card.Description className={cx('elements')}>
                                {item.active && (
                                    <RectangleButton
                                        icon="angle left"
                                        fontSize={mobile ? '1rem' : '2rem'}
                                        width={mobile ? '30px' : '50px'}
                                        height={mobile ? '30px' : '50px'}
                                        margin={mobile ? '5rem auto 0' : '12rem auto 0'}
                                    />
                                )}
                                <Card.Content>
                                    <Image src={item.image} />
                                    {item.active && (
                                        <div>
                                            <Card.Description textAlign="center">
                                                <h5 dangerouslySetInnerHTML={{ __html: item.content }}></h5>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    {normalDivider}
                                                    {activeDiver}
                                                    {normalDivider}
                                                </div>
                                            </Card.Description>

                                            <Card.Meta textAlign="center" className={cx('price')}>
                                                ${item.price}
                                            </Card.Meta>
                                        </div>
                                    )}
                                </Card.Content>

                                {item.active && (
                                    <RectangleButton
                                        icon="angle right"
                                        fontSize={mobile ? '1rem' : '2rem'}
                                        width={mobile ? '30px' : '50px'}
                                        height={mobile ? '30px' : '50px'}
                                        color="red"
                                        margin={mobile ? '5rem auto 0' : '12rem auto 0'}
                                    />
                                )}
                            </Card.Description>
                        </CardContent>
                    </Card>
                </Grid.Column>
            ))}
        </>
    );
};

export default Banner;
