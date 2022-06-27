import React from 'react';
import { Button, Card, Grid, Icon, Image, Rating } from 'semantic-ui-react';
import styles from './CardProduct.module.scss';
import classNames from 'classnames/bind';
import Divider from '../Divide';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/counter';
import { likeAction, unLikeAction } from '../../redux/like';

const cx = classNames.bind(styles);

const CardProduct = ({ data }) => {
    const dispatch = useDispatch();

    // function to check active and increase like
    const handleGetActive = (id, e) => {
        const isActive = e.target.classList[0] === 'active' ? true : false;
        if (!isActive) {
            dispatch(likeAction(id));
            return;
        }
        dispatch(unLikeAction(id));
    };

    return (
        <>
            {data.map((item) => (
                <Grid.Column key={item.id} computer={3} tablet={5} mobile={16} className={cx('wrapper')}>
                    <Card link className={cx('container')}>
                        {item.readMore ? (
                            <Card.Content className={cx('info')}>
                                <Card.Meta className={cx('date')}>{item.date}</Card.Meta>
                                <Card.Content className={cx('info')}>
                                    <Rating icon="heart" onClick={(e) => handleGetActive({ id: item.id }, e)} />
                                    <Card.Meta className={cx('date')}>{String(item.like).padStart(2, '0')}</Card.Meta>
                                </Card.Content>
                            </Card.Content>
                        ) : (
                            <Card.Content as="a" className={cx('card')}>
                                <Icon name="eye" color="black" bordered />
                                <Button
                                    color="youtube"
                                    className={cx('card-btn')}
                                    onClick={() => dispatch(increment({ id: item.id }))}
                                >
                                    <Icon name="shopping basket" />
                                </Button>
                            </Card.Content>
                        )}

                        <Image src={item.image} className={item.readMore ? cx('picture') : cx('image')} />

                        <Card.Description textAlign="center">
                            <Card.Header as="h5" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <Divider margin="auto" width="10%" />
                        </Card.Description>

                        <Card.Meta as="a" textAlign="center" className={item.readMore ? cx('read-more') : cx('price')}>
                            {item.readMore ? 'Read more' : `$${item.price}`}
                        </Card.Meta>
                        {item.readMore && (
                            <Card.Meta className={cx('number')}>{String(item.id).padStart(2, '0')}</Card.Meta>
                        )}
                    </Card>
                </Grid.Column>
            ))}
        </>
    );
};

export default CardProduct;
