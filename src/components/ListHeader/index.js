import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { ListHeaderData } from '../../data';

const ListHeader = () => {
    return (
        <>
            {ListHeaderData.map((item) => (
                <Grid.Column key={item.content} mobile={4} computer={item.width}>
                    <div style={{ marginTop: '20px', color: 'white', textAlign: item.position || 'left' }}>
                        {item.content}
                    </div>
                </Grid.Column>
            ))}
        </>
    );
};

export default ListHeader;
