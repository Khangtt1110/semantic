import React from 'react';
import { Button, Card, Icon, Image, Rating } from 'semantic-ui-react';
import styles from './CardProduct.module.scss';
import classNames from 'classnames/bind';
import Divider from '../Divide';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/counter';
import { likeAction } from '../../redux/like';

const cx = classNames.bind(styles);

const CardProduct = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <Card.Group centered stackable>
            {data.map((item) => (
                <Card link key={item.id} className={cx('wrapper')}>
                    {item.readMore ? (
                        <Card.Content className={cx('info')}>
                            <Card.Meta className={cx('date')}>{item.date}</Card.Meta>
                            <Card.Content className={cx('info')}>
                                <Rating icon="heart" onClick={(e) => dispatch(likeAction({ id: item.id, e }))} />
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
                    {item.readMore && <Card.Meta className={cx('number')}>{item.id}</Card.Meta>}
                </Card>
            ))}
        </Card.Group>
    );
};

export default CardProduct;
