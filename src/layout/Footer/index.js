import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { infoData, serviceData, socialData, newsletterData } from '../../data';
import { Container } from 'semantic-ui-react';
import Contact from '../../components/Contact';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <Container style={{ display: 'flex', padding: '5rem 0' }}>
                <Contact data={infoData} />
                <Contact data={serviceData} />
                <Contact data={socialData} />
                <Contact data={newsletterData} />
            </Container>
        </div>
    );
};

export default Footer;
