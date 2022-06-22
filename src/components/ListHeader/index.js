import React from 'react';
import { List } from 'semantic-ui-react';
import { ListHeaderData } from '../../data';

const ListHeader = () => {
    return (
        <List horizontal style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            {ListHeaderData.map((item) => (
                <List.Item key={item}>
                    <List.Content as="a" style={{ color: 'white' }}>
                        {item}
                    </List.Content>
                </List.Item>
            ))}
        </List>
    );
};

export default ListHeader;
