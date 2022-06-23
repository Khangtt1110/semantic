import React from 'react';
import { Button, Card, Icon, Image, Rating } from 'semantic-ui-react';
import styles from './CardProduct.module.scss';
import classNames from 'classnames/bind';
import Divider from '../Divide';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../redux/counter';
import { likeAction, unlikeAction } from '../../redux/like';

const cx = classNames.bind(styles);

const CardProduct = ({ data }) => {
    const { like } = useSelector((state) => state.like);
    const dispatch = useDispatch();
    const customCardData = useSelector((state) => state.like.customCardData);
    return (
        <Card.Group centered stackable>
            {data.map((card) => (
                <Card link key={card.id} className={cx('wrapper')}>
                    {card.readMore ? (
                        <Card.Content className={cx('info')}>
                            <Card.Meta className={cx('date')}>{card.date}</Card.Meta>
                            <Card.Content className={cx('info')}>
                                <Rating icon="heart" onClick={(e) => dispatch(likeAction({ id: card.id, e }))} />
                                <Card.Meta className={cx('date')}>{String(card.like).padStart(2, '0')}</Card.Meta>
                            </Card.Content>
                        </Card.Content>
                    ) : (
                        <Card.Content as="a" className={cx('card')}>
                            <Icon name="eye" color="black" bordered />
                            <Button color="youtube" className={cx('card-btn')} onClick={() => dispatch(increment())}>
                                <Icon name="shopping basket" />
                            </Button>
                        </Card.Content>
                    )}

                    <Image src={card.image} className={card.readMore ? cx('picture') : cx('image')} />

                    <Card.Description textAlign="center" className={cx('context')}>
                        <Card.Header as="h5" content={card.title} />
                        <Divider margin="auto" width="10%" />
                    </Card.Description>

                    <Card.Meta as="a" textAlign="center" className={card.readMore ? cx('read-more') : cx('price')}>
                        {card.readMore ? 'Read more' : `$${card.price}`}
                    </Card.Meta>
                    {card.readMore && <Card.Meta className={cx('number')}>{card.id}</Card.Meta>}
                </Card>
            ))}
        </Card.Group>
    );
};

export default CardProduct;
