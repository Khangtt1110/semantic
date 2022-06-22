import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const RectangleButton = ({ name, color, size, icon = false }) => {
    return (
        <Button color={color} size={size} style={{ width: '170px' }}>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' }}>
                <span>{name}</span>
                {icon && <Icon name={icon} bordered />}
            </p>
        </Button>
    );
};

export default RectangleButton;
