import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const RectangleButton = ({ name, color, size, icon = false, height, width, margin, fontSize = '2rem' }) => {
    return (
        <Button
            color={color}
            size={size}
            style={{ height: height || '50px ', width: width || '170px', padding: '0', margin: margin || 'auto' }}
        >
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' }}>
                <span>{name}</span>
                {icon && (
                    <Icon
                        name={icon}
                        bordered
                        style={
                            name
                                ? { fontSize: '1.2rem' }
                                : {
                                      fontSize: fontSize,
                                      margin: 0,
                                      height: 0,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                  }
                        }
                    />
                )}
            </p>
        </Button>
    );
};

export default RectangleButton;
