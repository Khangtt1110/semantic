import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

const ScrollDown = () => {
    return (
        <Container text style={{ textAlign: 'center', paddingBottom: '60px' }}>
            <Header as="h6" icon inverted>
                <Icon name="circle notched" loading />
                Scroll down
            </Header>
        </Container>
    );
};

export default ScrollDown;
