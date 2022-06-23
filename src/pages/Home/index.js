import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Headers from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Segment } from 'semantic-ui-react';
import FeatureProduct from '../../components/FeatureProduct';
import CardProduct from '../../components/CardProduct';
import Banner from '../../components/Banner';
import { bannerData, customBannerData } from '../../data';
import CustomCard from '../../components/CustomCard';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const Home = () => {
    const customCardData = useSelector((state) => state.like.customCardData);
    const productsData = useSelector((state) => state.counter.productsData);

    return (
        <>
            <Headers />
            <div className={cx('wrapper')}>
                <Segment>
                    <FeatureProduct />
                    <CardProduct data={productsData} />
                    <Banner data={bannerData} />
                    <CustomCard cardData={customCardData} bannerData={customBannerData} />
                </Segment>
                <Footer />
            </div>
        </>
    );
};

export default Home;
