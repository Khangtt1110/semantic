import React from 'react';
import MenuHeader from '../../components/MenuHeader';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Container, Grid } from 'semantic-ui-react';
import ListHeader from '../../components/ListHeader';
import Introduce from '../../components/Introduce';
import ScrollDown from '../../components/ScrollDown';

const cx = classNames.bind(styles);

const Headers = () => {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Grid>
                    <MenuHeader />
                    <Grid.Row>
                        <ListHeader />
                    </Grid.Row>
                </Grid>

                <Introduce />
                <ScrollDown />
            </Container>
        </div>
    );
};

export default Headers;
