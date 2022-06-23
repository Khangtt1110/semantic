import React from 'react';
import Banner from '../Banner';
import CardProduct from '../CardProduct';
import { Card } from 'semantic-ui-react';

const CustomCard = ({ cardData, bannerData }) => {
    return (
        <Card.Group centered stackable>
            <CardProduct data={cardData} />
            <Banner data={bannerData} />
        </Card.Group>
    );
};

export default CustomCard;
