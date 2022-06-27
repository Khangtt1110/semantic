import React from 'react';
import { Grid } from 'semantic-ui-react';
import { ListHeaderData } from '../../data';

const ListHeader = ({ mobile }) => {
    return (
        <>
            {ListHeaderData.map((item) => (
                <Grid.Column key={item.content} mobile={4} computer={item.width}>
                    <div
                        style={{
                            marginTop: '30px',
                            color: 'white',
                            textAlign: mobile ? 'left' : item.position || 'left',
                        }}
                    >
                        {item.content}
                    </div>
                </Grid.Column>
            ))}
        </>
    );
};

export default ListHeader;
