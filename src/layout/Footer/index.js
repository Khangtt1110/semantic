import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { infoData, serviceData, socialData, newsletterData } from '../../data';
import { Container, Grid } from 'semantic-ui-react';
import Contact from '../../components/Contact';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <Container style={{ display: 'flex' }}>
                <Grid style={{ width: '100%' }}>
                    <Grid.Column computer={4} tablet={8} mobile={8}>
                        <Contact data={infoData} />
                    </Grid.Column>
                    <Grid.Column computer={4} tablet={8} mobile={8}>
                        <Contact data={serviceData} />
                    </Grid.Column>
                    <Grid.Column computer={4} tablet={8} mobile={16}>
                        <Contact data={socialData} />
                    </Grid.Column>
                    <Grid.Column computer={4} tablet={8} mobile={14}>
                        <Contact data={newsletterData} />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;
