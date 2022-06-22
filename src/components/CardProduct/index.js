import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { ProductsData } from '../../data';
import styles from './CardProduct.module.scss';
import classNames from 'classnames/bind';
import Divider from '../Divide';

const cx = classNames.bind(styles);

const CardProduct = () => {
    return (
        <Card.Group centered stackable>
            {ProductsData.map((card) => (
                <Card link key={card.id} className={cx('wrapper')}>
                    <Card.Content as="a" className={cx('card')}>
                        <Icon name="eye" color="black" bordered />
                        <Button color="youtube" className={cx('card-btn')}>
                            <Icon name="shopping basket" />
                        </Button>
                    </Card.Content>
                    <Image src={card.image} className={cx('image')} />

                    <Card.Description textAlign="center" className={cx('context')}>
                        <Card.Header as="h5" content={card.title} />
                        <Divider margin="auto" width="10%" />
                    </Card.Description>

                    <Card.Meta textAlign="center" className={cx('price')}>
                        ${card.price}
                    </Card.Meta>
                </Card>
            ))}
        </Card.Group>
    );
};

export default CardProduct;
