import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { FeaturedProductData } from '../../data';
import GenderCheckbox from '../GenderCheckbox';

const FeatureProduct = () => {
    return (
        <Grid container stackable centered style={{ margin: '30px' }}>
            <Grid.Row>
                <Header as="h1" style={{ letterSpacing: '2px', fontSize: '3rem', fontWeight: 500 }}>
                    {FeaturedProductData.name}
                </Header>
            </Grid.Row>
            <Grid.Row style={{ justifyContent: 'center' }}>
                <GenderCheckbox props={FeaturedProductData.gender} />
            </Grid.Row>
        </Grid>
    );
};

export default FeatureProduct;
