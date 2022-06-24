import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { IntroduceData } from '../../data';
import RectangleButton from '../RectangleButton';

const Introduce = () => {
    return (
        <Container style={{ margin: '150px', paddingLeft: '100px' }}>
            <Header as="h1" inverted style={{ fontSize: '4rem', fontWeight: 200 }}>
                {IntroduceData.title}
            </Header>
            <Header
                as="h4"
                inverted
                style={{
                    fontWeight: 200,
                    opacity: '0.8',
                    letterSpacing: '1px',
                    marginBottom: '30px',
                    lineHeight: '1.5rem',
                }}
            >
                <div dangerouslySetInnerHTML={{ __html: IntroduceData.content }}></div>
            </Header>
            <RectangleButton name="Discover Now" color="red" icon="angle right" />
        </Container>
    );
};

export default Introduce;
