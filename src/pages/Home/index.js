import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Headers from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Grid, Segment } from 'semantic-ui-react';
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
    // const getScreenSize = useSelector((state) => state.screenSize.screenWidth);

    return (
        <>
            <Headers />
            <div className={cx('wrapper')}>
                <Segment>
                    <Grid centered padded>
                        <Grid.Row>
                            <FeatureProduct />
                        </Grid.Row>
                        <Grid.Row>
                            <CardProduct data={productsData} />
                        </Grid.Row>
                        <Grid.Row>
                            <Banner data={bannerData} />
                        </Grid.Row>
                        <Grid.Row>
                            <CustomCard cardData={customCardData} bannerData={customBannerData} />
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer />
            </div>
        </>
    );
};

export default Home;
