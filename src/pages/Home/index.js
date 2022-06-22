import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Headers from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Card, Segment } from 'semantic-ui-react';
import FeatureProduct from '../../components/FeatureProduct';
import CardProduct from '../../components/CardProduct';
import MenuHeader from '../../components/MenuHeader';
import Banner from '../../components/Banner';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <>
            <Headers />
            <div className={cx('wrapper')}>
                <Segment>
                    <FeatureProduct />
                    <CardProduct />
                    <Banner />
                </Segment>
            </div>
            <Footer />
        </>
    );
};

export default Home;
