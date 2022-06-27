import React from 'react';
import Banner from '../Banner';
import CardProduct from '../CardProduct';

const CustomCard = ({ cardData, bannerData }) => {
    return (
        <>
            <CardProduct data={cardData} />
            <Banner data={bannerData} />
        </>
    );
};

export default CustomCard;
