import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { FeaturedProductData } from '../../data';
import GenderCheckbox from '../GenderCheckbox';

const FeatureProduct = ({ mobile }) => {
    return (
        <Grid container centered style={{ margin: '50px' }}>
            <Grid.Row>
                <Header as="h1" style={{ letterSpacing: '2px', fontSize: mobile ? '2rem' : '3rem', fontWeight: 500 }}>
                    {FeaturedProductData.name}
                </Header>
            </Grid.Row>
            <Grid.Row style={{ justifyContent: 'center', marginTop: '1rem' }}>
                <GenderCheckbox props={FeaturedProductData.gender} />
            </Grid.Row>
        </Grid>
    );
};

export default FeatureProduct;
