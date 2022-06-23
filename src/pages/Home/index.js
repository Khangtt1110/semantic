import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Headers from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Segment } from 'semantic-ui-react';
import FeatureProduct from '../../components/FeatureProduct';
import CardProduct from '../../components/CardProduct';
import Banner from '../../components/Banner';
import { bannerData, customBannerData, customCardData, ProductsData } from '../../data';
import CustomCard from '../../components/CustomCard';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <>
            <Headers />

            <div className={cx('wrapper')}>
                <Segment>
                    <FeatureProduct />
                    <CardProduct data={ProductsData} />
                    <Banner data={bannerData} />
                    <CustomCard cardData={customCardData} bannerData={customBannerData} />
                </Segment>
                <Footer />
            </div>
        </>
    );
};

export default Home;
